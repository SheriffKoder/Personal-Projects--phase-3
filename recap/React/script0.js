/*

React
can break down an interface into "reusable components"
to build dynamic user interfaces

most SEO friendly among js libraries


reusable components ex. nav bar
sub components ex search, menu

components are written in a separate file
and imported into the parent component

components can have parent and/or child components



Rendering, returns a set of instructions for creating DOM
Mounting, rendering the first time building the initial DOM from these instructions

Yarn by facebook, more secure than npm

Data flows from root component <App> to children through "props"
that imports child components, which imports other child components


as React uses camelCase property naming
for example class becomes className in JSX, and tabindex becomes tabIndex.

//React DOM ensured you never inject anything not explicity written
in your application, everything is converted to a string before being rendered
// this helps prevent XSS cross-site-scripting attacks

React is a library. It lets you put components together, 
but it doesn’t prescribe how to do routing and data fetching. 

//Redux
the most popular state management system
can be combined with react
purpose: store application's state in a single place
benefit: to prevent having to pass props
through multiple levels of the component tree
recommended for larger applications

https://react-redux.js.org/

*/

//////////setup a react environment manually
/*
///installations
# npm init
# npm i react react-dom
# npm i --save-dev webpack webpack-dev-server webpack-cli // for import/export

//transpile ES6 code into browser friendly code
//babel preset react and babel preset env
//also a loader to compile jsx
//html webpack plugin

# npm i --save-dev babel-core babel-preset-react babel-preset-env babel-loader html-webpack-plugin

*/

///now file setup
/*
////// create and edit webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


//__dirname (current directory), ./dist (directory for bundle file) and its name
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

}

/////////////////////

>> create and edit "./.babelrc"

{
    "presets": ["env", "react"]
}




/////////////////////
//edit package.json

>> scrips > replace test
with 
"start" : webpack-dev-server --mode development --open --hot",
"build" : "webpack --mode production"



>> create src/index.html, index.js
//this is the place for anything related to react application

//import and write code normally

//npm start


//this is a file to use react without un-necessary stuff
//with hot reload

ctrl c to stop
npm run build //will create the bundle file in dist folder

https://www.youtube.com/watch?v=deyxI-6C2u4




*/



//////////////////////////Day1 01/09
/*
//creating a react setup

# npx create-react-app folderName
the created directory will have src/index.js, src/app.js
# npm start

public/index.html, clean the file and put a #root div, compiled to build/index.html
src/index.js the main js file which src/app.js imports to
create a separate folder for other components


###app1
- export a JSX (html+js) element to be rendered from index.js

*/


//////////////////////////Day2 02/09
/*

>> just look from index.js > App.js > welcome.js 
>> run #npm start

components are like js functions
with parameters of props

//pass props
<Avatar person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={100} />
function Profile(props) {   <Avatar {...props} />

//take props (destructure)
function Avatar({ person, size = 100 }) {
or
//take props (normal)
function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}



//pass props 2 (no naming for props)
return <img src={getImageUrl('szV5sdG')}}

//take props 2 (szV5sdG is the imageId)
function getImageUrl(imageId, size = 's') {


//the children prop
<Panel title="About" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)} >
    With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
</Panel>


function Panel({title,children,isActive,onShow}) {
  return (
    <p>{children}</p> //children should be the text "With a population..." ?
  )
}






//used sub-components to minimize/spread the component's code
//used class, use props, use props from index > component > sub-component
//can also destructure the props object
//pass props as an object, pass functions, 
//used useState/index to (increment with clicks)
//used useEffect to (exe something on rendering first or every)
//used if conditions 

hooks: useName

naming conventions
React component names must start with a capital letter, like StatusBar
Hook names must start with use followed by a capital letter, like useState

call hooks wether custom/generic 
outside of other hooks
top level
not nested in another function call, if statement, for loop
and use the useEffect inside the useHttp to not load every time


components must be "pure" functions
i.e return value based on input and not change something from outside
same output when the same inputs are passed


> state/useEffect, allows components to change output
over time in response to user actions, network responses etc.
without violating the "pure function" rule
and tells react that this component and its children
//need to be re-rendered with the updated state


what is new ?
- useState  (allow to change values)
- useEffect (function exe on every re-render of its parent component)

//two used variations of useEffect with differences in timing
useEffect; fired after first render and paint
useLayoutEffect; fires before the browser has chance to paint the screen
useInsertionEffect; fires before React makes changes to the DOM

can add many useEffects like useState ?



//true && expression always evaluates to expression, and 
//false && expression always evaluates to false.

return (
        {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
)



*/



