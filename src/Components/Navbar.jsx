import { Link } from "react-router-dom";
import profile from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    return (
        <div className='flex justify-between items-center m-4'>
            <div className="">
                {user && user.email}

            </div>
            <div className='flex gap-2 text-gray-500 items-center'>
                <Link to ="/">Home</Link>
                <Link to="/about">About</Link>
                <Link>Career</Link>
            </div>
            <div className='flex gap-2 items-center'>
                <div className="">
                    <img src={profile} alt="" />
                </div>
                <div>
                    {
                        user && user?.email ? 
                        <button onClick={logOut} className='px-6 py-1 bg-black text-white text-lg'>LogOut</button> 
                        : 
                        <Link to="/auth/login" className='px-6 py-1 bg-black text-white text-lg'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;