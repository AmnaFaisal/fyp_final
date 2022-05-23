import React from 'react';

const Features = () => {
    return(
        <section id="features" className="text-gray-700 bg-green-50 px-8 sm:px-16 lg:px-20 py-20 flex flex-col gap-8 justify-center">
     <div className = "flex flex-col gap-4 md:gap-8 justify-center items-center text-center">
       <h1 className="text-3xl font-bold">Features</h1>
       <h2 className="text-xl">Our system includes the following features</h2>
     </div>
     <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-x-6 md:gap-y-4">
       <div className="bg-white p-6 flex flex-col items-center gap-4 text-center border rounded-md hover:drop-shadow-lg featuresContent">
         <div class="border rounded-full bg-pink-100 flex h-fit w-fit p-2 justify-center items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-satellite" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M3.707 6.293l2.586 -2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414z" />
          <path d="M6 10l-3 3l3 3l3 -3" />
          <path d="M10 6l3 -3l3 3l-3 3" />
          <line x1="12" y1="12" x2="13.5" y2="13.5" />
          <path d="M14.5 17a2.5 2.5 0 0 0 2.5 -2.5" />
          <path d="M15 21a6 6 0 0 0 6 -6" />
        </svg>
         </div>
         <div>
           <p className="font-bold pb-2">Multi-source Satellite Data</p>
           <p>Our system integrates multiple satellite sources to obtain a wide range of multispectral satellite indices that allow us to obtain information covering different bases in remote sensing.</p>
         </div>
         
       </div>
       <div className="bg-white p-6 flex flex-col items-center gap-4 text-center border rounded-md hover:drop-shadow-lg featuresContent">
         <div class="border rounded-full bg-orange-100 flex h-fit w-fit p-2 justify-center items-center ">
         <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-android" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="4" y1="10" x2="4" y2="16" />
        <line x1="20" y1="10" x2="20" y2="16" />
        <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
        <line x1="8" y1="3" x2="9" y2="5" />
        <line x1="16" y1="3" x2="15" y2="5" />
        <line x1="9" y1="18" x2="9" y2="21" />
        <line x1="15" y1="18" x2="15" y2="21" />
      </svg>
         </div>
         <div>
           <p className="font-bold pb-2">Machine Learning Solutions</p>
           <p>Our system integrates multiple satellite sources to obtain a wide range of multispectral satellite indices that allow us to obtain information covering different bases in remote sensing.</p>
         </div>
       </div>
       <div className="bg-white p-6 flex flex-col items-center gap-4 text-center border rounded-md hover:drop-shadow-lg featuresContent">
         <div class="border rounded-full bg-red-100 flex h-fit w-fit p-2 justify-center items-center ">
         <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-school" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
        <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
      </svg>
         </div>
         <div>
           <p className="font-bold pb-2">Unsupervised Approach</p>
           <p>We have adopted an unsupervised approach with this project that allows us to approach the dataset without the requirement of explicit labeling. This approach is very helpful in dealing with large datasets.</p>
         </div>
       </div>
       <div className="bg-white p-6 flex flex-col items-center gap-4 text-center border rounded-md hover:drop-shadow-lg featuresContent">
         <div class="border rounded-full bg-green-100 flex h-fit w-fit p-2 justify-center items-center ">
         <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-area-line" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <polyline points="4 19 8 13 12 15 16 10 20 14 20 19 4 19" />
        <polyline points="4 12 7 8 11 10 16 4 20 8" />
      </svg>
         </div>
         <div>
           <p className="font-bold pb-2">Correlational Analysis</p>
           <p>Not only do we provide the result but also a broader analysis of how each and why each area and each feature is analyzed along with the inter-variable relationships captured within the observed dataset.</p>
         </div>
       </div>
       <div className="bg-white p-6 flex flex-col items-center gap-4 text-center border rounded-md hover:drop-shadow-lg featuresContent">
         <div class="border rounded-full bg-indigo-100 flex h-fit w-fit p-2 justify-center items-center ">
         <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clipboard-list" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="2" />
        <line x1="9" y1="12" x2="9.01" y2="12" />
        <line x1="13" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="9.01" y2="16" />
        <line x1="13" y1="16" x2="15" y2="16" />
        </svg>
         </div>
         <div>
           <p className="font-bold pb-2">Complete Documentation</p>
           <p>We also provide a complete project report explaining each minute feature and key value of the research in excruciating detail. </p>
         </div>
       </div>
       <div className="bg-white p-6 flex flex-col items-center gap-4 text-center border rounded-md hover:drop-shadow-lg featuresContent">
         <div class="border rounded-full bg-lime-100 flex h-fit w-fit p-2 justify-center items-center ">
         <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="12" cy="12" r="9" />
        <line x1="3.6" y1="9" x2="20.4" y2="9" />
        <line x1="3.6" y1="15" x2="20.4" y2="15" />
        <path d="M11.5 3a17 17 0 0 0 0 18" />
        <path d="M12.5 3a17 17 0 0 1 0 18" />
      </svg>
         </div>
         <div>
           <p className="font-bold pb-2">Web Portal</p>
           <p>A react-based responsive web portal to conveniently display the results by means of interactive plots, charts and maps.<br/>
           <a className="text-blue-600" href="https://pdfhost.io/v/gG7GAlrU7_Analysis_of_Reforestation_Potential_using_Machine_Learning_and_Satellite_Images_1">Find the paper here</a></p>
         </div>
       </div>
     </div>
   </section>
    );
};

export default Features;