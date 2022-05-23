import React from 'react';
import ranking_ndvi from './ranking_ndvi';
import Explore from '../Explore';
import {ScatterChart, Scatter, XAxis, 
    YAxis,ZAxis, CartesianGrid,Tooltip,Cell } from 'recharts';

const rankingndvi = () => {
    return(
       <>
              <div className = "flex flex-row bg-green-50 min-h-screen">
           <Explore></Explore>
           <div className='w-2/3 md:w-5/6 py-16 px-16 items-center flex flex-col'>
                <div className="text-center pb-8">
                <h1 className="font-bold text-lg text-gray-700 pb-4">NDVI Based Ranking </h1>
                <p className="text-md text-gray-700">Represented here is a graph that shows a detailed description of the possible level of difficulty that would be faced in vegetating each part of the area under study. The green regions represent areas easy to vegetate and the brown regions show areas difficult to vegetate.
                <br/>The intensity of the colour corresponds to the ease or difficulty of vegetating a partocular area.</p>
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
         domain={[66, 76]}

       />
       <YAxis
         type="number"
         dataKey="mean_y"
         name="Latitude"
         domain={[29, 37]}
         
       />
       <ZAxis 
        type="number"
        dataKey="id"
        name="id"
        />
       <Tooltip cursor={{ strokeDasharray: "3 3" }} />
       <Scatter data={ranking_ndvi}>
        {ranking_ndvi.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.colourType ?? "#8884d8"} />
        ))}
      </Scatter>

     </ScatterChart>
            </div> 
         </div>
         </>
    );
};

export default rankingndvi;