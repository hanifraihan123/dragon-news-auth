import Header from './Header';
import Latest from './Latest';
import Navbar from './Navbar';
import LeftNavbar from './LeftNavbar';
import RightNavbar from './RightNavbar';
import { Outlet } from 'react-router-dom';
import AdSection from './AdSection';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
           <Header></Header>
           <Latest></Latest>
           <Navbar></Navbar>
           <div className='mx-auto pt-2 ml-4 grid lg:grid-cols-12 gap-3'>
            <div className='col-span-3'><LeftNavbar></LeftNavbar></div>
            <div className='col-span-6'><Outlet></Outlet></div>
            <div className='col-span-3'><RightNavbar></RightNavbar><AdSection></AdSection></div>
           </div>
        </div>
    );
};

export default HomeLayout;