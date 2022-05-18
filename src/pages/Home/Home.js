import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Home = () => {

    const [user] = useAuthState(auth);

    const handleLogout = () =>{
        signOut(auth);
    }

    return (
        <div>
            hi {user?.displayName}
            <button type='button' onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;