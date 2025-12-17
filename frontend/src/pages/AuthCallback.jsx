import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

const AuthCallback = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    useEffect(() => {
        const handleCallback = async () => {
            try {
                // Get the session from Supabase
                const { data: { session }, error } = await supabase.auth.getSession();

                if (error) {
                    console.error('Auth error:', error);
                    navigate('/login?error=' + encodeURIComponent(error.message));
                    return;
                }

                if (session) {
                    // User is authenticated
                    const user = session.user;
                    const userData = {
                        userId: user.id,
                        username: user.user_metadata?.full_name || user.email?.split('@')[0],
                        email: user.email,
                        role: 'USER',
                        imageUrl: user.user_metadata?.avatar_url
                    };

                    // Store in AuthContext
                    login(userData, session.access_token);
                    navigate('/dashboard');
                } else {
                    navigate('/login?error=Authentication failed');
                }
            } catch (error) {
                console.error('Callback error:', error);
                navigate('/login?error=' + encodeURIComponent(error.message));
            }
        };

        handleCallback();
    }, [navigate, login]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-950">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500 mx-auto mb-4"></div>
                <p className="text-dark-300 text-lg">Completing sign in with Google...</p>
            </div>
        </div>
    );
};

export default AuthCallback;
