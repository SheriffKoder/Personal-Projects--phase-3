
  

# Car-Maintenance's application logic (GraphQL version)

> this information is for understanding the logic and how files link together, not yet for how to use the API.

  

  

## Back-end:

  

>code flow: **`App.js`**/`isAuth` > **`graphQL Schemas`** > **`graphQL Resolvers`**/`Models`

  

`Models` the shape of the cars/users in the database
-each user model has its info and is related to a car,
-each car model has its information and can have and array of multiple checks/check-ups
-where each check in this array is an object containing information about this check and -another history array of the check previous instances

 
`Middleware > isAuth`
-a middleware used in app.js before accessing the schemas/resolvers
-to check on the authentication status of the user request
-then set on the request object a userId, isAuth and token values
-with adjustment to use on graphQL
  

`App.js`: is used for image handling, set headers, set public directory path
-import express-graphql, schema/resolver files
-import and use the Authentication middleware
-import, define and use multer
-set the public directory (/images), define body-parser (to use req.body) and access-control definitions.
-use express-graphql and define the url endpoint for each schema/resolver combination, where each schema is linked to a resolver sharing the same name.
-error handling
-connect to the database
  

`Schema Files` (auth/car/checks)
- these files acts like the routes, middleman between app.js and the resolvers (controller functions)
- that define and allow certain types of data to come in or get out of the api through these resolvers

-import graphQL itself and define the name of this schema in this schema export.
-define like in the models the types of the objects will be received, types can be depending on other types and so on.
-define the type of the objects that will be returned.
-define Root queries/mutations (like get/edit http methods) for the schema, however graphQL uses the OPTION http method by default on all requests.
-define the each resolver that will use these mutations/queries
after all of these definitions a Root mutation/query will be in this format.

resolverFunctionName (inputObjectName: inputType): returnType
where the resolverFunctionName is defined in the resolver files
and inputObjectName is the inputs accessed from the args parameter in it args.inputObjectName

  
---
### Resolver (Auth):

- export an object containing the functions that accepts inputs, do logic then returns an output
- use args.endpointQueryName instead of req.body to destruct out incoming data
- the request is needed to access data stored from the isAuth middleware i.e userId or token to check on the user authentication before starting taking actions
- in each logic function use the validator library to check on input formats like did before in the REST routes
auth: signup, login functions

  

`signup`:
-check if the input email already exist on the database, if so throw an error
-hash passwords and save the new user to the database
-create a new authentication token to return
-return to the user the token, newly created user info, userId, userCars as an empty array

`login`:
-check if there is a user in the database with this email then compare incoming vs existing passwords.
-create a new authentication token to return.
-return to the user the token, newly created user info, userId, userCars as an empty array. 

---
### Resolver (Car):
>-combined all the car related logic into one resolver function.
-the function will act depending on the "action" value received from the user to add, edit, delete a car.
-before taking action check on the authentication of the user by the token sent on the request object from the isAuth middleware called in app.js before these resolvers.

**addEditDeleteCar:**
`if action === "add"`
-create a new car associated to the request's userId.
-return to the user the token, updated user info, userId, and the newly added userCars.

`if action === "edit"`
-check if the current user is the owner of the car's information.
-store the new car information along with the image url received from multer.
-if there is a new image received remove the old image from the filesystem with clearImage function.
-return to the user the token, updated user info, userId, and the userCars.

`if action === "delete"`
-check if the current user is the owner of the car's information.
-delete the car's image locally.
-delete the car's information from the cars database.
-delete the car's information from the user in the database.
-return to the user the token, updated user info, userId, and the updated userCars.

---

### Resolver (Check):
>-combined all the check related logic into one resolver function (except for deleting history instances).
-the function will act depending on the "action" value received from the user to add, edit, delete a car.
-before taking action check on the authentication of the user by the token sent on the request object from the isAuth middleware called in app.js before these resolvers.
-after taking the needed action return the user, userId, userCars, token

**addEditDeleteCheck:**
`if action === "add"`
-push a new check object to the car's checks array & save the car in the database
 
 `if action === "edit"`
-find the check in question in the car's check array by its received checkIndex.
-find the check instance in this check to be edited by its historyIndex.
-save the car in the database.
 
 `if action === "delete"`
-remove by filtering out the check in question from the car's check array by its received checkIndex.

`if action === "complete"`
-change the checkedOn value of the first instance in this check's history array (i.e last added instance) to today's date.
-put a new empty check in the head of the array (i.e to be the last added).
-save the car with the new check edits.

**deleteCheckHistoryItem:**
-before taking action check on the authentication of the user by the token sent on the request object from the isAuth middleware called in app.js before these resolvers.
-find the check in question in the car's check array by its received checkIndex.
-filter out from this check's history array an instance matching a check instance having the received historyIndex.
-after taking the needed action return the user, userId, userCars, token.

##

  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).