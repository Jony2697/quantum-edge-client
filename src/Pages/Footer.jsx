import React from 'react';
import logo from '../assets/image 1.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import footerImg from '../assets/Rectangle 50.png';

const Footer = () => {
    return (
        <div className=' bg-[#071400] mt-20 p-4'>

            <footer className='max-w-7xl mx-auto  '>
                <div className='flex items-center gap-12'>
                    <h1 className='text-3xl font-semibold text-white'>Reach Your Requirement Goals Right on <br />Schedule</h1>
                    <div className='space-y-2 text-white'>
                        <p>Sign up, complete your profile, and start browsing projects. Submit <br />proposals and communicate with clients to get hired.</p>
                        <button className='bg-[#05AF2B] text-white font-semibold p-2 rounded-full px-3'>Get started</button>
                    </div>
                </div>
                <div className='border-b border border-gray-600 mt-4'></div>
                <div className="footer items-stretch sm:footer-horizontal  p-10 text-white">
                    <aside >
                        <img src={logo} alt="" />
                        <div ></div>

                    </aside>
                    <nav className='flex-1 border-r border-gray-600 pr-6 h-full not-last-of-type:'>
                        <h6 className="footer-title">About</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Become Seller</a>
                        <a className="link link-hover">ProProJobs</a>

                    </nav>

                    <nav className='flex-1 border-r border-gray-600 pr-6 h-full'>
                        <h6 className="footer-title">Categories</h6>
                        <a className="link link-hover">Design & Creative</a>
                        <a className="link link-hover">Music & Audio</a>
                        <a className="link link-hover">Programming & Tech</a>
                    </nav>
                    <nav className='flex-1 p-2 border-r  border-gray-600 pr-6 h-full'>
                        <h6 className="footer-title">Support</h6>
                        <a className="link link-hover">Help & Support</a>
                        <a className="link link-hover">FAQ</a>
                        <a className="link link-hover">Contact Us</a>
                        <a className="link link-hover">Terms & Services</a>
                    </nav>
                </div>
                {/* last part */}
                <div className='border border-t-gray-600'></div>

                <div className='flex justify-around items-center mt-6'>
                    <div className='flex gap-2 items-center text-white'>
                        <a href="https://www.facebook.com" className='bg-gray-800 p-2 rounded-full hover:bg-green-600 '><FaFacebook /></a>
                        <a href="https://www.facebook.com" className='bg-gray-800 p-2 rounded-full hover:bg-green-600 '><FaInstagram /></a>
                        <a href="https://www.facebook.com" className='bg-gray-800 p-2 rounded-full hover:bg-green-600 '><FaXTwitter /></a>
                    </div>

                    <div >
                        <h2 className='text-gray-300 font-semibold mb-2'>Our Popular post</h2>
                        <div className='flex gap-2 text-white'>
                            <div>
                                <img src={footerImg} alt="" />
                            </div>
                            <div>
                                <p>November 7, 2024</p>
                                <h3>Unveils the Best Canadian Cities for Biking</h3>
                            </div>
                        </div>

                    </div>
                    <div >

                        <div className='flex gap-2 text-white'>
                            <div>
                                <img src={footerImg} alt="" />
                            </div>
                            <div>
                                <p>November 7, 2024</p>
                                <h3>Unveils the Best Canadian Cities for Biking</h3>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='border border-t-gray-600 mt-4'></div>
                <div>
                    <p className='text-white mt-4 text-center'>© QuantumEdge Software INC. 2025. All rights reserved.</p>
                </div>

            </footer>
        </div>
    );
};

export default Footer;