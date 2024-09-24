import React, { useState } from 'react';
import { auth, db, storage } from '../firebase'; // Import Firebase config and storage
import { toast } from 'react-toastify';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Import Firebase Storage functions
import Spinner from '@/lib/spinner';

const RegisterLandComponent = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [ninNumber, setNinNumber] = useState('');
    const [latitude, setLatitude] = useState(''); // State for latitude
    const [longitude, setLongitude] = useState(''); // State for longitude
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [image1, setImage1] = useState(null); // State for the second image
    const [imageUrl, setImageUrl] = useState('');
    const [imageUrl1, setImageUrl1] = useState(''); // State to hold the second image URL

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!fullName || !email || !address || !phoneNumber || !ninNumber || !latitude || !longitude) {
            setError('All fields are required.');
            return;
        }

        if (!image || !image1) {
            setError('Both images are required.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            // Create references for both images
            const storageRef1 = ref(storage, `images/${image.name}`);
            const storageRef2 = ref(storage, `images/${image1.name}`);

            // Upload the first image
            const uploadTask1 = uploadBytesResumable(storageRef1, image);
            const uploadTask2 = uploadBytesResumable(storageRef2, image1);

            // Handle first upload
            const downloadURL = await new Promise((resolve, reject) => {
                uploadTask1.on(
                    'state_changed',
                    null,
                    (error) => reject(error),
                    async () => {
                        const downloadURL = await getDownloadURL(uploadTask1.snapshot.ref);
                        setImageUrl(downloadURL);
                        resolve(downloadURL);
                    }
                );
            });

            // Handle second upload
            const downloadURL1 = await new Promise((resolve, reject) => {
                uploadTask2.on(
                    'state_changed',
                    null,
                    (error) => reject(error),
                    async () => {
                        const downloadURL1 = await getDownloadURL(uploadTask2.snapshot.ref);
                        setImageUrl1(downloadURL1);
                        resolve(downloadURL1);
                    }
                );
            });

            // Proceed with user registration
            const response = await fetch('/api/registerLand', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    uid: auth.currentUser.uid,
                    fullName,
                    email,
                    address,
                    phoneNumber,
                    ninNumber,
                    latitude,
                    longitude,
                    imageUrl: downloadURL,
                    imageUrl1: downloadURL1,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            toast.success('Registered successfully');
        } catch (error) {
            setError('Error during registration: ' + error.message);
            toast.error('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto pt-20 pl-[250px]">
            <h1 className="text-center text-2xl font-bold mb-4 text-primary">Register your Land Now</h1>
            <form onSubmit={handleRegister} className="space-y-4 grid grid-cols-2 gap-5">
                <div>
                    <label htmlFor="fullName" className="text-primary block">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="border text-black w-full p-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-primary">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border w-full p-2 text-black"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="address" className="block text-primary">Address</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="border w-full p-2 text-black"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="block text-primary">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="border w-full p-2 text-black"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="ninNumber" className="block text-primary">NIN Number</label>
                    <input
                        type="text"
                        id="ninNumber"
                        value={ninNumber}
                        onChange={(e) => setNinNumber(e.target.value)}
                        className="border w-full p-2 text-black"
                        required
                    />
                </div>
                {/* Coordinates Fields */}
                <div>
                    <label htmlFor="latitude" className="block text-primary">Latitude</label>
                    <input
                        type="text"
                        id="latitude"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                        className="border w-full p-2 text-black"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="longitude" className="block text-primary">Longitude</label>
                    <input
                        type="text"
                        id="longitude"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                        className="border w-full p-2 text-black"
                        required
                    />
                </div>
                {/* Image Upload Fields */}
                <div>
                    <label htmlFor="image" className="text-primary block">Upload Land Image</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="border w-full p-2 text-black"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="image1" className="text-primary block">Upload Additional Land Image</label>
                    <input
                        type="file"
                        id="image1"
                        accept="image/*"
                        onChange={(e) => setImage1(e.target.files[0])}
                        className="border w-full p-2 text-black"
                        required
                    />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">
                    {loading ? <Spinner /> : "Register Now"}
                </button>
            </form>
        </div>
    );
};

export default RegisterLandComponent;
