import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, App1, App2, App3, App4, App5, App6, App9} from './App';
import reportWebVitals from './reportWebVitals';


//root0 - inline render
const root0 = ReactDOM.createRoot(document.getElementById("root0"));
root0.render(<h1>Hello React! - this is root0</h1>);

//create element and sub-element -- element render
const Element = React.createElement("div", 
{
  className: "", 
  href: "SS"
},
[
  "Element Text",
  React.createElement("span", {}, " [this is a child - hey there!]")
]);

const root00 = ReactDOM.createRoot(document.getElementById("root00"));
root00.render(Element);
console.log(Element); //will display all the element's properties

//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App name="SS" class="" />);


//
const myProps = {
  name: "SS",
  age: "30"
};
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<App1 name="SS"/>);

//
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<App2 name="SS"/>);

//
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(<App3 name="SS"/>);

//
const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(<App4 name="SS"/>);

//
const root5 = ReactDOM.createRoot(document.getElementById("root5"));
root5.render(<App5 name="SS"/>);


//
const root6 = ReactDOM.createRoot(document.getElementById("root6"));
root6.render(<App6 name="SS"/>);

//
const root9 = ReactDOM.createRoot(document.getElementById("root9"));
root9.render(<App9/>);
