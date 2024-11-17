import React from 'react';
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className='m-2'>
            <h2 className='font-semibold mb-3'>Login With</h2>
            <div className='*:w-full space-y-2'>
                <button className='btn'><FaGoogle /> Login With Google</button>
                <button className='btn'><FaGithub /> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;