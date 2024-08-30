"use client";

import { userLogin } from '@/app/api/posts/utils/userLogin';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [response, setResponse] = useState('');
    const router = useRouter(); // Initialize useRouter

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // setLoading(true);
            const response = await userLogin({ username, password });
            setResponse(response.message ?? 'successful login');
            router.push('/posts/hooks')
            // console.log({ response });

            // // Navigate to the posts page after successful login
            // if (response.success) { // Assuming response has a success field
            //     router.push('/posts'); // Redirect to the posts page
            // }
        } catch (error) {
            setLoading(false)
            const message = (error as Error).message;
            // console.log({ message });
            setError(message);
        } 
    };

    return (
        <form className="w-6/12 border p-10" onSubmit={handleLogin}>
            <h2>Login</h2>
            <input 
                placeholder="Enter username" 
                type="text" 
                required 
                className="border w-full px-4 py-6 border-gray-500 rounded-xl mt-4" 
                onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)} 
            />
            <br />
            <input 
                placeholder="Enter password" 
                type="password" 
                required 
                className="border w-full px-4 py-6 border-gray-500 rounded-xl my-4" 
                onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} 
            />
            <br />
            <button 
                type="submit" 
                className="rounded-xl bg-green-500 text-white cursor-pointer px-6 py-4"
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Login'}
            </button>
            {response && <p className='text-green-500 text-sm'>{response}</p>}
            {error && <p className='text-red-500 mt-2'>{error}</p>}
        </form>
    );
};

export default Login;