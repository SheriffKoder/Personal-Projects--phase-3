/*

i just want to build a company profile using react next.js
then i can use it with a node API
then also make a portfolio with it



// NextJS Introduction

next js simplifies the dev process
and optimizes web apps

the primary diff between react and next is how they handle rendering
next js work on server side rendering

## feature 1 
client side rendering (react)
the server sends to the client the html/js files to render on the browser

server side rendering (next)
rendering the webpage on the server then sends back the fully rendered html to the browser
enabling immediate display

this leads to easy crawling and indexing leading to improved SEO
- increased organic traffic
- enhanced user experience
- credibility and trustworthiness
- competitive advantage
- online presence

## feature 2
routing
uses a file based routing system, routing handled by the file system
each folder in the route directory becomes a route
and the folder's name becomes the route's path localhost:3000/about

## feature 3
ability to create fullstack applications
API routes feature
serverless function to handle api requests
to create API endpoints without the need for a traditional server

allows to build and deploy APIs 
- without managing server infrastructure
- worrying about scaling their server as traffic increases
with creating a route.js in a component's folder
with corresponds directly to that API end point

react + express + webpack to Next js
full stack capabilities optimization to reduce code and increase speed
by removing dependencies and improving hot module reloading speed

## feature 4
automatic code splitting
a technique that breaks down large bundles of js code into smaller more manageable chunks
that can be "loaded when needed"

to slit pages into separate chunks
only the code required for that page is loaded

a framework that would take care of most of the process automatically
to focus on the actual code

## feature 5
it is still just react



///////////////////////////////////////////////////////////////////////////////

//NextJS file and folder structure

//app > layout.js
all the components are wrapped within the app > layout.js
allows to use a common layout/template to all of the pages
all the components of this file will be shared with the entire application

import components nav and footer

export default function Layout({children}) {
    return (
        <>
        <NavBar />
        <main>{children}</main>
        <Footer />
        </>
    )
}

also modify the metadata, lang for all pages

//app > page.js
the main page /

//app > globals.css
components can be rendered by either the client OR the server
in the app folder are the react server components

////////////////////////
to turn the page.js to a client directive add at the top "use client";
whenever using hooks like useState, useEffect etc. you should turn into a client component
state management etc. 
interactivity and event listeners onClick(), onChange()
browser only APIs
custom hooks that depend on state, effects, browser only APIs
react class components


////////////////////////
creating a route (ex react-routing)

create app > user > page.js
place in page.js a react component
now when visiting /user will display that component's returned jsx

to create a nested route
like url posts/new
will create a nested folder

all folders can have the file page.js
or "layout.js" file if want to reuse this file component within the folder's sub-folder
shared and unique loader for that directory "loader.js" file

a loader can be a return <LoadingSkeleton /> //an example of the page while it loads or a general spinner

app > posts > page.js & newPost 
                        newPost > page.js

////////////////////////
dynamic routing
having a flexible system for creating website pages based on different variables or data
on the fly

url posts/:postId as posts/post-1 etc.
app > posts > page.js & [postId] //in brackets
[postId] > page.js

#### rafce

now when having a component in the page.js
we can have access to that dynamic postId variable as {postId} (like params in node)
to dynamically render and show special data

!! simpler than react look into the react routing screenshot

////////////////////////
handling errors
it is essential to handle the errors gracefully by catching them
and then presenting meaningful error messages to the client side

to do that, create an error.js file in the folder
that will run when the error happens and gracefully present the error to the user
there is a typical error file structure
that is use client (to be able to access client errors)
that has a text then a button onClick={() => reset()} //to get the user back to where they where before the error



app > posts 
error.js >  error fallback
layout.js > shared layout between here and sub
loading.js > shared spinner etc.
page.js > page components




////////////////////////////////////////////////

Data fetching
three choices how to fetch data

1. Server Side Rendering (SSR):
Dynamic server rendered data
each request to the server triggers a new render cycle and data fetch
ensuring that the content is always up to date

with cache: 'no-store' 
says do not store it, will use the data variable to access data.title .body

2. Static side Generation (SSG):
only difference, there is no cache no-store
so it will cache the data, used for content that does not change frequently like blog posts

3. Incremental Static generation (ISR)
use {next: {revalidate: 10}} instead of cache: 'no-store'
combines the benefits of SSR and SSG for dynamic contents in static sites
you can specify that certain data to be statically fetched at build time
while defining a revalidation time interval (to refresh after a certain time)




async function Page ({params}) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`,
        {cache: 'no-store'}
    )
}
const data = await res.json();

return (
    <h1> {data.title} </h1>
)


////////////////////////////////////////////////
serverless-route handlers

next js allows applications to be full-stack
using the application both on the front end and backend

simple GET request route using express js server

//normally we would in express
require express
app.get(url, middleware)
    const users
    res.json(users);
app.listen

//but in next js
export async function GET(request) {
    const users..

    return new Response(JSON.stringify(users));
}
not need for any more express js configurations
next js will handle these details 



next js covers all the features of backend servers
middleware, parsing, authentication checks, serverless functions (that simplifies functions in scaling api routes)

//ways to define a route handler

1. create file based route handlers
within the api folder in the app directory
App > api > route handler

2. a route handler within the app directory itself
by adding a route.js file in the app folder
but cannot have a route.js next to a page.js
the folder has to be a regular front-end page or a backend route

so it is recommended to stick to method 1
and keep all the backend related logic within the api folder

app
> api 
    users
        route.js > acts as an api backend route
                > accessed http://localhost:3000/api/users
> posts 
    [postId]
    error.js >  error fallback
    layout.js > shared layout between here and sub
    loading.js > shared spinner etc.
    page.js > page components
    newPostPageFolder
        ..
        ..
    

next js supports GET POST PUT PATCH DELETE HEAD OPTIONS, http methods

inside the route.js file

export async function GET(request) {
    return new Response("Hello Next.js!");
}


////////////////////////////////////////////////
how to improve the SEO of the next js applications

next js has the Metadata API 
with two new ways, static and dynamic
to export a special object called metadata

in page.js 
export const metadata = {   //static
    title: "Home",
}

//which outputs like : <head> <title>Home </title> </head>

export async function generateMetadata({params, searchParams}) { //dynamic metadata, get params like /prodId
    const product = await getProduct(params.id);    //call the get product function
    return {title: product.title}   //get the title for that specific product as a page title
}



export default function Page() {
    return (
        <h1> ... </h1>
    )
}



////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

the project

////////////////////////////////////////////////
setup

Promptopia
full-stack next js 13 crud application 

an open source AI promoting tool for modern world 
to search all the prompts can be used in ChatGPT

we can login using nextAuth and google authentication
once logged in, can browse the available prompts
to search with tags, username, prompt content

can view prompts, and users
if the creator can edit and delete prompts

## npx create-next-app@latest ./    // ./ to make sure will create in this directory
will ask for import alias, shortcuts that allow to refer at a module or a file
with its name instead of its full path (Yes)

## npm install bcrypt mongodb mongoose next-auth

>> delete the app folder from the directory, we will start from scratch
delete the public folder as we will use our custom public folder

and then create a new empty 'app' folder
and components, models(for mongoose models), public, styles, utils(for utility functions we will use throughout our application)
.env
in the root directory

// from the GitHub Gist zip
copy the tailwind config to the root directory
copy the code in the globals.css to styles > globals.css

// from the Zipped Assets
copy the icons and images folders into the public folder


//download extension ES7+ to use rafce abbr



////////////////////////////////////////////////
starting


//01
// create a page > page.jsx
and create a component

// create a layout.jsx
//import styles
//define metadata
//define the layout component


//go to jsconfig.json
change "@/*" to "@*" to take files from the root


// run # npm run dev


//work on the app > page.jsx


//01.02
//add file structure for all components will be using throughout the project
create a components > feed.jsx 
where we will share all the prompts 
also components > forms.jsx, components > nav.jsx, profile, promptCard, provider

//import and use the Feed into app > page.jsx

//import and use the navigation app > layout.jsx
because we want to reuse it in all pages
import Provider.jsx

////////////////////////////////////////////////
//01.03
working on the nav
import link, to allow us to move to other pages of our application
import Image, to allow auto optimization of images
import the useState and useEffect
import from next-auth/react
    signIn
    signOut
    useSession
    getProviders

start working on the nav structure
logo, navigation "Links with Images" and buttons

//01.04
want to have a button to sign in, 
to do that we have to use Providers
we have imported getProviders but not yet initialized them

//set providers
//work on the button
//with isUserLoggedIn set to false, 
we are trying to fetch the providers but they are not actually there yet/configured 
that is why we do not see the button
we will do this later on when we fully setup the next-auth


//01.05
//work on the mobile navigation logo
now we need this button to open up a menu

will use the useState on toggleDropdown
setToggle onClick

on react changing the state directly can lead to un expected behaviors
so will use a call back that changes the state ()=> setState(true) etc



////////////////////////////////////////////////
//next step is to make the authentication work
using google next-auth and then be able to show their profile photo

//02.01
open the components > provider.jsx

as the Provider component is a higher component (returns components)
go to the app > layout.jsx
and wrap everything in the body inside the Provider component

next-auth does not only use the front-end files within the app for authentication (app folder)
uses the next-js api backend endpoints as well

//02.02
>> create app > api > auth > [...nextauth] > route.js
an api route within api
auth
dynamic nextauth
then we have the route

within the route.js
we can set our providers for google authentication

go to the route.js
leave the clientId, clientSecret empty strings for now
define an empty session and signIn functions


go to console.cloud.google.com
create a new project
promptopia-1123
select it from the dropdown

click the side navigation
API & services
OAuth consent screen
Create, enter app name, email, Authorized domain to http://localhost:3001, developer email



API & services
credentials
create credentials
OAuth client id
type: web application
authorized js origins and redirect urls: http://localhost:3001
create,
can see now our client id and secret
place in the .env
GOOGLE_ID
GOOGLE_CLIENT_SECRET

place these process.env's in the api > ... > route.js

now we can see these keys when consoled

/////////////////////////
the development of the nextAuth route
creating the sessions and sign in functions

//02.03 - connect to the database


*go to the route.js add an empty/try catch in the signIn async function

the try function is a serverless function
every next js route is a serverless route
which means its lambda function, that opens up only when it gets called
so that it then spin up the server and makes a connection to the database
that is great because we do not want to keep our server running constantly
but we actually need to make a connection to the database

for that will create a database file
to use it to connect to the database
>> create util > database.js
and code a connection function with your compass MONGODB_URI

*in the route.js, import the database function
call the database in the async signIn


//02.04 - creating a user model

>> create models > user.js

define and export a user schema, 
**new options: unique, required, reg-ex match with messages

now we can >> import the user model into the route.js
and work on creating a user if not found in the DB

>> work on the session function to know which user is currently online


now we are done with the route that will handle our entire authentication process
for more info about this part, check the next-auth getting started documentation
https://next-auth.js.org/getting-started/example


the documentation says we need more .env variables
add to .env
NEXTAUTH_URL = http://localhost:3001        //later on when deploying will put the deployment link
NEXTAUTH_URL_INTERNAL = http://localhost:3001
NEXTAUTH_SECRET=GpsdHGly/E+ANf8Sjx2fyUqXwEJaMpRe/kY1UZqRpys=

NEXTAUTH_SECRET is a random string that is used to hash tokens
to get the secret, type in terminal / or go to CrypTool-Online
openssl rand -base64 32

run npm dev
if got an error "the top-level-await experiment is not enabled"
in the github gest get and replace the next.config.js


//02.05 -1:40:50 --signing in

we are currently mocking a logged in user, 
so now go to the nav.js, and pull real data from the session

we will use the next-auth hook useSession to get the user data
and instead of the isUserLoggedIn in the divs
use session?.user

now we do not have a sign in button
we should be able to sign in and not sign out or create a post

when alerting the session?.user we get undefined (i.e false)

and when alerting the providers object, if we have it then we should be able to sign in
which says null, this is not good, this happened because the lecturer used setProviders name twice

the lecturer got a browser error of Access blocked
error 400: uri_mismatch
if we got into the nextAuth documentation
will find a GET/POST /api/auth/callback/provider
this /api.. route is something we have to add to the callback of the google cloud console

>> go to the web client in google cloud
under authorized redirect URI's
add http://localhost:3001/api/auth/callback/google

a framework makes a lot of things easier for you, but you have to follow its rules
that is why you need to read the docs of these tools that are at your disposal


// 02.06 - 1:45:45 - display a real profile icon

go to nav
replace the "/images/logo.svg"  with {session?.user.image} for the user logo src
add the images hostname to the next.config.js file


//02.07
now when checking the database, will find that there is nothing created
this is because in the route.js, the async functions has to be inside a callbacks object

so what is the point if we can already sign in without a database ?
a database is needed to attach prompts to these accounts
and check different accounts, profile pages of different users

///////////////////////////////////////////////////////////////////////////

//creating posts

//03.01

>> create 
app > create-prompt > page.jsx
import useState, useSession, useRouter, Form component

>> add a Components > Form , component with the props used in the c-p page.jsx
and import Link and write the form code

//03.02
>> back to the create-prompt page.js
work on the createPrompt function

try {

} catch (error) {

} finally {
    //happens either way
}

to create /api/prompt/new api we used to use backend server express router controllers etc



//03.03 -- create backend endpoint

>> create and write into
app > api > prompt > new > route.js


//03.04 -- create a model for the prompt
>> create and write into
models > prompt.js
and import into the app > api > prompt > new > route.js

//03.05
once imported can create and save the prompt to db
and return a JSON.stringify of this created prompt

//// now we can test adding a prompt

AI Prompt: You are a professional web developer. I'm going to give you a snippet of code and you can give me some advice on how to make it cleaner, more readable and more efficient
#webdevelopment

now we can successfully add a prompt to the DB


///////////////////////////////////////////////////////////////////////////
//send a GET request to show all the prompts in our feed on the home page

//04.01
go to components > feed.jsx

create a component that returns a section/form/
input[text] that will be the search field

and a PromptCardList

as this promptCardList component will only be used here
we can create it inside the feed.jsx

//04.02 - get prompt data and pass to a card list
now we can map(iterate) over the data(prompt cards) and show each of them
but first we have to fetch the data
so from the Feed component, will have to make a GET request

//04.03
now we need to work on the endpoint api that will be a GET request
>> create and code api > prompt > route.js

now the PromptCard component can be displayed in the feed (but without data yet)



//04.04 - work on the PromptCard.jsx
to display the prompt alongside the user that created it with a copy text feature

added a handleTagClick function to be defined


//04.05 - work on the copy functionality
in the js element onClick call the handleCopy function
define the handleCopy and its useState


till now 2 of our four crud operations has been done
- create post
- read post
- update post (yet) in the profile page
- delete post (yet) in the profile page


///////////////////////////////////////////////////////////////////////////
//work on the profile page

//05.01
create .. "app" > profile > page.jsx
now when we click on the navigation user logo, we can go to a profile page

!! how to render a basic component in a page.jsx
//next step is to place the needed to pass props in the component call
//then needed functions in the component jsx
import Profile from "@components/profile";

const Profile = () => {
  return (
    <Profile
    />
  )
}

export default Profile;


//05.02
create the handleEdit, handleDelete empty functions to be able to pass them
to the Profile component

where it will call them with handleEdit(post) for example

//05.03
regarding the data prop, we already create an API endpoint to fetch the data
but we need to modify it slightly
we do not want to fetch all the posts, we only want to fetch posts
belonging to this specific profile

go to the Feed.jsx component and copy the whole useEffect



//05.04
create the endpoint to fetch the posts from that specific user
/api/users/${session?.user.id}/posts

>> create
api > users > [id] > posts > route.js
which will look like the route.js in api > prompt > route.js
we will just use the {params} prop to find by the creator: params.id


//05.05
work on the Profile.jsx component
with copying the div that maps over the prompts to display them in cards from the feed.jsx


//05.06 - add the jsx and style for edit/delete buttons
as we are using all the passing props
we need to fill the empty handleEdit and handleDelete functions in the app > profile > page.jsx


>> go to PromptCard.jsx
and before the div closes check for user id and path to display the edit/delete buttons
make sure to import at the component's top the session, router, path



//05.07 - edit/delete prompt from profile page functionality

>> first we have to add the api endpoint for that
create api > prompt > [id] > route.js
which will have three different types of requests

copy code from app > api > prompt > route.js
and work on the three function get/edit/delete using mongoDB access


//05.08
now go to the app > profile > page.jsx
import the router so we can be able to redirect to an editing page from the functions
used on the buttons


//05.09 - 

>> create 
app > update-prompt > page.jsx
copy the create-prompt page and copy into update prompt
change text of create into edit
the difference is that we want the prompt data to be existing on the page

to get to the id in the url that triggers the useEffect
will import and use the useSearchParams

now we can work on the useEffect

!! now the Edit post page has the prompt data auto filled

//05.10
work on the updatePrompt function
in app > update-prompt > page.jsx
with changing the fetch url and the method

!! now on clicking edit, the post will be changed in the home page feed

//05.11 - the handleDelete
the api endpoint is already created
will work on the app > profile > page.jsx handleDelete

!! now when clicking delete on the profile page the post is deleted everyday


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

try implementing these features:
- search by text words, tags, username
- click on a tag to be able to see all the prompts of that category
- clicking on other users profile
brings you to their profile page, url profile/[profileId]
and says "John Smith's" profile for example

//3:11:00 and the full code in description links
the code for the 1,2 features has to be implemented withing the Feed.jsx component
tp have search states like searchText, searchTimeout, searchedResults useStates

then filter prompts based on those queries

functions for the searchChange, handleTagClick

for the 3rd feature, will create a profile > [id] > page.jsx
similar to our profile page already, but instead will
fetch from /api/users/${params?.id}/posts




////////deploying a next 13 application

//upload to github
create a repo for the app on github
on the apps folder
# git init
# git add .
# git commit -m "first commit"
# git branch -M main
# git remote add origin
# git push -u origin main

//head to vercel.com, this is the company that has built next js
signup with github, add new
the github repo should be visible to just click import
deploy
regarding the environment variables we can add them once the project is deployed
by making another git push
it should re-build on vercel

//some features will not be implemented by default
like next-auth and google

so will go to the .env file 

//go to vercel > settings > env variables > 
add next_auth_url, NEXT_AUTH_URL_INTERNAL, which will be as the deployed url
auth secret
mongoDB uri
googleClient secret, google Id

{ might need to rebuild the application for these changes to take effect
rebuilding could change the url, so will have to re-pass them to google }

//have allowed access to all ip's in mongoDB

//in the google cloud > credentials > authorized js origins
add the url also (if theres a slash at the end remove it)

//in the authorized redirect urls
add two, the base url and one with /api/auth/callback/google
save



!! now we can see the mongoDB prompts and the sign in button








*/



/*

1.37

https://console.cloud.google.com/apis/credentials/oauthclient/813992920615-35v62s3jj0b40g154md8s2g53m497fgs.apps.googleusercontent.com?project=promptopia-1123

need to make a file map with order of work

localhosts in .env, googlecloud



i feel like i do not know mongoose findOne, (which can be DONE managed)
schema type Object id and ref (reference), 
-- you might need to make a mongoose sheet - all the info is there

tailwind allows to use utility classes shortcuts like
w-full for full width etc.

class-name << tailwind
class_name << custom css

max-md: hidden
hide on large devices but break content on smaller devices
mx-3 margin left and right of 3


** what can i use from tailwind while developing
** css: orange_gradient, main/gradient(page) glassmorphism, form_textarea(form)

jsx {" "} space






*/