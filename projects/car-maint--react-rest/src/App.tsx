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

  // const appContext = useContext(userContext);
  // console.log(useContext(userContext));

  // const myFetch = async () => {

  //   try {
  //     const url = process.env.REACT_APP_CURRENT_URL!;

  //     const apiResponse = await fetch(url+"/auth/login");  

  //     console.log(await apiResponse.json());

  //   } catch (error) {
  //     console.log(error);
  //   }

  // }

  // myFetch();


  return (

    // bg-gradient-to-bl from-[#6505a5] via-[#2f0590] to-[#1a2777]

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