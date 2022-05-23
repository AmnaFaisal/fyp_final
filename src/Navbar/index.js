import React,{useEffect,useState} from 'react';
import { NavLink} from './NavbarElements';
import  Home from '../pages/Home';
import Aboutus from "../pages/Aboutus";
import Features from "../pages/Features";
import Portfolio from '../pages/Portfolio';
import Footer from '../pages/Footer';

const Navbar = () =>{
  const [toggle, setToggle] = useState(false)

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 150);
    });
  }, []);

    return(
        <>
           {/*nav bar large screen*/}
    <div className= {scroll ? "hidden lg:block absolute sticky z-10 px-20 inset-x-20 py-4 top-0 bg-header":"hidden lg:block absolute inset-x-20 py-4 top-0 z-10"} >
      <div className="flex flex-row justify-between items-center">
          <svg className="cursor-pointer " xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-seeding" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
              <path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
              <line x1="12" y1="20" x2="12" y2="10" />
          </svg>
      
      <div className="flex flex-row font-semibold text-white">
          <a href="#home_section" className="px-2 cursor-pointer hover:text-amber-100 ">HOME</a>
          <a href ="#about_us" className="px-2 cursor-pointer hover:text-amber-100 ">ABOUT US</a>
          <a href="#features" className="px-2 cursor-pointer hover:text-amber-100 ">FEATURES</a> 
          <a href="#portfolio" className="px-2 cursor-pointer hover:text-amber-100 ">COVERAGE OF STUDY</a>
          <NavLink to="/Graphs" className="px-2 cursor-pointer hover:text-amber-100 ">EXPLORE</NavLink>
      </div>
      </div>
    </div>  
    {/*nav bar tab and mobile phones */}
        <div className = {scroll? "bg-header absolute lg:hidden px-4 py-4 inset-y-0 inset-x-4 sm:inset-x-8 sticky z-10 flex flex-row justify-between":"absolute lg:hidden px-4 py-4 inset-y-0 inset-x-4 sm:inset-x-8 z-10 flex flex-row justify-between "}>
          <svg className=" cursor-pointer" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-seeding" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
              <path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
              <line x1="12" y1="20" x2="12" y2="10" />
          </svg>
          <div>
              <div onClick={() => setToggle(!toggle)} className="cursor-pointer flex justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="42" height="42" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <line x1="4" y1="6" x2="20" y2="6" />
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
              </div>
              {toggle && (
                <div className="bg-white border rounded flex flex-col">
                <a href="#home" className="border-black border-b py-4 px-8 cursor-pointer hover:bg-gray-200">HOME</a>
                <a href="#about_us" className="border-black border-b py-4 px-8 cursor-pointer hover:bg-gray-200">ABOUT US</a>
                <a href="#features" className="border-black border-b py-4 px-8 cursor-pointer hover:bg-gray-200">FEATURES</a> 
                <a href="#portfolio" className="border-black border-b py-4 px-8 cursor-pointer hover:bg-gray-200">COVERAGE OF STUDY</a>
                <NavLink to="/Graphs" activeStyle className="py-4 px-8 cursor-pointer hover:bg-gray-200">EXPLORE</NavLink>
            </div>
              )} 
          </div>
        </div>
        <Home></Home>
        <Aboutus></Aboutus>
        <Features></Features>
        <Portfolio></Portfolio>
        <Footer></Footer>
      </>
    );
};

export default Navbar;