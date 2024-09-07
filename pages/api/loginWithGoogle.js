// pages/api/login-google.js
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
