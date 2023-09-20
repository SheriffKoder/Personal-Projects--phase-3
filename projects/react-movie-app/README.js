
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


//Use PropTypes

//hour 2
////////////////////////////////////////////////////////////////////////////
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
= create header and its sub style components and put into App.js (main)
= style the header sub style-components
- when styling a style-component, can nest its children in the css and give them media query
= create an empty Home component (main)
= add fetching logic to the home component
= move the fetching logic to a custom hook (external file) where it returns its states (2.1)


*/




//hour 3
////////////////////////////////////////////////////////////////////////////
//
/*


//////////////////////////////////////
//Create the hero image component and pass props to it

will grab a background image and text from the database API

> create a folder in components "HeroImage"
and create in it index.js, HeroImage.styles.js

as before, 
> define sub style-components placeholders (i.e empty)
> import into HeroImage>index.js
> create wrapping with them
>> add in the text component h1 and p tags
>> pass to Wrapper and h1, p tags props for image, title and text

>> import and return the HeroImage component in Home.js
>> wrap HeroImage in Home.js with return, return null if no first result
>> pass props as needed in the component from the results array


//style the hero image component

now as we have the component ready, it needs some sub styles-components styling



//////////////////////////////////////
//the thumbnail grid (organizer container)

will skip the search bar for now, and work on the thumbnail grid

> create components > Grid folder
> create index.js and Grid.styles.js
> add sub components style placeholder (empty)
> import in index.js the sub style components
> create a Grid component and wrap the sub style components
> pass props to the sub components in the Grid component
    > a header and the "children" props

> import into Home.js
> add to the return block
>> in a div will map the state.results to get each title
>> this will be the children property

the console warns that each child in a list should have a unique key prop
as react uses this internally to diff stuff and optimize itself
>> so will give to the div an attribute of key={movie.id}
or can use a random number


//styling the grid
now we have the movie titles after each other on the page
so we have our grid, time to style it
go to Grid.styles.css to add paddings and the grid


//////////////////////////////////////
//adding the thumbnails

> create components > Thumb folder
> create index.js, Thumb.styles.js
> add sub components style placeholder (empty)
> import in index.js the sub style components
> put in a Thumb component div, 
> pass to the thumb component, props of image, movieId, clickable
to use as img src

> import Thumb component into Home.js
> we will replace this Thumb component with the movie.title in the map method
    and pass the needed props

//styling the thumbnails
add entering animation opacity


//////////////////////////////////////
//Spinner

> create components > Spinner folder
> create index.js, Spinner.styles.js
> add sub components style placeholder (empty)
> import in index.js the sub style components
> will not put in a Spinner component div, will just export it right away

//add styling to the spinner
> place at the bottom of the return block in Home.js for now

//will make the spinner only appear when fetching from the api later


////////////////////////////////////////////////////////////////////////////
//create Search bar

will type a movie name and display results

> create components > SearchBar folder
> create index.js, SearchBar.styles.js
> add sub components style placeholder (empty)
> import in index.js the sub style components, searchIcon image, React hooks

> in a SearchBar component, return the styled sub components wrapped
with img, input tags

> import and put in Home.js 

//////////////////////////////////////
//Search bar functionality

will make it a controlled component
a component that react controls
the input value is going to be based on a state that we create
and when this state changes, will also change the value in the input box
using onChange setState and value={state}

the state in sync with the actual value in the input field


////Search bar functionality 2

now we want to do something with this state value of the input
go to useHomeFetch.js 
> define a state constant
> export with the hook function
> import in Home.js
> pass this import to the SearchBar component as a prop

when this state triggers what this will do is 
change the state in the hook function (upwards?) passed down to the component to be changed
and use it in the fetched results (display specific results?)


//we also want a delay before displaying the results
this is why we have dual states (in SearchBar index and in useHomeFetch)
> for that will use the useEffect timer **

> now go to the useHomeFetch
console searchTerm, will find the entered input text


//we also want to trigger this useEffect when the user types something in
not on the initial render
> for that will use the useRef in the SearchBar index
which we can mutate (set value directly)

//////////////////////////////////////
////Styling the SearchBar


////////////////////////////////////////////////////////////////////////////
//Logic





# vscode-styles-components plugin








what is new ?
= create the hero image component, sub components
= use props on the imported wrapped sub style components in index.js
= pass these props from the Home.js and use them in the styles.component file
= create the thumbnail grid component
- children property, takes all nested inside the component in Home.js as a property
- use map on the state.results to return an array of movie.titles
= create thumbnail images Thumb component to be placed in the mapped grid
- can use nested &:hover { } into a styled-component directly
= create the spinner component
= create the search bar component
= work on the search bar functionality to take the input to the custom hook (to filter results later)



*/



