import React from 'react';
import data_ae from './data_ae';
import Explore from '../Explore';
import {ScatterChart, Scatter, XAxis, 
    YAxis,ZAxis, CartesianGrid,Tooltip,Cell } from 'recharts';

const KmeansAE = () => {
    return(
       <>
        <div className = "flex flex-row bg-green-50 min-h-screen">
           <Explore></Explore>
           <div className='w-2/3 md:w-5/6 py-16 px-16 items-center flex flex-col'>
                <div className="text-center pb-8">
                <h1 className="font-bold text-lg text-gray-700 pb-4">K-means With Autoencoder Based Mapping Of The Study Area</h1>
                <p className="text-md text-gray-700">Represented here is the map of vegetation potential created by the K Means Clustering over the latent space selected via tha autoencoder.. Here  the blue areas represent ice whereas yellow to green show the extent of vegetation potential in the region while brown shows land that has no potential.</p>
                </div>
                
                <div className='md:hidden min-h-screen text-center items-center p-24 font-bold text-2xl text-gray-700'>
       It is recommended to use a desktop/laptop PC for better understanding of Graphical Information
       </div> 
       <ScatterChart className="hidden md:block"
       width={800}
       height={600}
       margin={{
         top: 20,
         right: 20,
         bottom: 20,
         left: 20,
       }}
     >
       <CartesianGrid />
       <XAxis
         type="number"
         dataKey="mean_x"
         name="Longitude"
         domain={[61, 73]}

       />
       <YAxis
         type="number"
         dataKey="mean_y"
         name="Latitude"
         domain={[23, 36]}
         
       />
       <ZAxis 
        type="number"
        dataKey="id"
        name="id"
        />
       <Tooltip cursor={{ strokeDasharray: "3 3" }} />
       <Scatter data={data_ae}>
        {data_ae.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.colourType ?? "#8884d8"} />
        ))}
      </Scatter>

     </ScatterChart>
            </div> 
         </div>
         </>
    );
};

export default KmeansAE;