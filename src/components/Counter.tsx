import React from 'react';

const Counter = ({count, onIncrement, onDecrement}:
     {count: number, onIncrement: () => void, onDecrement: () => void}) => {
  
    return (
        <div className='bg-white p-4'>
            <span className='text-5xl font-semibold text-center py-5 block'> 
                {count}
            </span>
            
            <div className="grid grid-cols-2 gap-2 mt-5">
                <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={onIncrement}>Increment
                </button>

                <button 
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                onClick={onDecrement}>Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;