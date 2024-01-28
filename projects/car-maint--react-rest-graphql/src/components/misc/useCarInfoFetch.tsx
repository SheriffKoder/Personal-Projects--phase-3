//custom Hook

import { useState, useEffect } from "react";


type carInfoType = {
    brand: string,
    model: string,
    lastCheck: string,
    nextCheck: string,
    image: string,
    _id: string
  }

const fetchCarInfo: ()=>Promise<carInfoType> = () => {
return  new Promise ((resolve) => {
    
    const carInfo:carInfoType = {
    brand: "Mazda",
    model: "mazda 6",
    lastCheck: "01/01/2024",
    nextCheck: "30/01/2024",
    image: "/images/car1.png",
    _id: "000",
    }

    setTimeout(()=> {
        resolve(carInfo);
    },2000);
})
}
    
export const useCarInfoFetch = () => {


    ////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////
    //////// Loading ////////
    const [info, setInfo] = useState<any>();

    //useCallBack allows not to cause an infinity loop from setting the state
    //so it triggers conditionally, but we will use the function in the useEffect
    //which can do the same job

    // const fetchTest = useCallback (async () => {

    //   try {
    //     const carInfo = await fetchCarInfo();
    //     console.log(carInfo);
    //     setInfo(carInfo);

    //   } catch (error) {
    //     console.log(error);
    //   }

    // },[]);

    useEffect(()=> {

        const fetchTest = async () => {

            try {
                const carData = await fetchCarInfo();
                console.log(carData);
                setInfo(carData);
        
            } catch (error) {
                console.log(error);
            }
        
        }

        fetchTest();    

    // },[fetchTest]);  //for the useCallBack
    },[]);
    ////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////


    return info;

}