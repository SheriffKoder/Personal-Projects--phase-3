import React from 'react'
import './App.css';

//Part 2
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


///// Components
import Nav from './components/Nav';

// Main-pages
import NotFound from './components/NotFound';
import Home from './components/Home/layout';
import History from './components/History/layout';

import Footer from './components/Footer';

// Forms
import SignUp from './components/Forms/signUp';
import Login from './components/Forms/login';
import CheckupNew from './components/Forms/CheckupNew';
import CheckupEdit from './components/Forms/CheckupEdit'
import CarInfoNew from './components/Forms/CarInfoNew';

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
        <Route path="/checkup/:checkId" element={<History/>} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/checkup/new/" element={<CheckupNew />} />
        <Route path="/checkup/edit/:checkId" element={<CheckupEdit />} />
        <Route path="/CarInfo/new/" element={<CarInfoNew />} />


      </Routes>  

      <div className="mt-auto">
        <Footer/>
      </div>
      
    </Router>



    </div>




  )
}

export default App;