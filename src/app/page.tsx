import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-24'>
    <div className="flex flex-col gap-4 max-w-md mx-auto mt-8">
     <Link href="/general-state-management" 
     className='text-center text-xl font-bold border-2 px-4 py-3 
      bg-yellow-100'>General State Management</Link>

     <Link href="/redux-state-management" 
     className='text-center text-xl font-bold border-2 px-4 py-3 
      bg-yellow-100'>Redux State Management</Link>
        
     <Link href="/redux-posts-api" 
     className='text-center text-xl font-bold border-2 px-4 py-3 
      bg-yellow-100'>Redux Posts API</Link>
        </div>
    </div>
  );
};

export default Home;