////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//Part2

//hour 4
////////////////////////////////////////////////////////////////////////////
//
/*

//////////////////////////////////////
//////////////////////////////////////
//Search Bar Logic


in useHomeFetch.js
we want to trigger the useEffect not only on mount
but also when the user searches for something

we have the searchTerm state, will use that as the trigger

clear the previous search state

in Home.js
remove the hero image on search
in the return

change the grid header to Search result if there is a searchTerm

!! now the search bar displays the search movies grid



//////////////////////////////////////
//////////////////////////////////////
//Load more button


> create components > Button folder
> create index.js and Button.styles.js
> add sub components style placeholder (empty)
> import in index.js the sub style components
> wrap the styled component in a Button const with props of text, onClick callback

> import the index export into home.js
> put conditionally below the grid and spinner with a prop of text="load more"

will use the short circuit &&
to load the spinner when loading
when not loading and not last page display the button

//style the button styled component


//Logic for the Button
go to the "useHomeFetch"
add a new state, will act as a true/false flag when we click on a button
and then will trigger a useEffect
export state

import state in "Home.js"
add to the button in Home.js a callback to change this state to true

back to the "useHomeFetch"
will add another useEffect

Pro tip: you should have one combined hook for the initial fetch and search
not one for each

!! now we press the button, the loading spinner activates then displays next movie page
?? the previous page disappears ?



//////////////////////////////////////
//////////////////////////////////////
//Routing

React Router v6
https://reacttraining.com/blog/react-router-v6-pre

> create in the components folder
NotFound.js, Movie.js

> define a component that just return a div and export

> go to App.js and import some router library modules
> also import the NotFound.js, Movie.js
> create a router structure

> go to the header component index.js
> import the link module from react-router-rom
> wrap the logo in a link component

> go to the Thumb component index.js
> import the link module from react-router-rom
> wrap the image in a link component inside a clickable ternary operator

//now when we click on a thumbnail, we will go to a url /movie.id


//////////////////////////////////////
//////////////////////////////////////
//work on the movie page component
> in the movie.js import the configs, grid and spinner components, NoImage image


//fetch the data from the API so we can have something to work with
> create in the Hook folder useMovieFetch.js
here we put the function inside the useEffect, if we put it outside
we will need to put it as a dependency and also wrap it in a useCallback
(as useEffect will create the function on every re-render and get into an infinity loop and also put the movieId as dependency in the useCallback)
> import into movie.js
> get the states from the hook using destructuring

! rename from destructure, state to be named movie
const {state: movie, loading, error } = useMovieFetch(movieId);

>> we want the movieId as it is provided from the router
> import useParams in Movie.js


//////////////////////////////////////
//add the breadcrumb component to the movie component

> add a components > BreadCrumb folder
create index and BreadCrumb.styles.js
> add the empty styled components in the BreadCrumb.styles
> import in index.js the styled components
> create in index.js BreadCrumb component and wrap these components
> import router link and add to the BreadCrumb component

> go to the movie component
> import the BreadCrumb component
> add the if loading and if error to return the spinner component or a div
> in the return, return the breadcrumb instead of the text div

//style the breadcrumb





What is new ?
= work on the load more button
= Routing with React-Router v6
- import { BrowserRouter as Router } lets change name to use with
- Routing Link module
= work on the movie page component
= work on the movie page (breadcrumb) component



*/