//////////////////////////Day3 03/09
/*

can only pass 1 module to index.js ?

useEffect should be preferred to communicate with an external source
Lifecycles add complexity, Don’t use them unless you must.
They’re to be used in special cases, when other fallbacks 
like rearranging your components or moving your state around 
won’t work.

Lifecycles will not be double-invoked in production mode.

useReducer is very similar to useState, 
but it lets you move the state update logic from event handlers 
into a single function outside of your component.


What was added new ?
= suspense
- useDeferredValue (not practiced)
- useTransition (not practiced)
- class lifecycles (left out)


*/

//////////////////////////Day4 04/09
/*

You can also define your own custom Hooks as JavaScript functions.


//useContext hook //App3
lets a component receive information from distant parents 
without passing it as props.



//Ref hook  //App4
lets a component hold some information, most often a DOM node
used for logic not rendering
updating/changing a ref does not re-render your component

the ref object remains the same all through the lifetime of the component, 


What was added new ?
- context
- ref
- useMemo, useCallBack (for optimization, can do without them)
- custom hook, i.e a custom function returns a value
- useReducer (similar to useState for bug optimization)



/*////////////////////////////////////////////////////////////////////*/

//Optimization
/*
// If your interactions are fast enough, you don’t need memoization.

//useMemo, useCallBack hooks (optimization hooks)

useMemo, allows to call a function on first rendering
that uses expensive calculation
and store/cache these calculated values
for every re-render, overlaps setState

this cause the expensive function to only run when needed
i.e when the memo dependency changes
and not on every re-render

tell react to reuse a cached calculation or skip a re-render
of data that has not changed since the previous render

With an empty array, it only runs on mount.




//useCallback; like memo but to cache functions
lets you cache a function definition between re-renders 
or before passing it down to an optimized component



//custom hook
Custom Hooks let you share stateful logic but not state itself. Each call to a Hook is completely independent 
from every other call to the same Hook.

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return isOnline;
}



sometimes the screen needs to update and can't skip re-rendering
separate blocking updates that must be synchronous

    To prioritize rendering, use one of these Hooks:
    useTransition; lets you mark a state transition as non-blocking and allow other updates to interrupt it.
    useDeferredValue; lets you defer updating a non-critical part of the UI and let other parts update first.

    other hooks useful to library authors
    useDebugValue lets you customize the label React DevTools displays for your custom Hook.
    useId lets a component associate a unique ID with itself. Typically used with accessibility APIs.
    useSyncExternalStore lets a component subscribe to an external store.

*/

/*////////////////////////////////////////////////////////////////////*/
//useReducer
/*

the "reducer" concept
put all the state update logic inside a single function
and 
convert from useState to useReducer
Replace useState with useReducer.

when to favor useReducer over useState
when have a complex state logic that utilizes multiple sub-values
or when a state depends on the previous one

whenever you attempt to update state managed via useReducer i.e calling dispatch
the current state value and the action argument passed to dispatch
are passed on to the reducer


// method 1: two arguments 
useReducer(reducer, initialState)

// method 2: three arguments 
useReducer(reducer, initialArgument, init) 

init is a function that returns the initial state
the initial state will be set 
to init(initialState), i.e., the function will be invoked 
with the second argument, initialArgument.

//We recommend using a reducer if you often encounter bugs 


const reducer = (state, action) => {
   // check action type  
   switch (action.type) {
    case "increase":
     //return new state
      return state * 10;
    default:
      return state;
  } 
}


export default function App() {
  const [width, dispatch] = useReducer(reducer, 50);

  // you update state by calling dispatch
  const increaseWidth = () => dispatch({ type: "increase" });

    return (
    <button style={{ width }} onClick={increaseWidth}>
      I grow
    </button>
  );
}



function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
        ...
    }
}


export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }


  return (
    <>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );

}





*/


//////////////////////////Day5 06/09
/*

what new ?
forwardRef and useImperativeValue (to forward refs to sub-components / limit parent access)
Routing (needs revision)
Type-checking

-- forwardRef
To forward the ref object to a child component, 


-- useImperativeValue 
allows this forwarding/exposing of the DOM element to the parent
to be limited to specific data

Do not overuse refs. You should only use refs for imperative behaviors 
that you can’t express as props: for example, 
scrolling to a node, focusing a node, triggering an animation, selecting text, and so on.

If you can express something as a prop, you should not use a ref.


-- useDebugValue (extra)
can be added to a custom hook, to have a label in React Dev tools
*/

//////////////////////////////////////

//Working now in App3


