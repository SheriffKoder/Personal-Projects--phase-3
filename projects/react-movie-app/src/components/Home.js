import React , {useState, useEffect} from "react";



// Config (1)
//will import some things from the config.js file
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";

//Components
import HeroImage from "./HeroImage"; //(3)

//Hook
import { useHomeFetch } from "../hooks/useHomeFetch" //(2.1)


//Image (1)
//can name the image any name
import NoImage from "../images/no_image.jpg";

const Home = () => {


    //(2.1) destruct our custom hook
    const {state, loading, error} = useHomeFetch();


    //(2)
    console.log(state);


    //(3)
    //fragments, <>, sometimes we do not want to create a div
    //grab the first movie in the movie results array
    //&& short circuit
    //means, if state.results is true, will use HeroImage, if not, will fallback
    return ( 
        <>
            {state.results[0] &&
                <HeroImage />
            }

        </>
    )
    //return <div>Home Page</div> //(1)

}

export default Home;