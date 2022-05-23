import React from 'react';

const Whyus = () => {
    return(
    <section id="why_us" className="text-gray-700 bg-white px-8 md:px-12 lg:px-20 py-20 flex flex-col gap-8 justify-center">
   <div className = "flex flex-col gap-8 justify-center items-center text-center">
       <h1 className="text-3xl font-bold">Why choose us?</h1>
       <h2 className="text-xl">Lorem Ipsum is simply a dummy text of the printing and typesetting industry. lorem Ipsum has been industry's standard dummy text ever since the 1500s.</h2>
    </div>
    <div>
     <div className = "flex flex-col md:flex-row gap-4 sm:gap-8 lg:gap-16 md:justify-between py-2 md:py-8 ">
     <div className="bg-indigo-900 md:w-1/3 text-white font-bold text-2xl">
       INSERT IMAGE HERE
     </div>
     <div className="flex flex-col gap-8 text-center sm:text-left md:w-2/3">
        <div>
          <h3 className="text-lg font-medium text-center md:py-4">Subheading 1</h3>
          <p className="text-center md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         
        </div>
     </div>
   </div>

   <div className = "flex flex-col md:flex-row gap-4 sm:gap-8 lg:gap-16 justify-between py-2 md:py-8">
     <div className="flex flex-col gap-8 sm:text-left  md:w-2/3">
        <div className="md:hidden bg-red-900 md:w-1/3 text-white font-bold text-2xl">
          INSERT IMAGE HERE
        </div>
        <div>
          <h3 className="text-lg font-medium text-center md:py-4">Subheading 2</h3>
          <p className = "text-center md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         
        </div>
     </div>
     <div className="hidden md:block bg-red-900 sm:w-1/2 md:w-1/3 text-white font-bold text-2xl">
       INSERT IMAGE HERE
     </div>
   </div>

   <div className = "flex flex-col md:flex-row gap-4 sm:gap-8 lg:gap-16 justify-between py-2 md:py-8">
     <div className="bg-yellow-900 md:w-1/3 text-white font-bold text-2xl">
       INSERT IMAGE HERE
     </div>
     <div className="flex flex-col gap-8 text-center sm:text-left md:w-2/3">
        <div>
          <h3 className="text-lg font-medium text-center md:py-4">Subheading 3</h3>
          <p className="text-center md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         
        </div>
     </div>
   </div>
   </div>
   </section>
    );
};

export default Whyus;