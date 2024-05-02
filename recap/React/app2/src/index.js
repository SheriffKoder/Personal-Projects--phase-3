import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App7} from './App';
import reportWebVitals from './reportWebVitals';



//const root0 = ReactDOM.createRoot(document.getElementById('root0'));
//root0.render(<h1>Hey</h1>);

//on root1 render App and give props to use
// const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// root1.render(<App name="SS" class="colored-text"/>);


//normal js function that has a render line in it
// function tick() {
//   root1.render(<App name="SS" class="colored-text"/>);
// }
// setInterval(tick, 1000);


//create a DOM element, 
const Element = React.createElement("div", {className: "colored-text", href: "SS"},[
      'Current Time',
      React.createElement('span', {},'Hey there!')
]);

//ReactDOM.render(element, container, callback);
// root0.render(Element);
// console.log(Element); //will display the element's properties



////App2

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<App7 />);
