
//# sudo npm install -g typescript  //(33.0.1)
//# tsc --init //(33.0.4) add a tsconfig.json file

//running # "tsc app.js" will not take the config file into account or ignored
//running # "tsc" will compile all TS files in the folder while taking the config file into account


const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;

//the ! means, that the expression before it could theoretically be null
//but we know that it isn't
const buttonElement = document.querySelector("button")!;



//Definitions
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

//Array of numbers (generics)
const numResults : Array<number> = [];
//or
//const numResults: number[] = [];


//Array or strings
const textResults: string[] = [];



//the ! means, that the expression before it could theoretically be null
//but we know that it isn't



///////////////////////////////////////////////////////////////////////////
//(aliases/union types) combination of types - custom type
type NumOrString = number | string;
type ObjectResult = { val: number; timestamp: Date};

interface ObjectResultInterface {
    val: number;
    timestamp: Date
}


//Usage
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

//function printResult(resultObj: ObjectResultInterface) {
//function add(num1: number | string, num2: number | string) {
function add(num1: NumOrString, num2: NumOrString) {

    //(33.0.5) type guard
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }

  if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + num2;
  }

  //if we have number/string combination
  //convert both to a number
  return (+num1) + (+num2);

}


buttonElement.addEventListener("click", () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;

    //value will always return a string, so the IDE marks num1
    //to solve this we will convert it to a number with +
    //this is what TS is about, forced to write cleaner code by listening to the IDE

    const result = add(+num1, +num2); //convert to numbers and add
    const stringResult = add(num1, num2); //add numbers or concat strings

    numResults.push(result as number);
    textResults.push(stringResult as string);


});

//but TS does not know the type of the result to use split on it
//so will add generic <> to define the result of the resolve
const myPromise = new Promise<string>((resolve, reject) => {
  
    setTimeout(() => {
      resolve("It worked!");
    }, 1000);
  
  });
  
  myPromise.then((result) => {
    console.log(result.split("w"));
  });
  




// const body = req.body as RequestBody;
// const params = req.params as RequestParams;
