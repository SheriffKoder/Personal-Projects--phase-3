
import React from "react";
// import PropTypes from "prop-types";
//Styles
import { Wrapper, Content } from "./Grid.styles";

// Types
//not have to define children as it is built in into react
type Props = {
    header: string;
    children: React.ReactNode;
}



//children, a default prop we can use in react
//when we nest things inside a component
//they will be accessible in the children prop
const Grid: React.FC<Props> = ({header, children}) => (

    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>

);

// Grid.propTypes = {
//     header: PropTypes.string
// };

export default Grid;