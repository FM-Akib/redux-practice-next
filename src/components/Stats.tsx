import React from 'react';

const Stats = ({ totalcount }: { totalcount: number }) => {
    return (
        <div className='bg-white p-4'>
            <span className='text-4xl font-semibold text-center py-5 block'> 
                Total Count: {totalcount}
            </span>
            
        </div>
    );
};

export default Stats;