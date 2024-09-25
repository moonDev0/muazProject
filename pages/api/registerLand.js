// pages/api/registerLand.js
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { uid, fullName, email, address, phoneNumber, ninNumber, imageUrl, imageUrl1, size, latitude, longitude } = req.body;

    if (!uid || !fullName || !address || !phoneNumber || !ninNumber || !imageUrl) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Save the user data along with the image URL to Firestore
        await addDoc(collection(db, 'Lands'), {
            uid,
            fullName,
            email,
            address,
            status: "pending",
            phoneNumber,
            ninNumber,
            imageUrl, // Save image URL
            latitude,
            longitude,
            size, 
            imageUrl1,
            createdAt: new Date(),
        });

        res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
