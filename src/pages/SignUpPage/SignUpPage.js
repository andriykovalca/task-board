import React from 'react';
import SignUp from '../../components/SignUp/SignUp';
import '../../App.scss';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <SignUp />
            <p className='text-center'>Already have an account? <Link to="/">Sign In</Link></p>
        </div>
    );
};

export default SignUpPage;