// pages/api/getData.js
import { db } from "@/firebase"; 

export default async function handler(req, res) {
    try {
        const snapshot = await db.collection('users').get();
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
