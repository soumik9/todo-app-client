import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../../firebase.init';
import './header.css'

const Header = () => {

    const [user] = useAuthState(auth);

    const handleLogout = () =>{
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    return (
        <Navbar>
            <Container>
                <Navbar.Brand as={Link} to="/" className='text-white'>TODAYS</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='text-white'>
                        Signed in as: <span className='signinas'>{user?.displayName}</span> 
                    </Navbar.Text>
                    <button type='button' onClick={handleLogout} className='btn ms-3'>Logout</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;