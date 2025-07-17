import React from 'react';
import { Link } from 'react-router';
import loginImg from '../assets/login img.jpg'
import { FaApple, FaEnvelope, FaFacebook, FaLock } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { LuEye } from 'react-icons/lu';
// import axios from 'axios';
// import api from '../api/api';


const Registration = () => {
  // const navigate = useNavigate();
  const handleRegistration = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPass = form.confirmPass.value;

    console.log(email, password, confirmPass);

    //Validate pass 
    if (!email || !password || !confirmPass) {
      alert('Please fill in all fields');
      return;
    }

    if (password !== confirmPass) {
      alert('Passwords do not match');
      return;
    }


    // Instead of calling the actual API, call your proxy server:
    fetch('http://localhost:3000/api/registration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(data => console.log('Registered:', data))
      .catch(err => console.error(err));



  }

  return (
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
            <form onSubmit={handleRegistration} className="card-body ">
              <fieldset className="fieldset text-white space-y-4">
                <h2 className='text-3xl font-semibold text-center'>Open your account</h2>
                <p className='text-center font-semibold'>Already have an account?<Link to={'/signIn'} className='text-green-700'> Sign in</Link></p>

                <div className="flex items-center bg-[#071400] text-white border border-gray-600 focus-within:border-green-500 rounded-full px-4">
                  <FaEnvelope size={20} className="text-gray-400" />
                  <input
                    type="email"
                    name='email'
                    placeholder="Email address"
                    className="bg-transparent flex-1 px-2 py-2 text-white focus:outline-none rounded-full"
                  />
                </div>

                <div className="flex items-center bg-[#071400] text-white border border-gray-600 focus-within:border-green-500 rounded-full px-4">
                  <FaLock size={20} className="text-gray-400" />
                  <input
                    type="password"
                    name='password'
                    placeholder="Password"
                    className="bg-transparent flex-1 px-2 py-2 text-white focus:outline-none rounded-full"
                  />
                  <LuEye size={20} className="text-gray-400 ml-2" />
                </div>
                <div className="flex items-center bg-[#071400] text-white border border-gray-600 focus-within:border-green-500 rounded-full px-4">
                  <FaLock size={20} className="text-gray-400" />
                  <input
                    type="password"
                    name='confirmPass'
                    placeholder="Confirm Password"
                    className="bg-transparent flex-1 px-2 py-2 text-white focus:outline-none rounded-full"
                  />
                  <LuEye size={20} className="text-gray-400 ml-2" />
                </div>
                <button type='submit' className="btn btn-neutral bg-green-600 text-white rounded-full">Create Account</button>

                {/* divider */}
                <div className="flex items-center gap-4 my-4">
                  <div className="flex-grow h-px bg-gray-600" />
                  <span className="text-white text-sm">OR</span>
                  <div className="flex-grow h-px bg-gray-600" />
                </div>

                {/* social login */}
                <div className='flex gap-2 justify-center items-center text-white'>
                  <a href="https://www.facebook.com" className='bg-gray-800 p-2 rounded-full hover:bg-green-600'><FaFacebook size={20} /></a>
                  <a href="https://www.facebook.com" className='bg-gray-800 p-2 rounded-full hover:bg-green-600 '><FaApple size={20} /></a>
                  <a href="https://www.facebook.com" className='bg-gray-800 p-2 rounded-full hover:bg-green-600 '><FaXTwitter size={20} /></a>
                </div>
              </fieldset>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;