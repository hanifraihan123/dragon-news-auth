
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const AuthLayout = () => {
    return (
        <div className='font-poppins'>
            <div>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;