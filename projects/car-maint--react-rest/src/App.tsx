import React, { useContext } from 'react'
import './App.css';

//Part 2
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


///// Components
import Nav from './components/Nav';
import Footer from './components/Footer';


import UserProvider, { userContext } from './context';
import Layout from './layout';


const App = () => {

  // const {fullUser} = useContext(userContext);
  console.log(useContext(userContext));




  return (


    <div className="
      bg-gradient-to-bl from-[#05a570] via-[#2779b3] to-[#226798]
      min-h-[100vh] max-w-[100vw] text-white
      flex flex-col min-w-[350px]
      
    ">
      

    <UserProvider>
    <Router>
      <Nav/>

      {/* this contains the router paths to for components,
      placed in a separate component to so can check on the context */}
      <Layout/>
 

      <div className="mt-auto">
        <Footer/>
      </div>
      
    </Router>
    </UserProvider>



    </div>




  )
}

export default App;