//>hour 5
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//
/*


//////////////////////////////////////
//work on the Movie component > Movie info component

> create folder in components named MovieInfo
> create Index.js and MovieInfo.styles.js

> MovieInfo.styles.js empty styled components
> in index.js import configs, image, styled-components
and the previously made thumb component (component reuse)

> import into movie.js
> add in movie.js below the BreadCrumb
> back to MovieInfo index.js, add the text component and put some JSX that displays properties from the movie prop
{movie.directors.map(director => (

//style the MovieInfo.styles components


//////////////////////////////////////
//work on the Movie component > Movie info bar component

> create folder in components named MovieInfoBar
> create Index.js and MovieInfoBar.styles.js

> MovieInfoBar.styles.js empty styled components
> in index.js import styled-components
> in index.js import some of the helper functions
> in index.js add the component and wrap the styled-components
> put in the styled components some jsx divs that calls the helper functions
> the helper functions takes arguments from the component props

> to the Movie.js file
> import the MovieInfoBar index.js
> add the MovieInfoBar below the MovieInfo component in return
> pass the time/budget/revenue props from the movie state

//style the MovieInfoBar.styles components


//////////////////////////////////////
//Work on the actors grid for the movie page

> create folder in components named Actor
> create Index.js and Actor.styles.js

> Actor.styles.js empty styled components
> in index.js import styled-components
> in index.js add the component and wrap the styled-components
> add jsx image, h3, p tags that takes props as children and attr values

> to the Movie.js file
> import the Actor index.js
> add the Actor below the MovieInfoBar in a Grid component in the return
> pass the props from the movie state

//style the Actor.styles components


what is new ?
- component reuse (allow to reuse components with just changing their passing props)
- use JSX elements and give classNames, classNames to be defined in the styled component and nest in them html elements
= Movie info
= Movie info bar
= Movie info Actors


*/




//>hour 5.1 (cont)
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//Deploy, refactor to class
/*


////////////////////////////////////////////////////////////////////////////
//Prop Types

can be used to type check the props you send into components
can use if not using Typescript
a tool to use when in development mode

Capitalized when importing and using on a prop.type
but on a component, is lowercase


check the docs for options:
https://www.npmjs.com/package/prop-types

//can define inside an object
ObjectProp: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
}),

//Using propTypes

will start with the actor component and all the way down through the components

> Actor index.js
> BreadCrumb index.js
> Button index.js

import PropTypes from "prop-types";

componentName.propTypes = {
    propName: PropTypes.type
}

types: string, func, object, bool

do not need to check on the children property as it is a built in prop


////////////////////////////////////////////////////////////////////////////
//How to Persist state in the session storage

until this point, we always fetch from the API
even when we go back to the same page

in the browser we have local storage(until delete) and session storage(until browser close)
we will utilize the session storage to store the data we already retrieved

Dev tools > Application 

will use the session storage, as the movie list, details continuously changes or can change

will create a function we can use to read from the session storage

//Read a Session (main page)
> go to Helpers.js
> define isPersistedState which returns the requested session storage as a string
> go to useHomeFetch.js
there we will check if we have a session state and we are not in search, before we retrieve anything from the API
in the useEffect, to retrieve the session instead of fetching

//Write to the Session (main page)
> go to useHomeFetch.js
> below the second useEffect will write a third useEffect
which activates on searchTerm and state (i.e movies fetched)
and writes to the session in JSON the state (movies fetched)


//for each individual movie
> go to useMovieFetch.js






*/


//>hour 6
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//
/*

////////////////////////////////////////////////////////////////////////////
//Deploying the Application

once done with the project, run in the terminal
# npm run build

will now have a build folder in our project

to make the routing work properly when deploying
> create inside the build folder  the file "_redirects"
and just put /* /index.html 200

Method1: drop
> drop the build folder inside the website

Method2: netlify cli:
//install the CLI

# npm install netlify-cli -g
# netlify deploy

you will be given options
and then will have a website draft url
then to deploy
# netlify deploy --prod
set publish directory to ./build

////////////////////////////////////////////////////////////////////////////
//Deploy with continuous deployment Netlify&Github

when push to github it is going to be deployed automatically

> move the _redirects ot the public folder

build command: npm run build
publish directory: build/
show advanced > new variable
to add the .env variables
Deploy


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//Refactoring to class components

will create class components from the SearchBar, Home, Movie
components as they include states

>> go to searchBar > index.js 

> import Component from react
> change the function header to class extends
> will have a one state component
> we do also have the three Lifecycle methods: componentDidMount, componentDidUpdate, componentWillUnmount
set the componentDidUpdate
move the logic (timer) from useEffect to the componentDidUpdate
> put the return jsx in a render method, change the syntax of the props


>> go to Home.js

> remove the hook, import the API
> import the component module from react
> change the function header to class extends
> copy the initial state object from the useHomeFetch Hook
> copy the fetchMovies function from the useHomeFetch
    > setState, move the movies and results into movies object in the other setState and change loading: false
> define the handleSearch, handleLoadMore
> put the return jsx in a render method, change the syntax of the props
    > destructure some things from state, change state.results to movies.results
> add component did mount


>> go to Movie.js

the functionality of react router has been removed from the class component
so before exporting will work on MovieWithParams const

> remove the hook, import the API
> change the function header to class extends
> move the return into a render method
> add states
> from the movie fetchHook copy the fetchMovie function
> in the fetchMovie do variable name formatting to set state the correct way
    define states this.state instead of state
> add componentDidMount




*/



