import React, { useState } from 'react';
import { auth, db } from '../../firebase'; // Import auth and Firestore
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore'; // Use setDoc and doc
import { toast } from 'react-toastify';
import Spinner from '@/lib/spinner';

const RegistrationComponent = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [ninNumber, setNinNumber] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState('user');

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!fullName || !email || !password || !confirmPassword || !address || !phoneNumber || !ninNumber) {
            setError('All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            // Register the user with Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Store user data in Firestore with their UID as the document ID
            await setDoc(doc(db, 'users', user.uid), {
                fullName,
                email,
                address,
                phoneNumber,
                ninNumber,
                role,
            });

            toast.success('Registered successfully');
        } catch (error) {
            setError('Error during registration: ' + error.message);
            toast.error('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto mt-36">
            <h1 className="text-center text-2xl font-bold mb-4 text-primary">Register to get started</h1>
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
                    <label htmlFor="password" className="block text-primary">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border w-full p-2 text-black"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block text-primary">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">
                    {loading ? <Spinner /> : "Register Now"}
                </button>
            </form>
        </div>
    );
};

export default RegistrationComponent;
