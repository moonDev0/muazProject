import React, { useState } from 'react';
import { auth, db, storage } from '../firebase'; // Import Firebase config and storage
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Import Firebase Storage functions
import Spinner from '@/lib/spinner';

const RegisterLandComponent = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [ninNumber, setNinNumber] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null); // State to hold the selected image
    const [imageUrl, setImageUrl] = useState(''); // State to hold the image URL
    console.log(auth    )

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!fullName || !email || !address || !phoneNumber || !ninNumber) {
            setError('All fields are required.');
            return;
        }

        if (!image) {
            setError('Image upload is required.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            // Upload image to Firebase Storage
            const storageRef = ref(storage, `images/${image.name}`);
            const uploadTask = uploadBytesResumable(storageRef, image);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // Optional: Handle upload progress
                },
                (error) => {
                    setError('Image upload failed: ' + error.message);
                    setLoading(false);
                },
                async () => {
                    // Get the image download URL
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    setImageUrl(downloadURL);

                    // Proceed with user registration
                    const response = await fetch('/api/registerLand', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            uid:auth.currentUser.uid,
                            fullName,
                            email,
                            address,
                            phoneNumber,
                            ninNumber,
                            imageUrl: downloadURL, // Send image URL to the backend
                        }),
                    });

                    const data = await response.json();

                    if (!response.ok) {
                        throw new Error(data.message || 'Something went wrong');
                    }

                    toast.success('Registered successfully');
                }
            );
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
            <form onSubmit={handleRegister} className="space-y-4">
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
                {/* Image Upload Field */}
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
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">
                    {loading ? <Spinner /> : "Register Now"}
                </button>
            </form>
        </div>
    );
};

export default RegisterLandComponent;
