import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const OAuthCallback = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const token = searchParams.get('token');
        const userId = searchParams.get('userId');
        const username = searchParams.get('username');
        const email = searchParams.get('email');
        const role = searchParams.get('role');
        const error = searchParams.get('error');

        if (error) {
            // Handle error
            console.error('OAuth error:', error);
            navigate('/login?error=' + encodeURIComponent(error));
            return;
        }

        if (token && userId && username && email && role) {
            // Store user data and token
            const userData = {
                userId: parseInt(userId),
                username,
                email,
                role
            };

            login(userData, token);
            navigate('/dashboard');
        } else {
            // Missing parameters
            navigate('/login?error=Authentication failed');
        }
    }, [searchParams, login, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-950">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500 mx-auto mb-4"></div>
                <p className="text-dark-300 text-lg">Completing sign in...</p>
            </div>
        </div>
    );
};

export default OAuthCallback;
