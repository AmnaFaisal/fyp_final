import React from 'react';

const Footer = () => {
    return(
        <section id="sign_in" className="text-gray-700 bg-gray-100 px-8 md:px-12 lg:px-20 py-20 flex flex-col md:flex-row sm:gap-4 gap-8 md:gap-8 lg:gap-2 justify-between">
     <div className="flex flex-col gap-6 md:w-1/2">
       <div class="flex flex-col gap-2 text-center md:text-left md:w-3/4">
         <h1 className="text-xl font-medium">Analysis of Reforestation Potential in Pakistan</h1>
         <p>A machine learning based satellite imagery analysis of reforestation potential in Pakistan</p>
        </div>
        <div class="hidden md:block flex flex-col gap-2">
         <h1 className="text font-medium">Contact us:</h1>
         <p>School of Electrical Engineering and Computer Sciences,</p>
         <p>National University of Sciences and Technology,</p>
         <p>H-12, Islamabad, Pakistan</p>
        </div>
        <div class="hidden md:block flex flex-col gap-2">
         <h1 className="font-medium">Email</h1>
         <p>mqureshi.bese18seecs@seecs.edu.pk</p>
         <p>afaisal.bese18seecs@seecs.edu.pk</p>
        </div>
        
     </div>
     <div className="flex flex-col gap-6 md:w-1/2">
     <div class="flex flex-col gap-2 text-center md:text-left items-center">
         <h1 className="text-xl font-medium">Write To Us</h1>
         <p>Got anything to say? Drop us an email and we shall get back to you as soon as we can!</p>
      </div>
      <div className="flex flex-col gap-2 ">
        <p>This study was conducted as part of the authors' final year project at SEECS-NUST and is an entirely original piece of work apart from the places where other pieces of work have been referred.</p>
        <p>© 2022 Copyright. All Rights Reserved</p>
        <a className="text-blue-600" href="https://pdfhost.io/v/gG7GAlrU7_Analysis_of_Reforestation_Potential_using_Machine_Learning_and_Satellite_Images_1">Find Paper Here</a>
    </div>
    <div class="md:hidden flex flex-col gap-8">
          <div class="flex flex-col gap-2">
          <h1 className="text font-medium">Contact us:</h1>
          <p>School of Electrical Engineering and Computer Sciences,</p>
          <p>National University of Sciences and Technology,</p>
          <p>H-12, Islamabad, Pakistan</p>
          </div>
          <div class="flex flex-col gap-2">
          <h1 className="font-medium">Email</h1>
          <p>mqureshi.bese18seecs@seecs.edu.pk</p>
          <p>afaisal.bese18seecs@seecs.edu.pk</p>
          </div>
          
     </div>
    </div>
    
   </section>
    );
};

export default Footer;