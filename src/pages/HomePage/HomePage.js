import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import '../../App.scss';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <div>
            <h1>HomePage</h1>
            <SignIn />
            <p className='text-center'>Don't have an account yet? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
};

export default HomePage;
