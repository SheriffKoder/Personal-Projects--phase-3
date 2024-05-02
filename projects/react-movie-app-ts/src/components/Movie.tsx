import React from "react";
import { useParams } from "react-router-dom";


//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo"; //(5)
import MovieInfoBar from "./MovieInfoBar"; //(5)
import Actor from "./Actor"; //(5)

//Hook
import { useMovieFetch } from "../hooks/useMovieFetch"; //(4)

// Image
import NoImage from "../images/no_image.jpg";

// const Movie = () => <div>Movie</div>;

const Movie: React.FC = () => {

    //movieId as named in the App.js file
    const { movieId } = useParams();

    //gets a string of movieid from the hook so convert it to a number
    //is not assignable to parameter of type string" occurs when a possibly undefined value is passed to a function that expects a string . To solve the error, use a type guard to verify the value is a string before passing it to the function
    if (typeof movieId === "string") {
        const {state: movie, loading, error } = useMovieFetch(movieId);
        if (loading) return <Spinner />
        if (error) return <div>Something went wrong...</div>
    
    
        return (
            <>
                {/* <div>Movie</div> */}
                <BreadCrumb movieTitle={movie.original_title} />
                <MovieInfo movie={movie} />
                <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
                <Grid header="Actors">
                    {movie.actors.map(actor => (
                        <Actor 
                            key={actor.credit_id} 
                            name={actor.name} 
                            character={actor.character} 
                            imageUrl={ 
                                actor.profile_path 
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : NoImage
                            }
                        />

                    ))}
                </Grid>
            </>
        );
    }
};

export default Movie;

