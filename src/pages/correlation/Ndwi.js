import React from 'react';
import Explore from '../Explore';
import chartdata from '../k-meansAndGMM/chartdata';
import {ScatterChart, Scatter, XAxis, 
    YAxis, CartesianGrid } from 'recharts';

const Ndwi = () => {
    return(
       <>
        <div className = "flex flex-row bg-green-50 min-h-screen">
       <Explore></Explore>
       <div className='w-2/3 md:w-5/6 py-16 px-16 items-center flex flex-col'>
            <div className="text-center pb-8">
            <h1 className="font-bold text-lg text-gray-700 pb-4">NDWI</h1>
            <p className="text-md text-gray-700">The plotted graph below shows the correlational relationship between NDVI and NDWI values observed in the dataset.</p>
            </div>
            
            <div className='md:hidden min-h-screen text-center items-center p-24 font-bold text-2xl text-gray-700'>
       It is recommended to use a desktop/laptop PC for better understanding of Graphical Information
       </div> 
       <ScatterChart className="hidden md:block" width={600} height={400}>
        <CartesianGrid />
        <XAxis type="number" dataKey="mean_ndvi" />
        <YAxis type="number" dataKey="mean_ndwi" />
        <Scatter data={chartdata} fill="green" />
        </ScatterChart>
        </div>
       
   </div>
   </>
    );
};

export default Ndwi;