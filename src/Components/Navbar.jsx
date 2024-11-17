import { Link } from "react-router-dom";
import user from "../assets/user.png";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center m-4'>
            <div className="">


            </div>
            <div className='flex gap-2 text-gray-500 items-center'>
                <Link to ="/">Home</Link>
                <Link to="/about">About</Link>
                <Link>Career</Link>
            </div>
            <div className='flex gap-2 items-center'>
                <div className="">
                    <img src={user} alt="" />
                </div>
                <div>
                    <Link to="/auth/login" className='px-6 py-1 bg-black text-white text-lg'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;