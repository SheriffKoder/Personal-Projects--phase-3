import React from "react";
import { Link } from "react-router-dom"; //(4)
// import PropTypes from "prop-types";

//Styles
import { Image } from "./Thumb.styles";

// Types
//set movieId  to optional as it is not needed in movieInfo index.tsx
type Props = {
    image: string;
    movieId?: number;
    clickable: boolean;
}


const Thumb: React.FC<Props> = ({image, movieId, clickable}) => (
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


// Thumb.propTypes = {
//     image: PropTypes.string,
//     movieId: PropTypes.number,
//     clickable: PropTypes.bool
// }

export default Thumb;