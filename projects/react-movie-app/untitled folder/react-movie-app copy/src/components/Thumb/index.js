import React from "react";
import { Link } from "react-router-dom"; //(4)

//Styles
import { Image } from "./Thumb.styles";

const Thumb = ({image, movieId, clickable}) => (
    <div>
        {/* //(4) */}
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt="movie-thumb" />
            </Link>
        ) : (
            <Image src={image} alt="movie-thumb" />
        )}

        {/* <Image src={image} alt="movie-thumb" /> */}
    </div>
);

export default Thumb;