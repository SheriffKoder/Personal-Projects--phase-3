
//////////////////////////////////////
//Setup
/*

//will use react-router-6
history is another library that will be used with react-router

# npm install history react-router-dom@next


//styled-components library
to be able to write css in isolated and scoped components

# npm i styled-components

//prop-types library
to type check the props sent into components

# npm install --save prop-types



API.js: functions that will handle the api calls to the movie database api
(in the previous course)

config.js: everything that should be setup with the database api
helpers.js: function to convert numbers-to-money/time


//create a .env file in the project root
react has built in support for env variables
but have to name them REACT_NAME
env is not the safest way to store variables, as the keys can still be visible on the client browser ?





*/



//////////////////////////////////////
//Introduction
/*

app.js is the heart of our application
index.js is the start of our application

React.StrictMode, do checks if did some things when writing your application

JSX, javascript xml

use state in a parent component, if you want to use that state
in multiple child components

should never change the prop value in the child component that inherits the props
only change from the parent/source
but can change the state with a setter in the child component

html element text
{switchOnProp ? "On" : "Off"}


Styled-Component library
import styled from "styled-components";
const componentName = styled.div`
    css: ${prop}
`



whats new ?
- createElement instead of returning JSX directly
- styled components


*/


//hour 2
//////////////////////////////////////
//
/*

!cant change the properties of a const object, but can change the object itself


//GlobalStyle
create a new file in the src folder GlobalStyle.js

where we import the globalStyle from style-components
and these global style components will be used in the App.js

define the GlobalStyle css, where it includes the top level css
can nest the h1 inside the body with styled-components

import the function into App.js
and  inject into the div as a component

the div in App.js, wraps our complete application

import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    css
`


//////////////////////////////////////
//Create the header component
>> empty styled components, wrapped style components in index

will use a separate folder for each component
will want to separate our styles into separate files

> create a components folder > Header folder
in the header folder create index.js 

with index.js naming, we can use a shorter import
import TestComponent from "./TestComponent" without specifying the file name

will use styled components inside the component itself
> create Header.styles.js in the headers folder

where will define styled components
then go to the index.js and start working on the header component

> import the svg images and styled-components
> create a Header component with the styled-components wrapped over each other

> import the header component into App.js



//style the header component sub style-components




//////////////////////////////////////
//work on the Home.js (main container)
the main page, 
will be a container component
and will contain different components
for the hero image, search bar, thumbnails..


> create file in components > Home.js
without a folder because it is a container component, without styling
will put each of its sub-components in a folder

> import some things from config.js, fallback image, set some states in the home component, export

> import into App.js (it still has nothing but a div text)




//////////////////////////////////////
//Hooks
95% will use useState, useEffect, useContext Basic Hooks
and then custom hooks and some additional default hooks

useEffect is used for Side effects
for example when we grab data from an API

will use useContext for the login, voting logic

if you set a state in useEffect, that will trigger a re-render
and can cause an infinity loop, so here can use useCallback, useMemo
to not re-create the function/value on each render

will use useRef to set a mutable value that wont trigger a re-render



//////////////////////////////////////
//fetch data from the movie database api into the console (2)

> import the API.js functions
> define a function that will call a function (fetchMovies) from the API
> define a useEffect hook to run this defined function on component initial render
can output movies in console

now the empty Home.js will have the API file imported and a fetch function 
that will be called on useEffect

> want to store the movies variable in the state hook



//////////////////////////////////////
//place the fetch logic in a custom hook (2.1)
to make the component a lot cleaner

> create a new folder src/hooks
> create file useHomeFetch.js

name custom hook files with use and camelCase

> move the fetch logic and related imports from the home component to 
the useHomeFetch.js
and return the states

> import this custom hook into app.js



# now we can have header logo, the movie object consoled using state variable from Home.js


what's new ?
- styled-components lib GlobalStyle
- create header and its sub style components and put into App.js (main)
- style the header sub style-components
- create an empty home component
- add fetching logic to the home component
- move the fetching logic to a custom hook (external file) where it returns its states (2.1)


*/




//hour 3
//////////////////////////////////////
//
/*

//Create the hero image

will grab a background image and text from the database API

> create a folder in components "HeroImage"
and create in it index.js, HeroImage.styles.js

as before, 
> define sub style-components placeholders (i.e empty)
> import into HeroImage>index.js
> create wrapping with them
>> add in the text component h1 and p tags
>> pass to Wrapper and h1, p tags props for image, title and text



what is new ?
- use props on the imported wrapped sub style components in index.js






*/