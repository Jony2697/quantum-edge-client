import React from 'react';
import { CiSearch } from "react-icons/ci";
import star from '../assets/Star 2.png'


const Hero = () => {
    return (
        <div >

            
            <div className="flex-1 mx-8 flex items-center space-x-2 h-60 ">
                <div className="flex border border-r-gray-700 border-l-amber-600  border-t-green-500 border-b-green-500 bg-[#66666614] rounded-lg overflow-hidden w-full max-w-xl p-2 space-x-4">
                    <input
                        type="text"
                        placeholder="Search your needs"
                        className="bg-transparent px-4 py-2 w-full text-sm focus:outline-none text-gray-200"
                    />
                    <select className="bg-transparent  text-sm text-white  focus:outline-none">
                        <option>Web Developer</option>
                        <option>Mobile Developer</option>
                        <option>Designer</option>
                    </select>
                    <button className="bg-green-500 rounded-full p-2 flex items-center justify-center">
                        <CiSearch className='font-semibold' />
                    </button>
                </div>
                <button className="bg-green-600 text-sm px-4 py-2 rounded-full font-semibold text-white hover:bg-green-700">
                    Advanced search
                </button>

                 <img className='ml-60 mt-20' src={star} alt="" />
            </div>
           
        </div>
    );
};

export default Hero;