import React from 'react';
import logo from "../assets/logo.png";
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className='flex flex-col gap-2 m-2'>
                <div className='mx-auto'>
                    <img src={logo} alt="" />
                </div>
                <div className='text-center items-center'>
                <p className='text-gray-400'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;