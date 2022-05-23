import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Explore from './pages/Explore';
import OptimumNDVI from './pages/optimum/OptimumNDVI';
import OptimumNDWI from './pages/optimum/OptimumNDWI';
import OptimumNDBI from './pages/optimum/OptimumNDBI';
import OptimumUI from './pages/optimum/OptimumUI';
import OptimumBiotite from './pages/optimum/OptimumBiotite';
import OptimumGossan from './pages/optimum/OptimumGossan';
import OptimumLaterite from './pages/optimum/OptimumLaterite';
import OptimumFe2 from './pages/optimum/OptimumFe2';
import OptimumFe3 from './pages/optimum/OptimumFe3';
import Rankingfeatures from './pages/optimum/Rankingfeatures';
import Rankingndvi from './pages/optimum/Rankingndvi';
import Kmeans from './pages/k-meansAndGMM/Kmeans';
import KmeansAE from './pages/k-meansAndGMM/KmeansAE';
import Gmm from './pages/k-meansAndGMM/Gmm';
import Ndbi from './pages/correlation/Ndbi';
import Ndwi from './pages/correlation/Ndwi';
import Ui from './pages/correlation/Ui';
import Fe2 from './pages/correlation/Fe2'
import Fe3 from './pages/correlation/Fe3';
import Biotite from './pages/correlation/Biotite';
import Laterite from './pages/correlation/Laterite';
import Gossan from './pages/correlation/Gossan';
import Graphs from './pages/Graphs';


function App() {
  return (
    <Router>
    
    <Routes>
        <Route path ='/' element={<Navbar/>}/>
        <Route path='/Explore' element={<Explore/>} />
        <Route path='/Graphs' element={<Graphs/>} />
        <Route path='/OptimumNDVI' element={<OptimumNDVI/>} />
        <Route path='/OptimumNDWI' element={<OptimumNDWI/>} />
        <Route path='/OptimumNDBI' element={<OptimumNDBI/>} />
        <Route path='/OptimumUI' element={<OptimumUI/>} />
        <Route path='/OptimumGossan' element={<OptimumGossan/>} />
        <Route path='/OptimumLaterite' element={<OptimumLaterite/>} />
        <Route path='/OptimumBiotite' element={<OptimumBiotite/>} />
        <Route path='/OptimumFe2' element={<OptimumFe2/>} />
        <Route path='/OptimumFe3' element={<OptimumFe3/>} />
        <Route path='/Rankingfeatures' element = {<Rankingfeatures/>}/>
        <Route path='/Rankingndvi' element = {<Rankingndvi/>}/>
        <Route path='/Kmeans' element = {<Kmeans/>}/>
        <Route path='/KmeansAE' element = {<KmeansAE/>}/>
        <Route path='/Gmm' element = {<Gmm/>}/>
        <Route path='/Ui' element = {<Ui/>}/>
        <Route path='/Ndwi' element = {<Ndwi/>}/>
        <Route path='/Ndbi' element = {<Ndbi/>}/>
        <Route path='/Biotite' element = {<Biotite/>}/>
        <Route path='/Laterite' element = {<Laterite/>}/>
        <Route path='/Gossan' element = {<Gossan/>}/>
        <Route path='/Fe2' element = {<Fe2/>}/>
        <Route path='/Fe3' element = {<Fe3/>}/>
        
    </Routes>
    </Router>
  );
}

export default App;
