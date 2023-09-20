
//(4)
import { useState, useEffect } from "react";

//API
import API, {Movie, Cast, Crew} from "../API";

// Helpers (5.1)
import { isPersistedState } from "../helpers";

// Types
//create a type object with movie type and merge the actors and directors into this new type
export type MovieState = Movie & { actors: Cast[], directors: Crew[]};


export const useMovieFetch = (movieId: string) => {
    // const [state, setState] = useState<MovieState | {}>({});
    const [state, setState] = useState<MovieState>({} as MovieState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async() => {
            try {
                setLoading(true);
                setError(false);

                //grab the movie data and credits
                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);

                //get directors only
                const directors = credits.crew.filter(
                    member => member.job === "Director"
                );

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });

                setLoading(false);


            } catch (error) {
                setError(true);
            }
        }

        //(5.1) reading from the session storage
        const sessionState = isPersistedState(movieId)
        if (sessionState) {
            console.log("Grabbing from sessionStorage");
            setState(sessionState);
            setLoading(false); //not show the spinner
            return;
        };

        console.log("Grabbing from API");

        fetchMovie();

    },[movieId]);

    
    //(5.1) write to the session storage
    useEffect(() => {
        //each movie will be stored with it's specific movie id
        sessionStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state]);


    return { state, loading, error};

}