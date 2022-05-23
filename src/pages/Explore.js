import React, {useState} from 'react';
import { NavLink} from '../Navbar/NavbarElements';

const Explore = () => {
    const [toggle1,setToggle1] = useState(false);
    const [toggle2,setToggle2] = useState(false);
    return(
    <>
    { /* Side bar */}
    <div className = "md:w-1/3 lg:w-1/6 min-h-screen flex flex-col bg-header text-white py-8  text-center items-center gap-4">
            <svg className="cursor-pointer " xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-seeding" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
                <path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
                <line x1="12" y1="20" x2="12" y2="10" />
            </svg>
            <NavLink to="/" className="px-4 cursor-pointer hover:text-amber-100 ">GO BACK</NavLink>
            <div className = "flex flex-row gap-1 items-center cursor-pointer hover:text-amber-100 px-4" onClick = {() => setToggle2(!toggle2)}>
                <p>Correlational Analysis</p>
                <svg xmlns="http://www.w3.org/2000/svg" className ={toggle2 ?'rotate-180':'rotate-0'} width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M18 15l-6 -6l-6 6h12" transform="rotate(180 12 12)" />
                </svg>
            </div>
            {toggle2 && (<div className="px-4">
                    <NavLink to = "/Ndwi" className = "hover:text-amber-100">NDWI</NavLink>
                    <NavLink to = "/Ndbi" className = "hover:text-amber-100">NDBI</NavLink>
                    <NavLink to = "/Ui" className = "hover:text-amber-100">UI</NavLink>
                    <NavLink to = "/Laterite" className = "hover:text-amber-100">Laterite</NavLink>
                    <NavLink to = "/Biotite" className = "hover:text-amber-100">Biotite</NavLink>
                    <NavLink to = "/Gossan" className = "hover:text-amber-100">Gossan</NavLink>
                    <NavLink to = "/Fe2" className = "hover:text-amber-100">Fe2+</NavLink>
                    <NavLink to = "/Fe3" className = "hover:text-amber-100">Fe3+</NavLink>
            </div>)}    

            <div className = "flex flex-row gap-1 items-center cursor-pointer hover:text-amber-100 px-4" onClick = {() => setToggle1(!toggle1)}>
                <p>Get Optimum Values</p>
                <svg xmlns="http://www.w3.org/2000/svg" className ={toggle1 ?'rotate-180':'rotate-0'} width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M18 15l-6 -6l-6 6h12" transform="rotate(180 12 12)" />
                </svg>
            </div>
            {toggle1 && (<div className="px-4">
                    <NavLink to = "/OptimumNDVI" className = "hover:text-amber-100">NDVI</NavLink>
                    <NavLink to = "/OptimumNDWI" className = "hover:text-amber-100">NDWI</NavLink>
                    <NavLink to = "/OptimumNDBI" className = "hover:text-amber-100">NDBI</NavLink>
                    <NavLink to = "/OptimumUI" className = "hover:text-amber-100">UI</NavLink>
                    <NavLink to = "/OptimumLaterite" className = "hover:text-amber-100">Laterite</NavLink>
                    <NavLink to = "/OptimumBiotite" className = "hover:text-amber-100">Biotite</NavLink>
                    <NavLink to = "/OptimumGossan" className = "hover:text-amber-100">Gossan</NavLink>
                    <NavLink to = "/OptimumFe2" className = "hover:text-amber-100">Fe2+</NavLink>
                    <NavLink to = "/OptimumFe3" className = "hover:text-amber-100">Fe3+</NavLink>
            </div>)}  
            <NavLink to = "/Rankingfeatures" className = "px-4 hover:text-amber-100">Feature wise ranking</NavLink>
            <NavLink to = "/Rankingndvi" className = "px-4 hover:text-amber-100">NDVI wise ranking</NavLink>
            <NavLink to = "/Kmeans" className = "flex flex-row gap-1 items-center cursor-pointer px-4 hover:text-amber-100">K-means wise mapping </NavLink>
            <NavLink to = "/KmeansAE" className = "flex flex-row gap-1 items-center cursor-pointer px-4 hover:text-amber-100">K-means with autoencoder wise mapping</NavLink>
            <NavLink to = "/Gmm" className = "flex flex-row gap-1 items-center cursor-pointer px-4 hover:text-amber-100">GMM</NavLink>
              
    </div>
    </>
        
    );
};

export default Explore;