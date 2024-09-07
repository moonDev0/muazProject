// utils/firebaseAdmin.js
import admin from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.applicationDefault(), // Or your service account credentials
        // Other configurations if needed
    });
}

export async function verifyIdToken(token) {
    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        return decodedToken;
    } catch (error) {
        throw new Error('Token verification failed: ' + error.message);
    }
}
