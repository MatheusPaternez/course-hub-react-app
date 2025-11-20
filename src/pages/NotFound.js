import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
const NotFound = () => {
    return (
        <>
        <Header />
        <div className="w-full h-auto bg-[#001c27] grid grid-cols-[250px_7fr] overflow-x-hidden ">
            <div className="p-10 w-full bg-gray-50 pr-12 rounded-4xl col-start-2">
                <div className='w-full h-screen items-center flex flex-col relative mt-4 md:mt-10 md:mr-20 '>
                    <div className=" flex flex-row"><h1 className='text-3xl font-medium'>404</h1>
                    <h2 className='font-medium text-3xl'>Page Not Found</h2></div>
                    {/* Back to Home */}
                    <Link className="pointer-cursol hover:underline text-2xl mt-10" to="/">Back To Home</Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default NotFound;