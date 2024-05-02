//import logo from './logo.svg';
//import './App.css';


//!!the idea is a function that returns some html syntax
//may get a props parameter


//this file goes into index.js which displays on #root div
/*
function App() {


  // #just return JSX right away
  //return (
  <h1> hello world </h1>
  );

  // #returning html syntax
  const element = <h1> Hello {name} </h1>;


  // # injecting a variable into JSX
  // #returning a function generating html
  const name = "john";
  const element = () => {
      //return <h1> Hello {name} </h1>;
  }  
  // return (element());



  //#return many tags, must be wrapped in a container and ()
  const element = (
    <div>
      <h1> Hello </h1>
      <h2> Time is {new Date().toLocaleTimeString()}</h2>
    </div>
  );

  return(element);


}
*/



//(02.01) or a class that extends the imported React.Component
//which also returns an html input in a render method
// import React from "react";
// class App extends React.Component {
//   render() {
//     return <h1>Hello World</h1>
//   }
// }


//(02.02) passing a props object, value is given from the render syntax name="SS"
import Welcome from "./components/welcome"; //sub-component
import { useState,useEffect } from 'react';

function App(props) {

  //use props from index.js
  //#return many tags, must be wrapped in a container and ()
  /*
  const element = (
    <div>
      <h1> Hello {props.name}</h1>
      <h2> Time is {new Date().toLocaleTimeString()}</h2>
    </div>
  );

  return(element);
  */

  //or return another component which returns jsx, passing index props
  //can use another components to store multi line JSX
  /*
  return (
    <div>
      <Welcome name={props.name} class={props.class} class2="colored-text2"/>
      <Welcome name={props.name}/>

    </div>
  )
  */



  //can combine all props in a single object and use from it in the other side

  //creating a function to be passed to next component
  function myFn () {console.log("Hey")};

  //creating a variable that will be changed by incrementOnClick function
  const [index, setIndex] = useState(0);
  function incrementOnClick() {
    console.log(index);
    setIndex((index < 2) ? index + 1 : 0);
  }

  //useState re-renders the page (clicking the button)
  //so useEffect takes a function that runs on every re-render
  //add [] as a last argument for useEffect to use on first render only
  useEffect(() => {
    console.log("re-render");
    //cleanup return function
    return (console.log("dismounted effect"));
  })



  
  //the return of App, a jsx and a component, 
  //passing props and functions from here
  //can pass props here to be used in sub-component as an object
  if(index <= 1) {
    return (
      <div>
        <button onClick={incrementOnClick}>Click Me</button>
        <Welcome passedProps={props} passedFn={myFn} count={index}/>
      </div>
    )  
  } else {
    return (
      <div>
        <button onClick={handleClick}>Clicked already</button>
      </div>
    )  
  }
 

}


export default App;
