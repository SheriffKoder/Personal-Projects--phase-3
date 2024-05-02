import React from "react";
// import PropTypes from "prop-types";

// Styles
import { Wrapper } from "./Button.styles";

// Types
//callback is a function that does not return anything
type Props = {
    text: string;
    callback: () => void;
}

//react function component with props of type Props

const Button: React.FC<Props> = ({ text, callback }) => (

    <Wrapper type="button" onClick={callback}>
        {text}
    </Wrapper>

);

// Button.propTypes = {
//     text: PropTypes.string,
//     callback: PropTypes.func
// };


export default Button;