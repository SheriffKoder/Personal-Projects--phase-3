
# Car-Maintenance's application logic
  
  > this information is for understanding the logic and how files link together, not yet for how to use the API.

  

## Back-end:

>code flow: **`App.js`** > **`Routes`**/`isAuth` > **`Controllers`**/`Models`

`Models` the shape of the cars/users in the database
each user model has its info and is related to a car,
each car model has its information and can have and array of multiple checks/check-ups
where each check in this array is an object containing information about this check and another history array of the check previous instances

`Middleware > isAuth`
a middleware used in the routes before accessing the controllers
to check on the authentication status of the user request

`App.js`: is used for image handling, set headers, set public directory path

`Routes` (car/auth): middle-man between app.js and the controllers
checks for inputs and see if they are in a specific format to pass or send errors to the controllers
and before going to the controller check on the authentication status of the user request

### Controllers (User):
>each check first if the route has sent any input format validation errors
auth: signup, login functions

`signup`:
takes name, email and password
stores a new user
creates a new authentication token to login with
return the newly created user information, user cars (as an empty array), authentication token

`login`:
takes email and password
checks in the database for the inputs (email found, password is correct)
creates a new authentication token to login with
return the user information in the database, user cars, authentication token)

### Controllers (Car): 
  
`addCar`:
takes user information
stores user information with an image path received on the request from multer
returns a car object on success or a string on failure

`editCar`:
takes user information
checks if the current user is the owner of the car's information
stores user information with an image path received on the request from multer or keep the same if no image is provided
returns a car object on success or a string on failure

`deleteCar`:
takes user information
checks if the current user is the owner of the car's information
deletes the car's image locally
delete the car's information from the database
returns a string on success or a string on failure**

`newCheck`:
takes user and checkup information
pushes a new check object to the car's checks array
returns a car object on success or a string on failure

`editCheck`:
takes user and checkup information along with a checkIndex, historyIndex
to determine which check in the checks array access and which instance in this array to edit
puts new information in the car.checks[checkIndex].history[historyIndex]
returns a car object on success or a string on failure

`deleteCheck`:
takes carId along with a checkIndex
to determine which check in the checks array access
takes out from the checks array this check (filter out)
returns a car object on success or a string on failure

`completeCheck`: (mark a check instance as completed/done)
takes carId along with a checkIndex
changes the checkedOn value of the first instance in this check's history array (i.e last added instance) to today's date
puts a new empty check in the head of the array (i.e to be the last added)
save the car with the new check edits
returns a car object on success or a string on failure

`deleteCheckHistoryItem`: (delete check history instance)
takes the carId along with a checkIndex, historyIndex
find the car
access the checks array and find the check with this checkIndex
filter out from the found check any instance containing the historyIndex
returns a car object on success or a string on failure.

##

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).