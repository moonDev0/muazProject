import React, { useState } from 'react';
import { LuUser } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import loginImage from '../../public/images/newlogo.png';
import loginIcon from '../../public/images/newlogo.png';
import Image from 'next/image';
import { auth, provider } from '../../firebase';
import { signInWithPopup, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { useRouter } from 'next/router';
import useUserStore from '@/store/useStore';
import { toast } from 'react-toastify';
import Spinner from '@/lib/spinner';
import { getDoc, doc } from 'firebase/firestore'; // Import Firestore functions
import { db } from '@/firebase'; // Import your Firestore instance


const LoginComponent = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { saveuser } = useUserStore();
  
const handleLoginWithEmail = async (e) => {
    e.preventDefault();
    
    try {
        setLoading(true);

        // Set auth persistence to local
        await setPersistence(auth, browserLocalPersistence);

        // Perform the email/password login
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
       

        if (!user) {
            throw new Error('User not found');
        }

        // Query Firestore to get the user's data
        console.log("User UID:", user.uid);
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        

        if (userDoc.exists()) {
            const userData = userDoc.data();
            // Save the user and the Firestore data into your store
            saveuser({ ...user, ...userData }); 
            toast.success(`Welcome ${userData.fullName || user.email}`);
        } else {
            throw new Error('User data not found in Firestore');
        }

        setLoading(false);
        router.push('/dashboard');
    } catch (error) {
        setError(error.message);
        setLoading(false);
        console.log('Error during email/password login:', error);
    }
};
    
    const handleLoginWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
            router.push("/dashboard");
        } catch (error) {
            console.log('Error during login with Google:', error);
        }
    };

    return (
        <div> 
            <div className='container mx-auto grid grid-cols-1 mt-32 mb-24 md:grid-cols-2'>
                <div className='justify-self-center hidden md:block'>
                    <Image src={loginImage} alt='login Img' className='w-[400px]' />
                </div>
                <div className='flex flex-col justify-center px-4 md:px-20 items-center'>
                    <div className='flex justify-center'>
                        <Image src={loginIcon} alt='img' className='ml-10 w-[100px]' />
                    </div>
                    <h1 className='text-black text-[30px] font-extrabold font-syne mt-[-20px] text-center'>Login</h1>
                    <form onSubmit={handleLoginWithEmail} className='w-full'>
                        <div className='w-full bg-[#F3F1F1] flex items-center text-black rounded-br-lg border-2 border-[#BFBFBF] rounded-tl-lg'>
                            <label htmlFor="email"></label>
                            <i className='ml-5 z-10'>
                                <LuUser />
                            </i>
                            <input
                                type="text"
                                name="email"
                                className='w-full font-bold text-black outline-none px-5 bg-none bg-transparent py-2'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id=""
                            />
                        </div>

                        <div className='mb-10 w-full flex items-center text-black mt-5 bg-[#F3F1F1] rounded-br-lg rounded-tl-lg border-2 border-[#BFBFBF]'>
                            <label htmlFor="password"></label>
                            <i className='ml-5 z-10'>
                                <FiLock />
                            </i>
                            <input
                                type="password"
                                className='w-full py-2 text-black px-10 outline-none bg-transparent'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                id=""
                            />
                        </div>

                        {error && <p className="text-red-500">{error}</p>}
                        
                        <button type="submit" className='bg-primary text-white w-full rounded-br-lg rounded-tl-lg py-2'>
                          {loading ? <Spinner /> : "Login"}
                        </button>
                    </form>

                    <button onClick={handleLoginWithGoogle} className="bg-blue-500 mt-5 text-white w-full rounded-br-lg rounded-tl-lg py-2">
                        Sign in with Google
                    </button>
                </div>      
            </div>
        </div>
    );
};

export default LoginComponent;
