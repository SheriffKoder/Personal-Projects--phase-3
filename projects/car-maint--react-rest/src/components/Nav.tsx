import React from "react"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { userContext } from "../context";


type checksType = {
    addDate: string,    //c     //1     //2
    initialCheck: string,               //2
    nextCheck: string,  //c     //1     //2
    checkedOn: string,  //c     //1     //2
    notes: string,      //c     //1     //2
}

type checkModel = {
    name: string,
    color: string,
    history: checksType[],
    _id: string,
    
};


type carInfoType = {
    brand: string,
    model: string,
    lastCheck: string,
    nextCheck: string,
    image: string,
    _id: string,
    checks: checkModel[],

  }

type userType = {
    name: string,
    email: string,

}

type fullUserType = {
    user: userType,
    userCars: carInfoType,
}

type contextType = {
    user: fullUserType | null;
    setUser: React.Dispatch<React.SetStateAction<fullUserType>>;

}


//a user has name, email, etc
//a car is assigned with a userId that contains
//its info, its checks
//each check contain its main info and history array


// console.log(fullUser);

const userInfo : userType = {
    name: "",
    email: "",
}

const userCars:carInfoType = {
    brand: "",
    model: "",
    lastCheck: "",
    nextCheck: "",
    image: "",
    _id: "",
    checks: [
        {
            name: "",
            color: "",
            _id: "",
            history: [
                {
                    addDate: "",
                    initialCheck: "",
                    nextCheck: "",
                    checkedOn: "",
                    notes: "",
                },
  
            ]


        },
        
    ]
};


const emptyUser = {
    userInfo:null, userCars:null, token: ""
}



const Nav = () => {
    const navigate = useNavigate();

    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    const setUser = useContext(userContext).updateUser;

    const isLoggedIn = (useContext(userContext).userState.userInfo);


  return (
    <nav className="text-white bg-[#0000001c] px-3 py-2 mb-6">
        <ul className="flex flex-row items-center gap-2">
            <li>
                <a onClick={()=>navigate("/")}>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                className="bi bi-tools" 
                viewBox="0 0 16 16"> 
                    <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z" 
                    fill="white">
                    </path> 
                </svg>

                </a>
            </li>

            <li>
                Car Maintenance
            </li>

            {isLoggedIn ? (
                
                <div className="ml-auto">

                    {/* <button 
                        onClick={()=>navigate(`/carInfo/new/`)}
                        className="rounded-full border border-[#ffffff2a] 
                        px-2 pt-[2px] text-xs w-[4.5rem]
                        hover:bg-[#ffffff2a] focus:bg-[#ffffff2a]">
                            add car
                    </button> */}

                    <button 
                        // onClick={()=>navigate(`/signOut/`)}
                        onClick={()=>{setUser(emptyUser)}}
                        className="rounded-full border border-[#226798] 
                        px-2 py-[1px] text-xs ml-1 w-[4.5rem]
                        bg-[#226798]
                        hover:bg-[#ffffff2a] focus:bg-[#ffffff2a]
                        hover:border-[#ffffff2a] focus:border-[#ffffff2a]">
                            sign out
                    </button>
                </div>
            ):(
                // <div className="ml-auto">
                //     <button 
                //         // onClick={()=>navigate(`/login/`)}
                //         onClick={()=>{setIsLoggedIn(true)}}
                //         className="rounded-full border border-[#226798] 
                //         px-2 py-[1px] text-xs ml-1 w-[4.5rem]
                //         bg-[#226798]
                //         hover:bg-[#ffffff2a] focus:bg-[#ffffff2a]
                //         hover:border-[#ffffff2a] focus:border-[#ffffff2a]">
                //             Login
                //     </button>
                // </div>
                ""
            )}


            {/* <button className='ml-auto rounded-full bg-[#226798] px-2 py-0'>
                Login
            </button> */}

        </ul>
    </nav>
  )
}

export default Nav;