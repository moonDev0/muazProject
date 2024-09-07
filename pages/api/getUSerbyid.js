// import { auth, db } from '../../firebase'; // Import Firestore and Auth
// import { doc, getDoc } from 'firebase/firestore'; // Firestore functions

// export default async function handler(req, res) {
//     if (req.method !== 'GET') {
//         return res.status(405).json({ message: 'Method not allowed' });
//     }

//     // Get the user ID from the query parameters
//     const { uid } = req.query;

//     if (!uid) {
//         return res.status(400).json({ message: 'User ID is required' });
//     }

//     try {
//         // Get user data from Firestore
//         const userDocRef = doc(db, 'users', uid);
//         const userDoc = await getDoc(userDocRef);

//         if (!userDoc.exists()) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const userData = userDoc.data();
//         res.status(200).json(userData);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }
import { db } from '../../firebase'; // Import Firestore (ensure firebase is properly configured)
import { doc, getDoc } from 'firebase/firestore'; // Firestore functions

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // Get the user ID from the query parameters
    const { uid } = req.query;

    if (!uid) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    try {
        // Get user document from Firestore based on the uid
        const userDocRef = doc(db, 'users', uid);
        const userDoc = await getDoc(userDocRef);

        // Check if the document exists
        if (!userDoc.exists()) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Get the user data from the document
        const userData = userDoc.data();

        // Respond with the user data
        return res.status(200).json(userData);
    } catch (error) {
        // Handle any errors during fetching
        return res.status(500).json({ message: `Error fetching user: ${error.message}` });
    }
}

