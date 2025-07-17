import React from 'react';
import Hero from './Hero';
import JobsPage from './JobsPage';
import { useLoaderData } from 'react-router';



const Home = () => {
    const allJobs=useLoaderData();
   
    
    
    return (
        <div>
            <div className='bg-[#071400]'>
                <div className='max-w-7xl mx-auto'>
                    <Hero></Hero>
                </div>
            </div>
            <div className='max-w-7xl mx-auto mt-8 px-4'>
                <JobsPage allJobs={allJobs}></JobsPage>
            </div>
        </div>
    );
};

export default Home;