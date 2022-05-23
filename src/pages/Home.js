import React from 'react';
import { NavLink} from '../Navbar/NavbarElements';
const Home = () => {
    return(
        <section id="home_section" className="relative bg-portal">

     {/* large screen body */}
    <div className="hidden lg:block absolute inset-x-52 inset-y-40 bg-emerald-900">
      <div className="relative">
          <div className="absolute inset-y-12 -left-20 ">
              <h1 className="text-white text-4xl pb-2 ">Analysis Of Reforestation Potential <br/>In Pakistan</h1>
              <h1 className="text-xl text-white ">Using Satellite Images and Machine Learning</h1>
              <NavLink to="/Graphs" activeStyle><button className="mt-8 border border-white rounded bg-transparent text-white p-4 font-semibold hover:bg-white hover:text-emerald-900 focus:bg-white focus:text-emerald-900">Get Started</button></NavLink>
          </div>
        </div>
    </div> 
      { /* mobile and tab screen */}
    <div className="absolute lg:hidden justify-center inset-y-24 sm:inset-y-48 px-28 sm:px-16 ">
      <h1 className="text-white text-2xl sm:text-4xl pb-4">Analysis Of Reforestation Potential <br/>In Pakistan</h1>
      <h1 className="sm:text-xl text-white ">Using Satellite Images and Machine Learning</h1>
      <button to="/Graphs" activeStyle className="mt-4 sm:mt-8 border border-white rounded bg-transparent text-white p-4 font-semibold hover:bg-white hover:text-emerald-900 focus:bg-white focus:text-emerald-900">Get Started</button>
    </div> 
   </section>
    );
};

export default Home;