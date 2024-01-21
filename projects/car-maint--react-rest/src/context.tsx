//Part 5
import React, { ReactNode, createContext, useState } from 'react';


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
    userInfo: userType,
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


const fullUser = {
    userInfo, userCars
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