/* Routing */
/*
setup a reliable routing system
once the application has multiple pages
to handle a component or page should be rendered 
when navigating to a certain route


//Client-Side Routing 
route handling
helps in building single-page applications without refreshing

allows your app to update the URL 
from a link click without making another request or fetch the API
and re-evaluate CSS and JavaScript assets for the next page. 
from another document from the server
and render a new UI


////How to apply:

//library: react-router-dom
we can specify which component can be rendered based on the route


# npm i react-router-dom        //will install dependencies 

create:
src/Profile.js
src/components/RouteSwitch.js


code Profile.js and App.js (two components)
code RouteSwitch
import and render the RouteSwitch index.js



<Route path="users/:userId" component={UserProfile} />
React Router will pass the value for :userId as a prop 
to the UserProfile. This props is accessed as 
this.props.params.userId inside UserProfile.


Issues:
ok can press the links and go to urls
but the page refreshes still ? router not working ?
but it is used in index to attach to html

second, nesting routes with <Router> instead of <Routes> wrapper
*/


/* type-checking*/
/*

//continue Odin5-4.js for testing



type-checking:
typescript, Flow for static type checking
PropTypes, built-in React typechecking


# npm install --save prop-types
//capital
import PropTypes from 'prop-types';



when an invalid value is provided for a prop
a warning will be shown in the browser console
only checked in development mode


//small case then capital
Greeting.propTypes = {
  name: PropTypes.string
};


// Specifies the default values for props:
Greeting.defaultProps = {
  name: 'Stranger'
};








*/



//////////////////////////Day6 07/09
/*


const HelloComponent = ({ name, ...otherProps }) => (
 <div {...otherProps}>Hello {name}!/div>
);

- can use higher order functions to generate and not repeat css in amazon

*/




////Higher-order Components
/*
normal components transforms props into UI
higher order components consume another component and
return a new component
pure function. It has no side effects, returning only a new component.


//example
function WithLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Hold on, fetching data might take some time.</p>;
  };
}
export default WithLoading;


//in app.js
const ListWithLoading = WithLoading(List);

return (
    <ListWithLoading
    isLoading={this.state.loading}
    repos={this.state.repos}
    />
);



//example
const withStyling = (BaseComponent) => (props) => (
  <BaseComponent {...props} style={{ fontWeight: 700, color: 'green' }} />
);

//withStyling takes a component
//withStyling returns a function 
//this function in itself returns a component with style
function withStyling (BaseComponent) {
    return function (props) {
        return (
              <BaseComponent {...props} style={{ fontWeight: 700, color: 'green' }} />
        )
    }
}

function HelloComponent ({name, style}) {
  return (
    <p style={style}>Hello Component: {name}</p>
  )
}

//HelloComponent returns a div JSX and uses {name} prop
const EnhancedHello = withStyling(HelloComponent);
<EnhancedHello name='World' />

//check line 1084 in Odin5-4.js

*/



////using cookies
/*
localStorage.setItem("cookie1", "myCookie");
var cookieVar = localStorage.getItem("cookie1");
console.log(cookieVar);

var cookieVar = localStorage.removeItem("cookie1");


//localStorage, keep a key on the user’s computer and read it out when the user returns.
//sessionStorage, data to be maintained only until the browser window closes.

can only store strings, so if have an object
will use JSON.stringify() to store and JSON.parse()to get

let myCar = {
      name: "chevy",
      date: "1980",
      color: "black"
};

localStorage.setItem("cookie1", JSON.stringify(myCar));
var car = JSON.parse(localStorage.getItem("cookie1"));
console.log(car);

can be removed from browser: Preferences → Advanced → Storage

storing the entire HTML or as clever as maintaining an object with the state of all of your widgets


search: using-html5-storage-to-cache-application-interfaces



*/












//useful examples and patterns

// showChild &&
// showInput &&

/*

      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? 'dark' : 'light'}
      />




const useAwake = () => {
    const [state, setState] = useState(false);
    
    useDebugValue(state ? "Awake" : "Not awake");

    const toggleState = () => setState((v) => !v);

    return [state, toggleState];

};

//A glorified toggle Hook. Let’s go ahead and use this custom Hook:

export default function App() {
  const [isAwake, toggleAwake] = useAwake();

  return (
    <div className="App">
      <h1>isAwake: {isAwake.toString()} </h1>
      <button onClick={toggleAwake}>Toggle awake!</button>
    </div>
  );
}



////Helpful patterns
//returns full constructed link by passing the place name
//data.js
export const places = [{
  id: 0,
  name: 'Bo-Kaap in Cape Town, South Africa',
  description: 'The tradition of choosing bright colors for houses began in the late 20th century.',
  imageId: 'K9HVAGH'
}, {
  id: 1, 
  name: 'Rainbow Village in Taichung, Taiwan',
  description: 'To save the houses from demolition, Huang Yung-Fu, a local resident, painted all 1,200 of them in 1924.',
  imageId: '9EAYZrt'
},..cont..

//utils.js
export function getImageUrl(place) {
  return (
    'https://i.imgur.com/' +
    place.imageId +
    'l.jpg'
  );
}


//context.js
import { createContext } from 'react';
export const ImageSizeContext = createContext(500);



//check example Oding5-4.js line 792




*/





