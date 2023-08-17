/*

/////////////////////////////////////////////////////////////////////////////////////////////
Javascript runs on Google's V8 engine to run on the browser
engine: compile to machine code using c++
//weakly typed language, no explicit type assignment, data types can be switched dynamically
//object oriented language, data can be organized in logical objects, primitive and reference types
//versatile language, runs in a browser and on a pc/server, broad variety of tasks

////as a security
//each function is only exposed to itself and not accessible
//by the other functions
//so by default we have this separation by how js works


/////////////////////////////////////////////////////////////////////////////////////////////
NodeJS (javascript runtime) 
"allows to use js to make servers, so a webapp can be made in one language
allows js to run on devices/servers other than the browser
and is never exposed to the public

so we can do using nodejs the following with js code
- access the file system read/write
- connect to "databases"
- do "authentication" outside of the browser (safer)
- do input "validation", as servers are sheltered from user manipulation
- "business logic" (handle requests/files)
- utility scripts, build tools, etc.



/////////////////////////////////////////////////////////////////////////////////////////////
//////what is the process from the client side
//user/client (browser)
//enters url
//Domain lookup on DNS name to ip address of the server requested
//the browser then sends a request to the given ip address of the server

//and handling requests is what we do with node.js



/////////////////////////////////////////////////////////////////////////////////////////////
//////how nodejs works
we write the server in js code and run the server
    (1) start script
    (2) enter an event loop as long as there are event listeners registered internally like createServer
    (3) listen for incoming requests
    (4) //handle requests (what we code)
    (5) process.exit(); optional if want to exit after handling request


//the event loop (2)
- nodejs keeps tack of its open event listeners
- by a counter reference "refs" that increments 
- by one for every new event listener that is registered
- or future work it has to do
- and reduce by 1 for every event listener it does not need anymore/finished
- aware/handle async event callbacks with some order to be executed when they are fired
- the event loop will be always running as createServer never finish by default

//node.js runs non-blocking js code and uses
//an event driven code event loop for running your logic


- manages the code
- helps when there are many incoming requests, it is fast, multi-threading (multi-task)
- keeps the server always ready



//Handling Requests
- communicating with a database that runs on a separate database server
- reached from your backend
- is done through "routes" that handle incoming requests and do tasks with it


//Server Response
- return data/response to the user based on the request
- the response can be html/json/xml/files/dynamic-content-html


//requests and responses have descriptive headers
- req/res are done through protocols like (standardized way of communicating/rules)
- that defines how a valid request looks like and how data should be transferred between the browser/server
- protocols understood by the browser/server, 
- hyper text transfer protocol
- hyper text transfer protocol secure (ssl encryption turned on, encrypt transmitted data)


//////handling long time taking operations
//worker pool; manages these
//runs on different threads
//detached from the code/request/event-loop
//connects to the event loop once the worker is done
//then it will trigger the callback for the readfile operation
//and this will end up in the event loop and the appropriate callBack will be executed




/////////////////////////////////////////////////////////////////////////////////////////////
//modules
core-modules: http, https, fs, path, os

//http; server launch, send requests (also to another server or two way communicating servers)
//https; launch a ssl encoded server
//fs; file system
//path; use path of files on any operating systems
//os; a package that helps with os relevant info etc.


/////////////////////////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////////////////////////////
//ways of using nodejs

//////(REPL method), no saving, # node
//////EX1:
//download and install nodejs from their website
// node -v to check on njs version
//# node , will get into interactive mode then you can write js code in the terminal


//////(Executing method), file saving, # node file.js
//////EX2:
//write a js code in the .js file and execute # node filename.js in the terminal
console.log("Hello from Node.js");


//////EX3: (Importing modules)
//use file system core module to output a string to a desired file
like //require("node-module").moduleMethod("file", "string");

//output a normal string using file-system module
require("fs").writeFileSync("practice1_output.txt", "this is the output for practice1 ex3");


//output js code, must use toString
let myFunction = new Date().getFullYear();
let myFunction_inStringFormat = myFunction.toString();
require("fs").writeFileSync("practice1_output.txt", `We are in ${myFunction_inStringFormat}`);
# node practice1.js

//const somefile = require("./fileName.js"); 
//if the fileName is the same a core module the core module will be used
//local files start with "./"



/////////////////////////////////////////////////////////////////////////////////////////////
//inside the node.js code

//createServer takes a function that will run on each incoming request to the server
//createServer returns a server

//req: request, res: response
//req: request object created by nodejs, data of incoming request 
//request happened by user visiting the host address
//req.url, req.method, req.headers are the items of interest in the request
//req.headers : host/accept file type, http version
//req.url on localhost3000 is "/"
//req.method GET on incoming request



//can access the request's details from chrome developer tools
//>network > refresh page > local host > content-type html etc.

//GET: when you click a link or enter a url
//POST: has to be created by you by such a form, also other js ways available
//casing does not matter





//form will send a POST request to /message
//form will detect any inputs with name-attr, to put that name-attr in the request

let htmlCode = `<html>
                    <head>
                        <title>myPage</title>
                    </head>
                    <body>
                        <h1>Hello myPage</h1>
                        <p>this is a NodeJS page</p>

                        <form action="/message" method="POST">
                            <label for="html"> Enter Message </label>
                            <input id="html" type="text" name="messageName">
                            <button type="submit"> Send </button>
                        </form>

                    </body>
                </html>`;

//form action, url where the generated request should be sent to
//form method, use to POST a request to server
//input name-attr, to make it accessible via that name-attr
//button type submit, will send a new request, automatically targeting the host it is running og


//spin up a server

const http = require("http");


const server = http.createServer((req, res) => {
    console.log(req);   //many properties to access in the request

});


server.listen(3000);




//can access many properties on the request
req.url
req.method
req.headers
req.headers["user-agent"]


//NodeJS will add an "internal event listener" for the end-event
//which will be trigged when nodejs finishes parsing the request and call its function


//Buffer; a global object in NodeJS, a bus containing our data and waits to be used
const parsedBody = Buffer.concat(requestDataBody).toString();


//**can put the function inside the createServer in an outside file
//export it from there and import it
//the exported files are locked, not accessible from outside
//cannot change it but can read from outside

//routes.js
//export.exportedFunction = constantFunction;

//app.js
// const exportedFile = require(./routes.js)
// createServer(exportedFile.exportedFunction);





















*/