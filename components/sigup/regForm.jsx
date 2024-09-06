import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegistrationComponent = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [ninNumber, setNinNumber] = useState('');
    const [error, setError] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!fullName || !email || !password || !confirmPassword || !address || !phoneNumber || !ninNumber) {
            setError('All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // You can store additional user data in a database (e.g., Firestore) here.
            console.log('User registered:', user);
        } catch (error) {
            setError('Error during registration: ' + error.message);
        }
    };

    return (
        <div className="container mx-auto mt-20">
            <h1 className="text-center text-2xl font-bold mb-4 text-primary">Register Account</h1>
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
                        className="border text-black w-full p-2"
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
                        className="border text-black w-full p-2"
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
                        className="border text-black w-full p-2"
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
                        className="border text-black w-full p-2"
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
                        className="border text-black w-full p-2"
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
                        className="border text-black w-full p-2"
                        required
                    />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegistrationComponent;
