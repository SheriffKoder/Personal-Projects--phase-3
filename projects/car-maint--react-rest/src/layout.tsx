import React, { useCallback, useContext } from 'react'
import './App.css';

//Part 2
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



// Main-pages
import NotFound from './components/Outsiders/NotFound';
import AlreadyLoggedIn from './components/Outsiders/AlreadyLoggedIn';

import WelcomePage from './components/WelcomePage';
import Home from './components/Home/home-layout';
import History from './components/History/history-layout';


// Forms
import SignUp from './components/Forms/signUp';
import Login from './components/Forms/login';
import CheckupNew from './components/Forms/CheckupNew';
import CheckupEdit from './components/Forms/CheckupEdit'
import CarInfoNew from './components/Forms/CarInfoNew';

import NewUserCar from './components/Outsiders/NewUserCar';

import UserProvider, { userContext } from './context';


const Layout = () => {

    const context = useContext(userContext);
    const userCars = context.userState.userCars || [];
    console.log(context);

  return (
    <>        
        {!context.userState.userInfo ? (

            <Routes>
                <Route path="/*" element={<NotFound />} />

                <Route path="/" element={<WelcomePage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />

                {/* if user not authenticated, redirect to welcome page to login or sign-up */}
                <Route path="/checkup/*" element={<WelcomePage />} />
                <Route path="/CarInfo/*" element={<WelcomePage />} />

            </Routes>

        ) : (

            userCars.length === 0 ? (
                <Routes>
                <Route path="/*" element={<NewUserCar />} />
                <Route path="/CarInfo/new/" element={<CarInfoNew />} />
            </Routes>

            ): (
                <Routes>
                {/* if there is a user, display user info, if there is none, display the login/signup */}
                    <Route path="/" element={<Home />} />
                    <Route path="/:carId/checkup/new/" element={<CheckupNew />} />
                    <Route path="/:carId/checkup/:checkIndex/:historyIndex/edit/" element={<CheckupNew />} />
                    <Route path="/CarInfo/new/" element={<CarInfoNew />} />
                    <Route path="/CarInfo/edit/:carId" element={<CarInfoNew />} />
                    <Route path=":carId/checkup/:checkIndex/" element={<History/>} />
    
                    {/* if user is already logged it, then tell you are logged in */}
                    <Route path="/signup" element={<AlreadyLoggedIn />} />
                    <Route path="/login" element={<AlreadyLoggedIn />} />
                </Routes>  
            )

        )}


            {/* {useContext(userContext).userState.userInfo.name !== "" && 
            !useContext(userContext).userState.userCars && (
                <Routes>
                    <Route path="/" element={<NewUserCar />} />     
                </Routes>
       
            )} */}
                {/* ):( */}
                
            {/* )} */}
            
        
        </>

  )
}

export default Layout;