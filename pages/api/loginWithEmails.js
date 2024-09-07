// pages/api/login-email.js
import { auth } from '../../firebase'; // Import Auth
import { signInWithEmailAndPassword } from 'firebase/auth';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        // Sign in the user with email and password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Get the Firebase Authentication token
        const token = await user.getIdToken();

        // Return the token and user info (excluding Firestore data)
        res.status(200).json({ 
            message: 'Login successful', 
            user: {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName || '', // Ensure these fields are included
                photoURL: user.photoURL || '',
                emailVerified: user.emailVerified,
                token 
            },
            token 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
