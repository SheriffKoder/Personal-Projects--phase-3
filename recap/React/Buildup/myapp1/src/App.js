
// components must be "pure" functions
// i.e return value based on input and not change something from outside
// same output when the same inputs are passed

// //true && expression always evaluates to expression, and 
// //false && expression always evaluates to false.

// return (
//   {unreadMessages.length > 0 &&
//   <h2>
//     You have {unreadMessages.length} unread messages.
//   </h2>
// }
// )

// useTransition; lets you mark a state transition as non-blocking and allow other updates to interrupt it.
// useDeferredValue; lets you defer updating a non-critical part of the UI and let other parts update first.

// when to favor useReducer over useState
// when have a complex state logic that utilizes multiple sub-values
// or when a state depends on the previous one

// seDebugValue can be added to a custom hook, to have a label in React Dev tools

import Welcome from "./components/welcome";
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { useContext, createContext } from "react";
import { useRef } from "react";
import { useCallback } from "react";


const App = () => {

  // const element = <h2>Hello App.js</h2>
  // return (element);

  // const name = "SS";
  // const element = () => {
  //   return <h1>Hello {name}</h1>
  // }
  // return (element());


  const element2 = (
    <div>
      <h3>Hello element2</h3>
      <p>Time now is : {new Date().toLocaleTimeString()}</p>
    </div>
  )
  return(element2);

};


const App1 = (props) => {

  return (
    <div>
      <h3>Welcome {props.name}</h3>
      <Welcome call="Mr." name={props.name} />
    </div>
  )

};


const App2 = (props) => {

  const [index, setIndex] = useState(0);

  function indexFn () {
    console.log("Hey index!");
  }

  function incrementOnClick () {
    //indexFn();
    setIndex((index < 2) ? index + 1 : 0);
  }

  useEffect(() => {
    console.log("re-render");
    console.log(index)

    return (console.log("dismounted effect"));
  })


  if (index <= 1) {
    return (
      <div>
        <button onClick={incrementOnClick}>
          index is {index} Click to Increment to {index+1}
          </button>
      </div>
    );
  }
  else {
    return (
      <div>
        <button onClick={incrementOnClick}>
          index is {index} click to reset to 0
          </button>
      </div>
    )
  }



}

//App2
//live change of text by name input and age increment
const App3 = (props) => {

  const [name, setName] = useState("default name");
  const [age, setAge] = useState(0);

  function HandleNameChange (e) {
    setName(e.target.value);
  }

  function HandleAgeChange () {
    setAge(age+1);
  }

  useEffect(()=> {
    console.log("re-render");

  })


  return (
    <>

      <input value={name} onChange={HandleNameChange}/>
      <button onClick={HandleAgeChange}>Increment Age</button>

      <p>Your name is: {name} and {age} years old</p>
    
    </>
  )

}


//passing down context color
const ColorContext = createContext();
const App4 = (props) => {

  const [color, setColor] = useState("red");

  function handleColor () {
    setColor("blue");
  }

  return (
    <>
      <button onClick={handleColor}>Change color</button>

      <ColorContext.Provider value={color}>
        <h4>Color is {color}!</h4>
        <Component2/>
      </ColorContext.Provider>
    </>
  )
}

function Component2 () {
  return (
    <Component3/>
  )
}

function Component3 () {
  const color = useContext(ColorContext);

  return (
    <>
      <h4>Component3</h4>
      <h2 style={{color: color}}> hello again!</h2>

    </>
  )
};



//using refs
//store a value or relate an element to a ref
//does not trigger a re-render thus will not see the change visually
// Do not overuse refs. You should only use refs for imperative behaviors 
// that you can’t express as props: for example, 
// scrolling to a node, focusing a node, triggering an animation, selecting text, and so on.
// If you can express something as a prop, you should not use a ref.

function App5 () {

  let myRef1 = useRef(0);
  let myRef2 = useRef(null);

  function handleRef1 () {
    myRef1.current = myRef1.current + 1;
    console.log(myRef1.current);
  }

  function handleRef2 () {
    myRef2.current.focus();
  }

  function handleInputValue (e) {
    e.target.value = myRef1.current;
  }


  return (
    <>
      <input type="text" onFocus={handleInputValue} ref={myRef2}/>

      <button onClick={handleRef2}>Focus the input</button>
      <button onClick={handleRef1}>Increase the ref</button>

    </>
  );


};


////passing a ref from a higher component to an input inside
// will take the label prop and the ref also
//there is also useImperativeHandle with the inputRef
//allows to only receive your { focus, scrollIntoView } object instead of the DOM node. 

const MyInput = forwardRef((props, ref) => {

  const {label, ...otherProps} = props;

  // will display the label and also use the ref here for focus
  return (
    <label>
      {label}
      <input {...otherProps} ref={ref} type="text"/>
    </label>
  )

});



function App6 () {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <div>
      {/* a component with ref focus and pass label prop */}
      <MyInput label="Enter your Name" ref={ref} />

      <button onClick={handleClick}>
        Focus
      </button>


    </div>
  )

}




//useMemo, useCallBack
function App7 () {

  let [prodId, setProdId] = useState(0);

  function changeProdId () {
    setProdId(prodId+1);
  }

  //only changes when productId changes
  const handleSubmit = useCallback((orderDetails) => {
    console.log(prodId);
  }, [prodId]);

  useEffect(() => {
    handleSubmit();
  });

  return (
    <>
      <button onClick={changeProdId}>
        Change prodId
      </button>
    </>
  )


}



//using the react router
// # npm i react-router-dom        //will install dependencies 
//react type-check
// npm install --save prop-types

/*type-check*/
// function App8 (props) {

//   const {name} = props;

//   return (
//     <div>
//       <h1>App8 Page</h1>
//       <p>Hello {name}</p>
//       <a href="./Profile1"> Profile1</a>
//       <a href="./Profile2"> Profile2</a>
//     </div>
//   )
// }

// App8.propTypes = {
//   name: PropTypes.number
// }



//Higher order functions
function withStyling (BaseComponent) {
  return function (props) { //returns jsx
    return (
      <BaseComponent {...props} style={{fontWeight: 700, color: "green"}} />
    )
  }
};

function HelloComponent ({name, style}) {
  return (
    <p style={style}>Hello Component: {name}</p>
  )
}

const EnhancedHello = withStyling(HelloComponent);

function App9 () {
  return (
    <EnhancedHello name="World"/>
  )
}


////using cookies

// localStorage.setItem("cookie1", "myCookie");
// var cookieVar = localStorage.getItem("cookie1");
// console.log(cookieVar);

// var cookieVar = localStorage.removeItem("cookie1");


//localStorage, keep a key on the user’s computer and read it out when the user returns.
//sessionStorage, data to be maintained only until the browser window closes.

// can only store strings, so if have an object
// will use JSON.stringify() to store and JSON.parse()to get

// search: using-html5-storage-to-cache-application-interfaces


let myCar = {
      name: "chevy",
      date: "1980",
      color: "black"
};

sessionStorage.setItem("cookie1", JSON.stringify(myCar));
var car = JSON.parse(sessionStorage.getItem("cookie1"));
console.log(car);










export {App, App1, App2, App3, App4, App5, App6, App9};


//take point notes



// const HelloComponent = ({ name, ...otherProps }) => (
//   <div {...otherProps}>Hello {name}!/div>
//  );
 