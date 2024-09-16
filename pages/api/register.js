// pages/api/register.js
import { auth, db } from '../../firebase'; // Import your Firebase config
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { fullName, email, password, confirmPassword, address, phoneNumber, ninNumber, role } = req.body;

    if (!fullName || !email || !password || !confirmPassword || !address || !phoneNumber || !ninNumber) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        // Register user with Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save additional user data to Firestore
        await addDoc(collection(db, 'users'), {
            uid: user.uid,
            fullName,
            role,
            email,
            address,
            phoneNumber,
            ninNumber,
            createdAt: new Date(),
        });

        res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
