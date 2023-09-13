import React from "react";
import {useState} from "react";

//another way of creating elements than JSX
/*
const Star = () => React.createElement("div", null, "This is a little star")

const App = () => {
  return Star();
}
*/




//uplifting state (Lamp switch example)
/*
import styled from "styled-components";
import Lamp from "./components-lightSwitch/Lamp";
import LightSwitch from "./components-lightSwitch/LightSwitch";

//styled "Component"
const Room = styled.div`
position: relative;
width: 500px;
height: 500px;
border: 10px solid black;
margin: 0 auto
`;

//only use the setState to change the state, in order to cause a re-render
//setters will be called with the previous state
//will use the lamp state on both the lamp and lightSwitch
function App () {
  const [isLampOneOn, setIsLampOneOn] = useState(false);
  const [isLampTwoOn, setIsLampTwoOn] = useState(true);

  const handleLightSwitchOne = () => setIsLampOneOn(prev => !prev);
  const handleLightSwitchTwo = () => setIsLampTwoOn(prev => !prev);

  return (
    <Room>
      <Lamp lampOn={isLampOneOn} position="left" />
      <Lamp lampOn={isLampTwoOn} position="right" />

      <LightSwitch
        name="one"
        callback={handleLightSwitchOne}
        switchOn={isLampOneOn}
        position="left"
      />

      <LightSwitch
        name="two"
        callback={handleLightSwitchTwo}
        switchOn={isLampTwoOn}
        position="right"
      />


    </Room>
  );


};
*/

// Components
import Header from "./components/Header"; //h2
import Home from "./components/Home";

import { GlobalStyle } from "./GlobalStyle";  //h2

const App = () => {
  return (

    <div className="App">

      <Header />

      <Home />

      <GlobalStyle />

    </div>
  );
}

export default App;
