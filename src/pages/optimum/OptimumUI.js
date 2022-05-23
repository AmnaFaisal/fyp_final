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

const OptimumUI = () => {
    return(
        <>
        <div className='flex flex-row bg-green-50 min-h-screen'>
            <Explore></Explore>
            <div className='w-2/3 md:w-5/6 py-16 px-16 items-center flex flex-col'>
                <div className="text-center pb-8">
                <h1 className="font-bold text-lg text-gray-700 pb-4">UI | The urbanisation index</h1>
                <p className="text-md text-gray-700">The urbanization index is very similar to the NDBI in the sense that it also returns high values in the presence of houses and small structures as well as other buildings and concrete structures. This causes a decrease in vegetation due to higher and drier climates. This is known as the urban heat island effect. Following graph shows a comparision between the actual and Optimum UI values of different areas in Pakistan. The areas are identified by their id.</p>
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
                    <Line dataKey="mean_ui"
                        stroke="brown" activeDot={{ r:2}} />
                    <Line dataKey="optimum_UI"
                        stroke="green" activeDot={{ r:2}} />
                </LineChart>
            </ResponsiveContainer>
            </div>
        </div>    
        </>
    );};
export default OptimumUI;