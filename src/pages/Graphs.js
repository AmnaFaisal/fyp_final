import React, {useState} from 'react';
import Explore from './Explore';

const Graphs = () => {
    
    return(
    <>
     <div className='flex flex-row bg-green-50 min-h-screen'>
            <Explore></Explore>
            <div className='w-5/6 py-16 px-16 text-center items-center'>
                <h1 className="text-2xl text-gray-600 font-bold">Select your analysis type and index of choice</h1>
            </div>    
        </div>
    </>
        
    );
};

export default Graphs;