// hooks/useLogout.js
import { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

const useLogout = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const auth = getAuth(); // Get Firebase auth instance
    const router = useRouter();

    const logout = async () => {
        setLoading(true);
        setError(null);

        try {
            await signOut(auth); // Sign out the user
            setLoading(false);
            localStorage.clear(); 
            router.push('/login'); // Redirect to login page or any other page
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    };

    return { logout, error, loading };
};

export default useLogout;
