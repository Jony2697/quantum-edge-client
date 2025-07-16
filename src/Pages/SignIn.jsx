import React from 'react';
import loginImg from '../assets/login img.jpg'
import { FaApple, FaEnvelope, FaFacebook, FaLock } from 'react-icons/fa';
import { LuEye } from 'react-icons/lu';
import { Link } from 'react-router';
import { FaXTwitter } from 'react-icons/fa6';


const SignIn = () => {
    return (
        <div>
            <div className='bg-[#071400] max-w-6xl mx-auto rounded-2xl'>
                <div className="hero min-h-screen mt-10 ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className='w-[610px] h-[400px] overflow-hidden rounded-2xl'>
                            <img
                                src={loginImg}
                                alt=""
                                className='w-full h-full object-cover object-left'
                            />
                        </div>
                        <div className="card w-full max-w-sm shrink-0 shadow-2xl ">
                            <div className="card-body ">
                                <fieldset className="fieldset text-white space-y-4">
                                    <h2 className='text-3xl font-semibold text-center'>Login your account</h2>
                                    <p className='text-center font-semibold'>Don't have an account?<Link to={'/registration'} className='text-green-700'> Sign Up</Link></p>
                                    {/* email */}
                                    <div className="flex items-center bg-[#071400] text-white border border-gray-600 focus-within:border-green-500 rounded-full px-4">
                                        <FaEnvelope size={20} className="text-gray-400" />
                                        <input
                                            type="email"
                                            placeholder="Email address"
                                            className="bg-transparent flex-1 px-2 py-2 text-white focus:outline-none rounded-full"
                                        />
                                    </div>
                                    {/* password */}
                                    <div className="flex items-center bg-[#071400] text-white border border-gray-600 focus-within:border-green-500 rounded-full px-4">
                                        <FaLock size={20} className="text-gray-400" />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="bg-transparent flex-1 px-2 py-2 text-white focus:outline-none rounded-full"
                                        />
                                        <LuEye size={20} className="text-gray-400 ml-2" />
                                    </div>

                                    <div className="flex items-center justify-between text-sm text-white">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" defaultChecked className="checkbox  border border-green-500 rounded-none text-white" />
                                            Remember me
                                        </label>
                                        <a href="#" className="link link-hover  hover:underline">Forgot password?</a>
                                    </div>

                                    <button className="btn btn-neutral bg-green-600 text-white rounded-full">Login Now</button>

                                    {/* divider */}
                                    <div className="flex items-center gap-4 my-4">
                                        <div className="flex-grow h-px bg-gray-600" />
                                        <span className="text-white text-sm">OR</span>
                                        <div className="flex-grow h-px bg-gray-600" />
                                    </div>

                                    {/* social login */}
                                    <div className='flex gap-4 justify-center items-center text-white'>
                                        <a href="https://www.facebook.com" className='bg-gray-800 p-3 px-8 rounded-full hover:bg-green-600'><FaFacebook size={22} /></a>
                                        <a href="https://www.facebook.com" className='bg-gray-800 p-3 px-8 rounded-full hover:bg-green-600 '><FaApple size={22} /></a>
                                        <a href="https://www.facebook.com" className='bg-gray-800 p-3 px-8 rounded-full hover:bg-green-600 '><FaXTwitter size={22} /></a>
                                    </div>
                                </fieldset>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;