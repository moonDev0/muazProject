import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getStorage } from "firebase/storage";
  
  const firebaseConfig = {
    apiKey: "AIzaSyBjT3XIL1gAnT4Jj9OTHTTxvbAWpXdfx50",
    authDomain: "muazweb-f3cc6.firebaseapp.com",
    projectId: "muazweb-f3cc6",
    storageBucket: "muazweb-f3cc6.appspot.com",
    messagingSenderId: "328767759001",
    appId: "1:328767759001:web:88b66f2ce87ce3c3c00e08",
    measurementId: "G-DL69FD91WH"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// export const storage = getStorage(app);


export { db, auth, provider };


