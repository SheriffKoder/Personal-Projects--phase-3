
//////////////////////////////////////////////////////////////////////////////////////
//NextJS
/*

Routing, define APIs


//app>layout.js (default layout for the website)

import nav and footer;
export default function Layout({children}) {
    return (
        <>
        <NavBar />
        <main>{children}</main>
        <Footer />
        </>
    )
}

//app > globals.css

//app > page.js                                     //main "/" page

export const metadata = {                           // static
    title: "Home,"                                  //outputs like : <head> <title>Home </title> </head>
}

export async function generateMetadata({params, searchParams}) {    //dynamic meta
    const product = await getProduct(params.id);
    return {title:product.title}
}

export default function Page() {
    return (
        <h1> ... </h1>
    )
}





////separate pages
app > user > page.js                                // "/user" page
app > user > layout.js                              //separate layout   
app > user > error.js                               //error fallback page
app > user > loading.js                             //shared spinner etc.   
app > user > [userId] > page.js                     // can use {postId} when visiting this page
app > user > newUser                                // accessed via "/user/newUser"

app > api > user > route.js                         //define route methods, accessed "/api/user"


////Routes
GET POST PUT PATCH DELETE HEAD OPTIONS
export async function GET(request) {
    const users..

    return new Response(JSON.stringify(users));
}


////Data fetching (this can be included in REST ?)
async function Page ({params}) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`,
        {cache: 'no-store'} //Server-side-rendering SSR, data not cached, new rendering/data fetch
        ...                 //Static-side-generation SSG, cache data, used for non frequent changing content
        {next:{revalidate: 10}} //Incremental-static-generation ISR, fetch statically at build time while refreshing after a certain time
    )   
}
const data = await res.json();

return (
    <h1> {data.title} </h1>
)






*/


//////////////////////////////////////////////////////////////////////////////////////
//The Idea
/*
full-stack NextJS CRUD Application 

will use tailwind, typescript and of course node.js/next.js
this will be the base for the front-end for the mongoose API

- navbar, footer
- agent sign in with a company password+agent password to add/edit/delete properties, change his info
- search properties with tags, username, property content
- admin has a list of all agents as well as adding, etc.
- email confirmation on property add and admin get notification


you can do 
module.exports = {

}

or const config = {

}
export default config;








*/

//////////////////////////////////////////////////////////////////////////////////////
//The Project
/*

## npx create-next-app@latest ./                    // ./ to make sure will create in this directory
## npm install bcrypt mongodb mongoose next-auth

delete the app and public folders
create: app, public, components, models, styles, utils, .env in the root directory

take from the Github Gist zip
tailwind.config.js, next.config.js
styles > globals.css
public > icons and images
download IDE extension ES7+ to use rafce abbr
go to jsconfig.json change "@/*" to "@*" to take files from the root !!


//01.02
create in the components folder 
forms, nav, profile, promptCard, provider, Feed.tsx's


//01.01
create page > page.jsx / layout.jsx
#### npm run dev

>> work on the app > page.tsx     //a text component will be used in layout
and  layout.tsx                   //to hold nav/home/footer

@@ it is asking for a Provider components
@@ styles: 
layout: main, gradient, app
page: head-text desc

the .css is complaining about @tailwind, 
//install tailwind extension CSS IntelliSense
//copy to the user's settings.json 
    "files.associations": {
        "*.css": "tailwindcss"
    }
}

>> worked on the background and the navigation bar styling
>> added theme toggle which i would like to have while working (reusable!) in the nav element

//01.03

import Link, Image, useStat useEffect, next-auth/react's, 
nav structure and links with images, buttons

//01.05
navigation user mobile menu dropdown
will use {variable && (do this)} and a function on icon click that sets state for that variable 
will be about a small icon of the user's image
to display links for my profile, create, signout

we can make it to login / signout / add property / with a person icon


//01.04
useState providers - this is for users login
we will implement a connection with the database

so let us read about how its done, so we can code from the nodejs
this will take us to point 3 and the rest is easy

//01.04
the user login part... we have to check mongodb


/////////////////////////////////////////////

will stop at 01.05 for a minute and work on the home page components
- add a hero component to the main page component

- i need the navigation bar to be over the hero 
- we need to put 


/////////////////////////////////////////////
/////////////////////////////////////////////
- front end finished, let us see what we can implement for the backend from the tutorial notes
back to 01.03

we will skip nextAuth and google authentication (will have custom authentication)


app > api > user > route.js                         //define route methods, accessed "/api/user"

route.js acts as an api backend route, accessed http://localhost:3000/api/users


////getting product related info for the metadata function


export async function generateMetadata({params, searchParams}) { //dynamic metadata, get params like /prodId
    const product = await getProduct(params.id);    //call the get product function
    return {title: product.title}   //get the title for that specific product as a page title
}


export default function Page() {
    return (
        <h1> ... </h1>
    )
}


/////////////////////////////////////////////
//02.01

create a provider component
wrap everything in the app > layout.tsx between the imported provider component











////Routes
GET POST PUT PATCH DELETE HEAD OPTIONS
export async function GET(request) {
    const users..

    return new Response(JSON.stringify(users));
}


////Data fetching (this can be included in REST ?)
async function Page ({params}) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`,
        {cache: 'no-store'} //Server-side-rendering SSR, data not cached, new rendering/data fetch
        ...                 //Static-side-generation SSG, cache data, used for non frequent changing content
        {next:{revalidate: 10}} //Incremental-static-generation ISR, fetch statically at build time while refreshing after a certain time
    )   
}
const data = await res.json();

return (
    <h1> {data.title} </h1>
)










*/


/*
file history

app > page.jsx
app > layout.jsx
components > Nav.jsx



*/