//>hour 6.1
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//Typescript
/*

an extension to js, adds types to js
gives types and strictness
lets write a more error prone code


//Setup
> create a new react app with typescript support
# npx create-react-app my-app --template typescript

> install the styled components and its types
npm i styled-components @types/styled-components

> install react router and its types
npm i history react-router-dom @types/react-router-dom

//Copy files
> in ./src
just keep the index.tsx and react-app-env.tx
copy all the filed from the original project except the index.js
copy the .env / .gitignore

//
> comment out the un needed lines in src/index.tsx

the create-react-app with typescript bootstraps the project with configurations in tsconfig.json


////////////////////////////////////////////////////////////////////////////
//Refactoring

rename the .js files in ./src to .ts
but App.js to App.tsx because we are using jsx

>> we will start working on the API.ts
- can export the types to use them in another files like Movies type
always export your types, you never know when you need them

//with TS installed, just name the file and add the : types, no imports for TS

//(TS) prop types, return a promise of type Movies we will create
fetchMovie: async (movieId: number): Promise<Movie> => {
export const calcTime = (time: number) : string => {

//Movie will be a defined type, results an array of elements of type type Movie
export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number
  
};

if all the properties in a type are same type

export type Cast = {
    //property of string will be type of string
  [property: string]: string;

}


>> App.tsx

to ignore a line-warning in .ts file, type in the line before it
// @ts-ignore

//component of type react functional component
const App: React.FC = () => (


>> config.ts

//if have more than one value
const API_KEY : string | undefined

>> helpers.ts

/////////////////////////////////////
//working on components (of Home component)
only need for index.tsx to set React.FC and if there is props define a type


>> hooks > useHomefetch.ts
import the {Movie} type from API

searchTerm = " " as a function parameter no need to specify a type

//results is an empty array but should be interpreted as a Movie array
    results: [] as Movie[],


>> components / Home.tsx

>> Button index.tsx

//callback is a function that does not return anything
type Props = {
    text: string;
    callback: () => void;
    children: React.ReactNode;
}

//react function component with props of type Props
//define what the prop object will look like
const Button: React.FC<Props> = ({ text, callback }) => (


>> Header index.tsx
//do not need types in style files
unless using a prop var, define a type and 
export const Wrapper = styled.div<Props>`

>> SearchBar index.tsx

//this is a callback but what is the type ?
//if we hovered on the setSearchTerm in Home.tsx we will get its type
type Props = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

/////////////////////////////////////
//working on components (of Movie component and NotFound)

>> Movie.tsx
just add the React.FC, then it complains about variables
to fix that go to the hook which imports them useMovieFetch

//gets a string of movieid from the hook so convert it to a number
const {state: movie, loading, error } = useMovieFetch(Number(movieId));


>> useMovieFetch.ts
import API, {Movie, Cast, Crew} from "../API";


//create a type object with movie type and merge the actors and directors into this new type
export type MovieState = Movie & { actors: Cast[], directors: Crew[]};

// const [state, setState] = useState<MovieState | {}>({});
const [state, setState] = useState<MovieState>({} as MovieState);

const sessionState = isPersistedState(movieId.toString())


//////Components

>> Actor
>> BreadCrumb
>> MovieInfo
    <Thumb error Property 'movieId' is missing in type '{ image: string; clickable: false; }' but required in type 'Props'.ts(2741)
    as we are not providing movieId for it, so go to Thumb index.js
    set movieid to optional
    movieId?: number;
    styles has export const Wrapper = styled.div<Props>`
>> MovieInfoBar




*/
