import { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

const useLogout = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const auth = getAuth();
    const router = useRouter();

    const logout = async () => {
        setLoading(true);
        setError(null);

        try {
            await signOut(auth); // Sign out the user
            localStorage.clear(); // Clear local storage
            router.push('/login'); // Redirect to login page or any other page
        } catch (err) {
            setError(err.message); // Set the error message
        } finally {
            setLoading(false); // Ensure loading state is reset
        }
    };

    return { logout, error, loading };
};

export default useLogout;
