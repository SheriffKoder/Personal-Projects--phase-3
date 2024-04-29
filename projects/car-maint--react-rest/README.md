# Car-Maintenance's application logic

> this information is for understanding the logic and how files link together, not yet for how to use the API.

## Front-end:

consists of three parts `Routing`, `Context`, `Pages (components)`

### Routing:

`error pages` > outsiders folder (not found, AlreadyLoggedIn)

`main pages` > welcome, home, history

`side pages` > signup, login, car add/edit, checkup add/edit

###
  
`layout.tsx` is responsible for routing pages
depending whether there is a user saved in context or not
- if there is a no user in context
the users will will be redirected to the welcome page to login or sign-up

- if there is a user in context but has no car added yet
the users will will be redirected to add a car

- if the there is a user in context (logged in) and has a car
the users can access their profile page to edit, add, delete their car or checkups

then the index.tsx use app.tsx which uses app.css
the app.tsx wraps the layout (routing decision) between the context and router
to decide what page to view depending on the current url and the status of the user as described in the router

  

>**`Good to know that:`**
the routing uses part of browser url as params
to be used in the component (i.e carId, checkId) to fetch related information
and displayed to the user
the browser url values are created from navigation elements like buttons which have urls filled from data received from the database.

 ##

### Context:
the context by default will be created containing an empty user\
and will be filled with the actual user live values plus an authentication token on every information change action (login, signup, add a car, update info etc.).

A react state for changing the user is called to store any new information received from the API.

##

### Pages:
`WelcomePage`: navigate the user to signup or login pages

>**`Good to know that`**
each user has a car, each car has information and can have multiple checks in an array.\
each check is an object containing information about this check and another history array of the check previous instances.

`Home page/profile page`:
displays the user's car info with an button to route to a page for editing/deleting the car.\
displays the check-cards of the user with a button to add a new check or view each check's history (previous instances) to view/edit/delete some of them.

`History`:
displays the history of a specific check-up,
i.e the current information and previously added/completed instances,
each displaying specific fields depending on its position in the history array last/first/in-between,
with the ability to delete/edit each instance from its card UI.

`Components (forms)`:
- sign-up: take user information and submit to the database to create an account\
- login: take user information and submit to the database to receive the existing account information.
- CheckupNew: display information of a checkup history instance, take input information regarding a checkup and decide with the help of url params wether to submit to the API.\
an add or edit request depending on the checkup instance depending if it is new or already exist.
- CarInfoNew: takes user inputs to add a new car or edit/delete a pre-existing one.\

`Other components`:
- Nav: contains a logo and a sign-out button (present in all pages)\
- Footer: contains a logo
- Back to home

  
  

**Yet to be added:**
-view input feedback received from the API to the user on failure or success of entries
-use a cloud service to store car images and receive a url to store in the database
-use a third-party library to manipulate car images by removing the background
-avoid losing the react.context value when refreshing the page and thus have to login again
-send emails to users to notify on close due dates
-check user authentication when manipulating checks as done when manipulating the car information

##

  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).