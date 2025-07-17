import React from 'react';
import logo from '../assets/image 1.png';
import icon from '../assets/Vector.png';

import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='bg-[#071400]'>
            <nav className="bg-[#071400] text-white px-4 py-3 flex flex-col md:flex-row items-start md:items-center justify-between shadow-md max-w-7xl mx-auto space-y-4 md:space-y-0">

                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">

                    <div className="flex items-center space-x-2">
                        <Link to={'/'}>
                        <img src={logo} alt="Logo" className="h-10 w-auto" />
                        </Link>
                    </div>


                    <button className="border border-green-500 text-sm px-3 py-1 rounded-[29px] text-[#05AF2B] font-semibold flex items-center gap-2">
                        <img src={icon} alt="icon" className="h-4 w-4" />
                        <span>Categories</span>
                    </button>
                </div>


                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full md:w-auto">

                    <div className="w-full sm:w-auto flex bg-[#FFFFFF20] rounded-lg overflow-hidden">

                        <select className="bg-[#FFFFFF10] text-white text-sm px-2 py-2 border-r border-gray-600 focus:outline-none font-semibold">
                            <option>Freelancer</option>
                            <option>Mobile Developer</option>
                            <option>Designer</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent px-4 py-2 w-full sm:w-60 text-sm text-white focus:outline-none"
                        />
                    </div>

                    <Link href="#" className="text-green-500 text-sm hover:underline font-semibold">
                        BECOME A SELLER
                    </Link>
                    <Link href="#" className="text-sm hover:underline font-semibold" to={'/signIn'} >
                        LOGIN
                    </Link>
                    <Link to={'/registration'} href="#" className="bg-green-500 text-sm px-4 rounded-full hover:bg-green-600 font-semibold py-2">
                        Registration
                    </Link>
                </div>
            </nav>

            <div className='border-b border border-[#CCCCCC] w-full max-w-7xl mx-auto'></div>

            
        </div>
    );
};

export default Navbar;
