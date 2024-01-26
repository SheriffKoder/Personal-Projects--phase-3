//Part 5
import React, { ReactNode, createContext, useContext, useState } from 'react';


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
    carModel: string,
    lastCheck: string,
    nextCheck: string,
    image: string,
    _id: string,
    userId: string,
    checks: checkModel[],

  }

type userType = {
    name: string,
    email: string,
    _id: string,
    cars: [],

}

type fullUserType = {
    userInfo: userType | null,
    userCars: carInfoType[] | null,
    token: any,
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
    _id: "",
    cars: [],
}

const userCars:carInfoType = {
    brand: "",
    carModel: "",
    lastCheck: "",
    nextCheck: "",
    image: "",
    _id: "",
    userId: "",
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


const fullUser = {
    userInfo:null, userCars:[], token: ""
}




export const userContext = createContext<{userState: fullUserType, updateUser: (user: fullUserType) => void}>({
    userState:fullUser,
    updateUser: (user: fullUserType)=> {}
});

const UserProvider: React.FC<{children: ReactNode}>= ({children}) => {
    const [userState, setUserState] = useState<fullUserType>(fullUser);

    const updateUser = (user:fullUserType) => {
        setUserState(user);
    }

    return (
        <userContext.Provider value={{userState, updateUser}}>
            {children}
        </userContext.Provider>
    );
}

export default UserProvider;

