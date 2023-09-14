import React from "react";



// Config (1)
//will import some things from the config.js file
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";

//Components
import HeroImage from "./HeroImage"; //(3)
import Grid from "./Grid"; //(3)
import Thumb from "./Thumb"; //(3)
import Spinner from "./Spinner"; //(3)
import SearchBar from "./SearchBar"; //(3)

//Hook
import { useHomeFetch } from "../hooks/useHomeFetch" //(2.1)


//Image (1)
//can name the image any name
import NoImage from "../images/no_image.jpg";

const Home = () => {


    //(2.1) destruct our custom hook
    const {state, loading, error, setSearchTerm} = useHomeFetch();


    //(2)
    console.log(state);


    //(3)
    //fragments, <>, sometimes we do not want to create a div
    //grab the first movie in the movie results array
    //&& short circuit
    //means, if state.results is true, will use HeroImage, if not, will fallback
    //however will will use ternary
    //construct the image path as provided from the API with the provided backdrop sizes select 
    return ( 
        <>
            {/* {state.results[0] &&
                <HeroImage />
            } */}

            {state.results[0] ? (
                <HeroImage 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`} 
                    title={state.results[0].original_title}
                    text={state.results[0].overview}    
                /> )
                : null
            }

            <SearchBar setSearchTerm={setSearchTerm}/>

            <Grid header="Popular Movies">
                {state.results.map(movie => (
                    // <div key={movie.id}>{movie.title}</div>
                    <Thumb 
                        key={movie.id} 
                        clickable={true}
                        image = { movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            <Spinner />

        </>
    );
    //return <div>Home Page</div> //(1)

};

export default Home;