import React from 'react'
import './App.css';

//Part 2
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//Components
import Nav from './components/Nav';
import Home from './components/Home/layout';
import NotFound from './components/NotFound';
import History from './components/History/layout';
import Footer from './components/Footer';


const App = () => {






  return (


    <div className="
      bg-gradient-to-bl from-[#05a570] via-[#2779b3] to-[#226798]
      min-h-[100vh] max-w-[100vw] text-white
      flex flex-col
      
    ">



    

    <Router>
      <Nav/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:checkId" element={<History/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>  

      <div className="mt-auto">
        <Footer/>
      </div>
      
    </Router>



    </div>




  )
}

export default App;