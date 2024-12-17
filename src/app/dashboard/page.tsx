import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import React from 'react';

const page = async () => {
    const session = await getServerSession(authOptions);
    return (
        <div>
            Welcome <br />
            {session?.user && <div className="flex flex-col items-center justify-center">
            <Image src={session?.user?.image as string} 
            alt="User Image" 
            width={100} height={100}
            className="rounded-full" 
            /><br /> 
            {session?.user?.name}
            <br />
            <p>{session?.user?.email}</p>
            </div> }
            
        </div>
    );
};

export default page;