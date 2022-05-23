import React from 'react';

const Aboutus = () => {
    return(
        <section id="about_us" className = "text-gray-700 py-20 px-8 sm:px-12 md:px-16 lg:px-20 flex flex-col md:flex-row gap-8 md:gap-16 justify-between">
     <h1 className = "md:hidden text-2xl font-bold text-center ">About us</h1>
     <div className="md:w-1/2 flex items-center">
       <img src="https://i.ibb.co/tBZCWcQ/pakistan.png"></img>
     </div>
     <div className="flex flex-col gap-8 text-center md:text-left md:w-2/3">
       <h1 className="hidden md:block text-3xl font-bold">About us</h1>
        <div>
          <h2 className = "text-xl pb-4 ">A machine learning and satellite imagery based system to predict the reforestation potential of different areas in Pakistan.</h2>
          <p>Our project is aimed at establishing a method to not only map out vegetation potentials across an excessively large surface area, like that of a country, but we also wish to accomplish this without the use of target labels i.e., Unsupervised Methods. The model that we have created makes use of various remote sensing and GIS indices for vegetation, moisture, mineral concentration and urbanization derived from open-source Satellite Images. Such information is often detrimental to the success of medium to large scale projects being undertaken by government as well as non-governmental environment rehabilitation organizations around the world. This research succeeds in providing: <br/>
          1. A holistic analysis of large areas in terms of vegetation potentials.<br/>
          2. The use of Unsupervised Machine Learning to bypass the hassle of mapping labels.</p>
        </div>
     </div>
   </section>
    );
};

export default Aboutus;