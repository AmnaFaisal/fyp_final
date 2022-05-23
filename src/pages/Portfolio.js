import React from 'react';

const Portfolio = () => {
    return(
        <section id="portfolio" className="text-gray-700 px-8 md:px-16 lg:px-20 py-20 flex flex-col gap-8 justify-center items-center">
   <div className = "flex flex-col gap-8 justify-center items-center text-center">
       <h1 className="text-3xl font-bold">Diverse Field And Coverage Of Study</h1>
       <h2 className="text-xl">We have covered a wide variety of remote-sensing and GIS methods to the entire landmass of Pakistan where the assembled dataset has encompassed areas ranging from snow capped mountains to lush green fields and barren deserts.</h2>
    </div>
    
    <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
    <div className="w-1/2 md:w-1/3 ">
    <img src="https://i.ibb.co/5h8J1YC/Whats-App-Image-2022-05-23-at-12-27-38-AM.jpg"></img>
    </div>
      <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-1/3 text-center items-center">
      <div className="w-full md:w-1/2">
      <img src="https://i.ibb.co/FJ2Fpfj/Whats-App-Image-2022-05-23-at-12-30-12-AM.jpg"></img>
      </div>
      <div className="w-full md:w-1/2">
      <img src="https://i.ibb.co/v36vr9k/Whats-App-Image-2022-05-23-at-12-30-49-AM.jpg"></img>
      </div>
      </div>
      <div className="bg-indigo-100 w-1/2 md:w-1/3 ">
        <img src="https://i.ibb.co/mT1yV4B/Whats-App-Image-2022-05-23-at-2-25-34-AM.jpg"></img>
      </div>
    </div>
   </section>
    );
};

export default Portfolio;