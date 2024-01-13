HTML, CSS, Javascript, 
NodeJS/MongoDB/Mongoose
NextJS (API Endpoints)
Tailwind
Typescript

the goal of this project: 
1) learn NextJS and Tailwind while progressing in implementing the project idea and design
2) practice the pre-existing knowledge of NodeJS/mongoDB/mongoose, javascript/HTML/CSS
3) work with typescript
to build a full-stack web application

the idea of this project:
a website for a real-estate agency, with two functionalities:

1) visitor side:
(1.a) allow the agency to display their listings (properties) and add something like blog posts or market news for the website's visitors to read
(1.b) allow the visitors to be able to contact the agency, this would be through the about/contact page
which should be redirected to from various pages on the site plus the navigation bar

2) agent side:
the aim of this side it to 
(2.a) allow the agency to fully control what is visible on the website without needing a developer except for minor things 
(2.b) allow admin users to overview and control the agents on the website


features worth mentioning:
- responsive UI, un-repeated/slightly-changed card components styling for different pages
- send emails with AWS
- upload image files (in add property/post)
- profile creation/authentication with next-auth (login/sign-up)
- pagination (all properties/posts, profile properties/posts)
- search and filtering/categorization (all properties page)
- input authentication using Regex
- create and delete files and folders using the fileSystem and javascript promises
    - create item images, create user folders on sign-up to store their contents
    - delete user's files, folders on user's delete
    - later can add dedicated item storage folders - remove item images on item delete

the browser storage is used for two things only
- store the current website's theme
- moving from a property page to the contact page, as they are not related, to store the property information to fill for the client the inquiry form which will be sent by email (these page's mutual parent would be the layout, which is a server component so cant use a state? maybe a const?)


project steps:
- design the website on paper
- work on the front-end and fill with dummy data to know how the back-end, models etc will look like depending on the needs of the front-end
- implement the back-end
- work on further adjustments
- add extra features



//// This is a description for the project

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// HOME PAGE /////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
the default layout.tsx (the parent layout)

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// Navigation bar //////////////////////////////////////////
{
Components>Nav.tsx

Sticky on the layout.tsx to be used on all pages
we have 6 links
first 4 are: home (icon), all properties page, all-posts (i.e news) about/contact page

last 2 are: user menu toggle icon, theme toggle icon (with animation, darkModeToggle.tsx component)

////////////////////////////////////////////////////////////////////////////////////////////////////
////////// the user menu //////////
Components>Auth>Login.tsx & SignUp.tsx

the user icon displays a user menu on hover/mouse-enter the icon or click the icon, and closes on mouse-leave (the menu) or click the icon

the menu should display 2 alternatives
signed in user: "Go to Profile" > user's profile page, "Sign out" > log out from the next-auth session

not-signed in: "login", "sign-up"

////the login 
is a component in the layout>nav that hides the background components (opacity to 0) to display a clean background

the front-end side authentication has been implemented to display to the user the right message
to correct the input
the back-end authentication has been also been implemented and the api route returns a message based on the
given inputs which also gets displayed to the user "upon clicking submit/sign-in" if there is an input mistake

the forgot password is yet to be implemented, it should send an email to the user's email address
with a temporary random password for the user to sign-in then change the password from their profile page

//the sign-up
same as login, separate component in the layout>nav, does the same UI behavior
what is worth mentioning is the AdminId which determines the user's role on the website
we have 2 roles, normal-agent (agent), admin-agent (admin, who can view other profiles and act as a profile owner to create-add-delete-edit etc.


////////////////////////////////////////////////////////////////////////////////////////////////////
////////// theme toggle //////////
DarkModeToggle.tsx

the theme toggle functionality is simple, 
at the beginning if there is no theme set already (the default) (on the browser session) a theme (light) is set and a value is stored in the browser's session

when the user clicks the toggle button
    1. the theme changes to the corresponding theme of the icon
    2. the button animates and changes the icon to the next theme (user click this theme to activate it)

i have also added a loading-like component that overlays the whole page for a second 
to overcome a theme flickering issue when the site is refreshed/loaded
there are probably another ways of doing it, but for the sake of simplicity i used this method.


////////// the website's vertical scroll bar //////////
DarkModeToggle.tsx + utils>bodyNoScroll>ScrollScroll function

the theme toggle also works on the scroll bar
by setting a custom css to the scroll bar depending on the current theme
the custom css is activated by a function which does the following

1. adds the corresponding theme css style to the bar
2. add a timeout to remove this css and add another css style which has a background like the website's
current theme background (disappearing impression) there is another way for hiding the bar completely
by css but i did not want to invest more time in this area at this time, maybe in a future fix

3. this function activated whenever the html component is scrolled, in order to use this hiding timer
and hide the scroll bar after the user scrolls by a couple of seconds
this activation is set by an event listener on the html element in the DarkModeToggle.tsx


}


////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Home-Page's components ///////////////////////////////////////
{

////////////////////////////////////////////////////////////////////////////////////////////////////
////////// Hero (Image) //////////
Components>Home>Hero.tsx

the first component after the navigation
it displays a welcome text and a button that redirects to the inquiry form which exists in the About page > contact section so the client can send an email to the company (and view their location/contact information)

this component has two layers, a background image, and a mask image on top of the background (to clip a specific part of the background) and leave the rest of the background to be nothing, i.e the layout's background

////////////////////////////////////////////////////////////////////////////////////////////////////
////////// Home Text //////////
Components>Home>HomeText.tsx

a simple container contains some text with a glass-like-css background


}


////////////////////////////////////////////////////////////////////////////////////////////////////
////////// Property slider (Our recommendations) //////////
Components>Home>Home_Rec.tsx

this component fetches properties marked by agents as recommended
and displays for each property some of its information and its first image
so a user can click on the property to view its page for more details

the main idea of the component is that on the page's load
there is a timer that changes the displayed property after X seconds automatically
with an animation to fade out the current property and fade in with the new property 
the property can be changed also with the right/left arrow buttons

*when the user hovers over the property, the timer stops to allow the user to check the information
when the user hovers out, the timer then starts again to change between properties automatically
when changing the properties with left/right arrow buttons the timer is reset for the new property


* the component also filter-out un-used image slots to use the 2nd slot if the first slot is empty

























