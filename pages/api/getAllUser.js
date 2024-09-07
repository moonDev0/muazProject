// pages/api/fetchUsers.js
import { getDocs, collection } from 'firebase/firestore';
import { db } from '@/firebase'; // Ensure the path is correct for your project

export default async function handler(req, res) {
    try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const dataList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        res.status(200).json(dataList); // Send the data as a JSON response
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
}
