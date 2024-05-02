
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



//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

Add a user and login with a session with next-auth

//02X.01
//npm i mongoose next-auth bcrypt @types/bcrypt

(Sign-up)
work on the database.ts
work on the user model with bcrypt
work on the app>api>auth>route.ts** 
(where we send a post form to this path with json)
await req.json() RECEIVE

work on the signUp.tsx** component will use fetch
await fetch("/api/auth/users", {
            method: "POST",
            body: JSON.stringify(userInfo)


//02X.02 - work on the signIn/Login part 1

work on app>api>auth>[...nextauth]>route.ts
work on the login.tsx component will use signIn method with credentials
await signIn("credentials", {
            email,
            password,


//02X.03 - login
go to the app layout and import session provider and wrap
because the session provider is a client component
will create a AuthProvider component and wrap the children into it
so will wrap with AuthProvider component instead

as we are using the jwt we will need the nextauth_secret, nextauth_url env variables
to just present in the .env file

now when you check the browser dev > cookies 
will find cookies generated by next-auth



//02X.04 - signout button
go to the nav component


//02X.05 private routes - protect the agent pages

create folder as app>(private_route)
move the profile page inside this private route

create a separate layout.tsx in this (private_route) folder


//02X.05 - (not used)

if we are logged in, we can still view the signin/signup pages
create (guest_route)
add there the auth pages, and create a separate layout for this folder

!! if you have other routes, you can create the folder and pages for this guest_routes folder


//02X.06 - group admin routes - (not used)

to view specific pages if role is admin
add there the related pages, and create a separate layout for this folder

//02X.07

- allow the nav signout button to redirect to "/"
- allow to return the whole user object in the session in app>api>[...nextauth]>route.js
- add a useState function to redirect the user to their page once logged in (session activated)
- add a sign in after the sign-up in signUp component, the session redirect will be activated automatically
- add a typescript module for the session.user 





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

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

Part 3 - creating properties

//03.01

Form component
add these props,
type, to check if editing or adding
post to access value
setPost to add to previous post the current value
submitting, true/false to disable enable the form button
handleSubmit for the form onSubmit

-- same as before

//03.03 - backend endpoint
app > api > posts > new > route.ts

-- has similarities like before

//03.04 - create a model

-- now we can add a property to the database,


//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

Part 4 - GET requests, show all posts

//04.01
in the home_main, 
useState of properties
fetch data from API URL
set to properties
so we can map over them

//04.03
create api > properties > route.js

GET, connect, await find, return JSON.stringify

-- now can view the properties on the page,

do the same for, 
> all properties,

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

Part 5 - the property page

when clicking on a property should go to this link,

on the property page, i need to get this specific property info
along with other properties for the side property section

you have app > properties > [propId] to catch the url with id
and api > properties > [propId] to have params in the GET function to use to get this property info

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

Part 6 - the profile page

work on the profile page app > (private_route) > agents > [agentId] > page.jsx 
work on the app > users > [agentId] > route.ts as a post request
to give to it the details of session user and page url (userId) and
view the page according to the viewer's role


//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

Part 7 - work on edting, deleting
a user from the profile page


so you can pass to a component, states and setStates, global function constants
the states can be changed in the useEffect fetch function
so received as {post, handle..}

the handle submit function on submit does the fetching with POST or GET
the POST await req.json {destructure out the passed}, connect to db, new odel
save, return json.stringify 



// try this ? (did not work, check it out)
-- import usePathname from next/navigation
-- const pathName= usePathName();
-- pathName === "/profile" ?

//pass different props to a component ([agentId]>page.tsx) [done]
-- would like to try setting the returned json to a state
-- then pass state={state} to the agent"s" component

PARENT: <AgentCard userIncoming={user} setUserIncoming={setUser} sessionId={sessionId}/>
CHILD : const AgentCard = ({userIncoming, setUserIncoming, sessionId}:{
    userIncoming:userInterface, 
    setUserIncoming: React.Dispatch<React.SetStateAction<userInterface | null>>,
    sessionId: string
    }) => {


//i want to edit the user

the user route now should have 3 api requests
GET, PATCH

on the patch request, 

will do a save
but before that want to get the new information from the front-end
let the apply button activate this route

we want to collect the information as it is changed,
this could be by handling the change of inputs
so we update the up user info

needed to put this jsx part and functions in a separate component 
for better read and to not complain that the user not found before initial render

so i have not the url and the user data to be edited
we want to access this user from the database by his id
change their incoming values

now we can change their values on the db, save and refresh and see

edited the agentCardAdmin component to update the UI as well


//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

Part 8 - work on edting, deleting
a property from the profile page

same as before

let us work on the delete,
what did we do ? 

there is a delete button, it should invoke the api like before

let us work on the edit (PATCH)

when clicking the button, the edit page should appear
the edit component, should receive the property info

> edit PropertyEdit.tsx
> edit api > properties > edit for POST (get info) / patch (update info)

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

Part 9

now for the posts

show a posts container in the user profile like the properties
with edit and delete like the properties
add an editing component visible on "edit" click
add route for posts for delete, patch like before

- let us add a posts contrainer like all posts
- let us add edit / delete styled buttons

- now we need a form, 
let us copy the properties form and see

!!!! finally i did the in-page form
style the form with center_center
in the page wrap in an absolute div with z-index
and the remaining of the page can just get an opacity of 0 so the background appears

!! see how we can control the image in the post card !


add your submitHandler, handleChange, and route POST to api/posts/new/${current_url}

//now we can add
we want to fetch
- profile page > the retrurned on the get [done]
- post page
- home page [done]
- posts page


//Part 9.1

- now we have the posts ready,
w need to handle the delete button
so basically what it does is that it calls a function
and that function calls the fetch delete like property
- let us do that

go to the properties card and see
the profile page handlePostDelete, and the api>posts>delete


now we need to work on the edit

- i need to fill the form with the previous info
on press edit, the add form acutually shows up

ok so you will call the showAdd, set the state of the post to the content you want
in the profile itself to the component can actually take it

pass in on click 
set on the handleClick
pass to the component the state of the postInfo
on the add route, if this postId exists, then just update it (so you have to pass also the post._id)
and action to determine which route method

also set a reload state on the profile and pass to the postAdd component
to set a reload when done to display updated info

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

Part 10 - fixes

- want the add/edit property to work the same as in posts
it is the same, just some things changed as we are using a separate component

ok, so we need to do some things

////- add dates, 
- check this user page [done]
- 


the dates are given on 
property add for example to start with
let us have a generating function in util that returns today

i also want to update the user's update date
we can make this a function that calls an api
that api just updates the received params 

you have two things to work with
a function returns a date string used in the api when adding values
a function that makes a patch request with a user's id

- new property done
- edit property done
- delete property

//now to the posts
- new/edit post add dates in the api and just after the fetch calls, update user function
- delete, just below the fetch call

i will use the session id, can make the user's page id determine the user, but will keep admin
if changing to keep the credit.
i would not call updating personal information as an update.


////add content to the property inquiry
set session storage when asking about a property that is get on the about page 



//Add - radio button input support

they have the same name and in the same div, checked depend on the recommended boolean(value===Yes/No) 
let us open the add property

- want to add this to the property page
- want to add a filter to the property page
- filter the recommended on the home slider card

//FIX: property, image, post heights [done]

properties
homepage, propertycard

user posts

posts cards
home, 


//Addon: add counter to the user on property or post add or delete

add to user model




//Addon: delete user folder on file system

- need to wait for each operation before the next one **

        //Delete user
        //delete posts
        //delete properties
        //delete files in folder x
        //delete folder x
        //delete main folder

const res = await fetch(url); console.log(res.ok); returns true on status 200-209 or res.status

if the wrapping async function returns a data, then call it outside.then(data)
or call it in an IIFE async function
( async ()=> {
    const data = await loadData();
})();

results = await promise.all lets awaits run in parallel in the same time not each await in its time
fetch(url1)

dataPromises = results.map(result => result.json());   //do what wanted with each fetch result
//json still returns a promise, so use
finalData = promise.all(dataPromises)

as await functions take time to fullfill
i will only proceed to the next (Depending) function when it is complete
i.e put it in a promise, when the callback is ready, call the next promise
> code in the utils, can be used for any folder



//FIX: the slider images

the property pick image is not iterating well, 
let us look at it

when you click on a button
the image reference is registered
once the image is registered 
do a fade out animation
change the image in the wait
do a fade in animation
think and you shall solve

this also worked for the right/left slider with less logic



//Addon : input validation

we need some kind of validation when 
adding a property, adding a post, login, signup

let us start with adding a post

there are two things, 
1st on blur, check the input
2nd on apply, if there is an error, display at the top

let us start with on blur
go to the addPost component

we have to get the element on blur
then get its name and value
now you can have a function named with its name right
i will run the function and pass this value

i want to pass a string and get a function in return
so there could be a string holding a function... i want all of this function for now
but maybe just get the pattern corresponding to the pattern key and make test

now i can validate directly
want to display this message
so, i can get the element by id dynamic, give html, and make a ui refresh

ok will make the submit button relative
and put in its container a span message
we want to put a message on the fail of input

so all what you did is
define the handler
have an onBlur,keyUp call the handler on each input
have some jsx element with an id to place the text

now repeat the same for login, signup [done]

now what is the case of the backend messages ?

the signup,
we should have
username: more than 4 ok
phone: unique and more than 4
email: unqiue and in a valid email format, ok
password: more than 4
id more than 4, ok

ok, we can do that to the login,



FIX: post edit and add prev images
ok, what did we do before ?

open the add property and let us see
add the jsx
re-define the file state
redifine the formData logic

check the api for post, patch nothing to change
adjust the propertyAdd_component, postAdd_component
propertiesContainer>propertyCardAdmin // postsContainer, new get route

-- added the image for the post edit and adjusted to remove the image and x button if not needed for properties also

Addon: user submit email, gets a notification thanks, then get redirected to the home page


FIX:
we want to have a live UI update of pagination
there has got to be another way of doing it
understand how our pagination work
and try a new approach, maybe it will work

want to start by... all properties

add the animation call in the button
remove conditional in this call function
set prevFade to 1 as default start

now. when changing the image, the next image still have the same image reference
so will set the imageReference to 0 if there incoming property not the same as the dom property

do the same fix all posts with the needed solution

clear the fill add a post image


////FIX: want to make the background 100vh with scrolling contents

for that will need to go to the main layout
just wrapped my components in the layout in a div with z-index, h-100vh, overflow-y-scroll
this is to have a smaller backround image

-- add a scroll bar


////FIX: when fetching data, we are loading, however if there are no data
the loading is set to no properties found

let us start with all-properties, user-properties,posts,all users, all-posts


    const [dataCondition,setDataCondition] = useState("Loading...");

    setDataCondition("Loading...");

        if (jsonResponse.properties.length > 0) {
            
            setProperties(jsonResponse.properties);
        } else {
            setDataCondition("no properties found...");

        }
{dataCondition}

--add a not found back button in search
-- get filter values by fetching all the properties from the api
-- clean the filter values for any duplicates
-- may use this clean function later in the api itself or when adding a property...


//FIX: the card sizes

on the properties card
it gets smaller than necessary

property card admin ok
property card allProperties ok
property card single property
property card in home

post card in home
post card in single post
post card in all posts
post card in agent

//FIX: fetch all properties for filter values only on the first render of the all properties page
created a separate route for all properties in the filter api folder





API Codes:
200: operation succeeded
201: success and created a resource

301: moved parmanently
302: redirection

401: not authenticated
402: not authorized
404: not found
422: invalid input

500: serverside errors



//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

Part 11 - addons

//Updloading images

https://www.youtube.com/watch?v=-_bhH4MLq1Y

let us check it on the update profile component [done]
components > agentId > agentInfo

define file state that is changed by the file-input onChange e.target.files?.[0]
create a formData
pass form data to the api directly instead of a json.stringify

on the api side, 
1. get formData
2. pass formData to the database
3. generate a file or keep the old one and pass into the avatar

so the buffer in the api can be passed to any cloud service then

now do the the same for the post add, edit [done]

next the property multiple images
next delete this image on delete

- where is a property created ? 
in property add..

that was a tough one,

same as before
but on patch apply get formData with multiple files
add all of them one by one
and get an array with their urls to pass to the property's image array

however on edit render, we get the value of the property
and set the files we will pass later to these image urls
so if not changed, will be passed to the api as strings
and then will not change them, but keep them in order as they are as strings in the array will pass
this is a replacing/keeping mechanism

Next:
- just want to show to user the image if there is and set state to null if they will cancel the image 
and you have it...
also added a code that will create a folder in the images folder with the userId
on user create, so we can not look for it all the time when adding something related to the user
- also apply this to keep the same image if not changed on posts?, and add to posts route the user url path
- continue on minor fixes

//adding images cont

- we want to change the style of the add property
we want make the input less narrow and in the same width put an image and cancel

- add a new label instead of the file picker
add cancel to set to "", remove all null logic use "" instead
display right message in the label
display the prev image or an indicating image
repeat for image2,image3,

we are comparing in jsx between, "image url", "", file

the propertyCard normal and admin components, has to ignore "", 
so will not map (returns undefined in between array)
but filter, as it returns a new array on true items

add profile posts properties folders to the api creating user, adding user photo, posts

https://stackoverflow.com/questions/35612428/call-async-await-functions-in-parallel
-- add multiple awaits in a row


//Part 11.02 sending emails

we can try using the setup we did before ? 
let us create a function in add user, 

the same method as in nodejs

now we want in the about
to send the endered user info
and make them required
states of user info

can also send emails to admin on any property added



//Part 11.03 Adding some sort of pagination

let us start with the all-properties page
we want to show like only three, how do you think that could happen ? from where ?


do you send a get request ? 
something will have to change, you can send a get request with a param of 0,1,2 depending on the page

this will need an adjustment to file positioning to use params on the route to send these numbers
ok, on base i will send 0,
we should display the first three properties, 
so we can use skip and limit

now we can skip and limit, we want to implement the pageId in some buttons
that will send a GET request when clicked, by using a state, 

actually we do not need the url, we will send the pageId of the button clicked to the backend instead


-- want to do the same for 
- posts page [done]
- user 

in the user, you should not fetch the properties,
you should have a component that takes a userId, makes a fetch request, for that user

**then you can remove the user properties, posts from the the api


//Part 11.04
implement something like search.. 
well what does it do ?
we have some more description... we can check on description content
like contain.. for description

i enter for example "garden view"
i get back elements with "garden" and "view"

inputsArray= inputs.split(" ");
find({property_description: {$all: inputsArray}})

this can happen on change

for this to happen, where do we retrieve the documents ?
ok i can send some value to the back end
want to fill this input with text in a state
now i can receive inputs on the api
want to go through some properties
now i can get properties that include some keywords

want to add a filter, 
will open a menu
to place inputs from and to and add this in the filter beside the keywords [done]

want to retrieve all the country text values of all the properties
and map over these values to give select options in the jsx

now i want to 
if the input is empty, do something [done]
we can give min and max,  [done]


- will need to render these properties [done]
- will need to clear filter (default view) [done]
- style inputs [done]

- ok so we have the filtered properties now, can you view them ?
yes i can retrieve on the front end
can we put them into the UI state ? yes and the properties state is updated with refresh
the pages need to be sorted also
-- the properties refresh is still not acting as we want, will check on it later
HOWEVER when i click on clear it refreshes ?

will use the tailwindcss-text-fill to remove the white background of inputs when autofilled
https://www.npmjs.com/package/tailwindcss-text-fill
//didnt work ?



//Part 11 - loading
while loading any data required for a particular page

wrapping the page component in a suspense component
loading.js exports loading
<Suspense fallback={<Loading />}>
    <Page />
<Suspense />

let us start with the home page


ok the loading works if the data is fetched outside a useEffect
i used it in the single property and single post
by placing a loading.jsx in their component
why these only ? because when placed in all properties
it makes a loading ui when fetching the properties using the pagination

this can be overcame by fetching new properties using a useEffect
however, how will the useEffect be triggered, most probably by a state
which will trigger a re-render... 
most probably there will be no properties, 
cannot trigger a re-render because we cannot use a useEffect
so will cause the loading to happen again...

in the home, the footer still shows, maybe because it is static and already fetched ?

look, there is no need really for that, as we already have ...loading text


//Addon : scrollbar
https://codepen.io/aurer/pen/kGRNVw
https://stackoverflow.com/questions/73371644/how-to-switch-scrollbar-to-dark-mode

add/remove the class from the function in BodyNoScroll.tsx on the html element
and call the function in the DarkModeToggle.tsx


//i want on scroll, to make the scroll display
then timeout for 1sec, display none







- adjust the go to profile nav link

- work on the profile component app > (private_route) > [agentId] > page.tsx
    - add the fetch useState like before

//05.02
- work on the API app > api > users > [agentId] > route.ts


create-prompt page.jsx

















*/


/*
file history

app > page.jsx
app > layout.jsx
components > Nav.jsx

//02X.XX
app>api>auth>route.ts, [...nextauth]>route.ts
util>database.ts
models>user.ts
login.ts, signup.ts, nav.ts
app> (admin_routes) (guest_route) (private_route)




*/