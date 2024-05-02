

//(02.02) passing a props object, value is given from the render syntax name="SS"
import Welcome from "./components/welcome"; //sub-component //App1
import {BigSpinner, AlbumsGlimmer} from "./components/welcome2"; //App2

import { useState,useEffect } from 'react'; //App1,App2
import { Suspense } from 'react'; //App2
import {useDeferredValue} from 'react'; //App2

import {createContext, useContext} from 'react';  //App3
import {useRef} from 'react';   //App4

import { useMemo } from 'react';  //App5
import { useCallback } from 'react'; //App6


import { forwardRef, useImperativeHandle } from 'react'; //App7


function App1 (props) {

  function myFn () {console.log("Hey")};

  const [index, setIndex] = useState(0);
  function incrementOnClick() {
    console.log(index);
    setIndex((index < 2) ? index + 1 : 0);
    //component will update after setting the state

  }

  useEffect(() => {
    console.log("re-render");
    //cleanup return function
    return (console.log("dismounted effect")); //(componentWillUnmount)
    //no array; run anytime component is updated + after the initial render (componentDidMount + componentDidUpdate)
    //if added an empty array to useEffect parameters 
    //will run on first rendering of the page and not every re-render (componentDidMount)
    //this array can have dependencies, i.e props/states used in useEffect
    //these will cause a first render only then if
    //any of the dependencies change, they will trigger the useEffect hook (componentDidUpdate)
  })



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
        <button>Clicked already</button>
      </div>
    )  
  }
 

}



/*// Day 3 //*/

//useState, suspense/deferredvalue
function App2 () {

  const [name, setName] = useState("default name");
  const [age, setAge] = useState(0);

  function HandleNameChange (e) {
    setName(e.target.value)
  }

  function HandleAgeChange (e) {
    setAge(age+1);
  }

  const name2 = "ss";
  useEffect(() => {
    console.log("re-render");
  })

  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;


  return (
    <>

    {/* //will try the content, if it suspends
    //will try the fallback, if it suspends
    //will display the nearest parent */}
    <Suspense fallback={<BigSpinner/>} >
      <p>a component</p>
      {/* component not have to wait for another component */}
      <Suspense fallback={<AlbumsGlimmer/>}>
        <p>another component (album)</p>
      </Suspense>
    </Suspense>


    {/* using defferedQueryValue */}
    <label>
      Search albums:
      <input value={query} onChange={e => setQuery(e.target.value)} />
    </label>

    <Suspense fallback={<h2>Loading...</h2>}>
      <div style={{ opacity: isStale ? 0.5 : 1 }}>
          {/* <SearchResults query={deferredQuery} /> */}
      </div>
    </Suspense>


    {/* we also have useTransition to prevent already revealed content from hiding */}

    <input
    value={name}
    onChange={HandleNameChange}
    />

    <button
    onClick={HandleAgeChange}
    >
      Increment Age
    </button>

    {/* on start we have a default name and age */}
    <p> Hello, {name}. you are {age}</p>

    </>
  )
}



/*// Day 4 //*/

/*useContext*/
const ColorContext = createContext();
function App3 () {

  const [color, setColor] = useState("red"); 

  function handleColor () {
    setColor("blue");
  }


  return (
    <>
    <button onClick={handleColor}>change color</button>

    <ColorContext.Provider value={color}>
      <h1>{`color is ${color}!`}</h1>
      <Component2/>
    </ColorContext.Provider>
    </>
  
  )

}

function Component2 () {
  return (
    <>
      <h1> Component2 </h1>
      <Component3 />
    </>
  );
}

function Component3 () {

  // React searches the component tree and finds 
  //the closest context provider above for that particular context.
  const color = useContext(ColorContext);

  return (
    <>
      <h1> Component 3</h1>
      <h2 style={{color: color}}> {`hello again!`}</h2>
    </>
  );
}



/* useRef hook*/
function App4 () {

  let myRef = useRef(0);

  function handleRef () {
    myRef.current = myRef.current + 1;
    alert(myRef.current);
  }

  return (
    <>
    <button onClick={handleRef}>HandleRef</button>
    </>
  )
}

function App4_1() {
  //1. create a ref object with initialValue of null
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // 4. `current` points to the mounted text input element
    // 5. Invoke the imperative focus method from the current property
    inputEl.current.focus();
  };

  return (
    <>
      {/* 2. as soon as input is rendered, the element will be saved in the ref object i.e {current: *dom node*}  */}
      <input ref={inputEl} type="text" />
      {/* 3. clicking the button invokes the onButtonClick handler above */}
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
} 




/* useMemo */
function App5 () {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((c) => c + 1);
  };

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 100000; i++) {
      // setCount1((c) => c + 1);
      num += 1;
    }
    return num;
  };

  
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <>
      <button onClick={incrementCount}>+</button>
      <h2>Expensive Calculation</h2>
      <h2>{calculation}</h2>
    </>
  );

}


/* useCallback */
function App6 () {

  let productId = "product id #";

  //only changes when productId changes
  const handleSubmit = useCallback((orderDetails) => {
    console.log(productId);
  }, [productId])

  handleSubmit();

}



/*// Day 5 //*/

/* forwardRef pass refs to components */

//pass App7 ref to MyInput function component with forwardRef
//as a result App7 can access/focus on the myInput <input>
//can pass this function through the MyField the component also 
//or import from outside

//using useImperativeHandle with the inputRef
//allows to only receive your { focus, scrollIntoView } object instead of the DOM node. 

const MyInput = forwardRef((props, ref) => {
  const { label, ...otherProps } = props;

  // const inputRef = useRef(null);
  // useImperativeHandle(ref, () => {
  //   return {
  //     focus() {
  //       inputRef.current.focus();
  //     },
  //     scrollIntoView() {
  //       inputRef.current.scrollIntoView();
  //     },
  //   };
  // }, []);


  return (
    <label>
      {label}
      {/* <input {...otherProps} ref={inputRef} /> */}
      <input {...otherProps} ref={ref} />
    </label>
  );
});

// const MyField = forwardRef(function MyField(props, ref) {


//   return (
//       <MyInput ref={ref} />
//   );
// });



function App7 () {

  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <div>
      {/* <MyField label="Enter your name" ref={ref} /> */}
      <MyInput label="Enter your name" ref={ref} />

      <button onClick={handleClick}>
        Focus
      </button>
    </div>
  );
}







export {App7};
