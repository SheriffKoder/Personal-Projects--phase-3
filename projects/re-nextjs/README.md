the goal of this project: 
1) learn NextJS and Tailwind while progressing in implementing the project idea and design
2) practice the pre-existing knowledge of NodeJS/mongoDB/mongoose, javascript/HTML/CSS
3) work with typescript
to build a full-stack web application

the idea of this project:
a website for a real-estate agency, with two functionalities:

1) visitor side:
1.a allow the agency to display their listings (properties) and add something like blog posts or market news for the website visitors to read
1.b allow the visitors to be able to contact the agency, this would be through the about/contact page
which should be redirected to from various pages on the site plus the navigation bar

2) agent side:
the aim of this side it to 
(1) allow the agency to fully control what is visible on the website without needing a developer except for minor things 
(2) allow admin users to overview and control the agents on the website


features worth mentioning:
- send emails with AWS
- upload image files (in add property/post)
- profile creation/authentication with next-auth (login/sign-up)
- pagination (all properties/posts, profile properties/posts)
- search and filter (all properties page)
- input authentication using Regex
- create and delete files and folders using the fileSystem 
    - create item images, create user folders on sign-up to store their contents
    - delete user's files, folders on user's delete
    - later can add dedicated item storage folders - remove item images on item delete


//// This is a description for the project

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// HOME PAGE /////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// Navigation bar //////////////////////////////////////////
{

Sticky on the layout.tsx to be used on all pages
we have 6 links
first 4 are: home (icon), all properties page, all-posts (i.e news) about/contact page

last 2 are: user menu toggle icon, theme toggle icon (with animation, darkModeToggle.tsx component)

////////////////////////////////////////////////////////////////////////////////////////////////////
////////// the user menu //////////

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

the theme toggle functionality is simple, 
at the beginning if there is no theme set already (on the browser session) a theme is set
when the user clicks the toggle button
    1. the theme changes to the corresponding theme of the icon
    2. the button animates and changes the icon to the next theme

i have also added a loading-like component that overlays the whole page for a second 
to overcome a theme flickering issue when the site is refreshed/loaded
there are probably another ways of doing it, but for the sake of simplicity i used this method.

}


















