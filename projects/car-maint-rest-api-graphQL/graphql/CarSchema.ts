

const {buildSchema: CarSchema} = require("graphql");

// ! for required


//Define types as in the models
//Define types for the form inputs
//String, Int, 

/*




the rootQuery fro example
    has a value that will be filled by text(String type)
    for each value we will have a function for it in the resolver
    
    value which returns the type defined like String etc.
    or another type which will be an object of the sub type

    when sending a query {"query": {value: {selectedKeyFromObject selectedKeyFromObject}}}

schema {} lets you define all the queries you want to have
the query: "return type for the query"

///another explanation: 
the schema points to a query
this query contains the resolver functions
that do return the type assigned

can also point to a mutation:name
this mutation contains resolver functions that have props (inputs)
these props will have a type
so will have something like 
    input userData {} << this is the type of input

/////

so the client query will look like
to send data and receive from the userReturn the id and password
mutation {
  	signUp(userInput:{
      email: "sheriff@email.com",
      name: "sherif",
      password: "tester"
      
    })
  	{
      _id
      email
    }
}





// the checkModel is not used or needed
// the user query is not used but needed, as you need to have a dummy rootQuery at least defined here
// we are only using one resolver here that depends on CarInputType and userResolverReturn complex type 


*/


module.exports = CarSchema(`

    type checksType {
        addDate: String
        initialCheck: String
        nextCheck: String
        checkedOn: String
        notes: String
    }

    type checkModel {
        name: String!
        color: String!
        history: [checksType]
    }

    type Car {
        _id: ID
        brand: String
        carModel: String
        image: String
        lastCheck: String
        nextCheck: String
        userId: String
        checks: [checkModel]
        createdAt: String!
        updatedAt: String!
    }

    type UserResolverReturn {
        _id: ID
        email: String
        name: String
        password: String
        cars: [Car]
        token: String
    }







    input checksTypeInput {
        addDate: String
        initialCheck: String
        nextCheck: String
        checkedOn: String
        notes: String
    }

    input checkModelInput {
        name: String!
        color: String!
        history: [checksTypeInput]
    }






    input CarInputType {
        brand: String!
        carModel: String!
        image: String!
        _id: ID!
        action: String!
    }


    type dummyStringReturn {
        text: String!
    }



    input UserLoginInputType {
        email: String!
        password: String!
    }


    type RootMutation {
        addEditDeleteCar(carInput: CarInputType ): UserResolverReturn!
    }

    type RootQuery {
        dummyQuery(userInput: UserLoginInputType ) : dummyStringReturn!
    }

    schema {
        mutation: RootMutation
        query: RootQuery
    }




`)



/*

   type AuthData {
        token: String!
        userId: String!
    }


    type CarInputData {
        brand: String!
        carModel: String!
        image: String
        lastCheck: String
        nextCheck: String
    }




*/