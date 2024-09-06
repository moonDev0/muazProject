import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDHG3zEf9Uq06ENNH6WMcAWNyi2mkCp5MM",
    authDomain: "muazweb-f6364.firebaseapp.com",
    projectId: "muazweb-f6364",
    storageBucket: "muazweb-f6364.appspot.com",
    messagingSenderId: "88275676503",
    appId: "1:88275676503:web:ae06c5552fea8055852212"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// export const storage = getStorage(app);


export { db, auth, provider };


