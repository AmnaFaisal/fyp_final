import React from 'react';
import Explore from '../Explore';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
import pdata from './lineData.js';

const OptimumFe2 = () => {
    return(
        <>
         <div className='flex flex-row bg-green-50 min-h-screen'>
            <Explore></Explore>
            <div className='w-2/3 md:w-5/6 py-16 px-16 items-center flex flex-col'>
                <div className="text-center pb-8">
                <h1 className="font-bold text-lg text-gray-700 pb-4">Ferrous II</h1>
                <p className="text-md text-gray-700">Fe2+ is also known as ferric iron and certain amounts of ferric iron have shown to correlate positively with plantation, however very high or very low values tend to stunt plant growth. Following graph shows a comparision between the actual and Optimum Fe2+ values of different areas in Pakistan. The areas are identified by their id.</p>
                </div>
                <div className='md:hidden min-h-screen text-center items-center p-24 font-bold text-2xl text-gray-700'>
       It is recommended to use a desktop/laptop PC for better understanding of Graphical Information
       </div>    
            <ResponsiveContainer className="hidden md:block" width="100%" aspect={2}>
                <LineChart data={pdata}>
                    <CartesianGrid />
                    <XAxis dataKey="id" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="mean_fe2"
                        stroke="brown" activeDot={{ r:2}} />
                    <Line dataKey="optimum_Fe2"
                        stroke="green" activeDot={{ r:2}} />
                </LineChart>
            </ResponsiveContainer>
            </div>
        </div>
        </>
    );};
export default OptimumFe2;