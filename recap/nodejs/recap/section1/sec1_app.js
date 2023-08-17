

/////////////////////////////////////////////////////////////////////////////////////////////
/*
//just using this line and # node sec1_app.js
console.log("Hello Amazon!");


//import the file system
//store a function output in a string
//store into a file using the file-system module
const fs = require("fs");
let current_time = new Date().toDateString();
fs.writeFileSync("filesystem_output1.txt", `Amazon Website ${current_time}`);



*/


/////////////////////////////////////////////////////////////////////////////////////////////
//spin up a server
/*
const http = require("http");


const server = http.createServer((req, res) => {
    console.log(req);   //many properties to access in the request

});


server.listen(3000);
*/



/////////////////////////////////////////////////////////////////////////////////////////////
//

const http = require("http");
const fs = require("fs");


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

    
let htmlCode2 = `<html>
                    <head>
                        <title>Message Page</title>
                    </head>
                    
                    <body>
                        <h1>Message Page</h1>
                    </body>
                </html>`;


const server = http.createServer((req, res) => {

    //console.log("Url", req.url);
    //console.log("method: " + req.method);
    //console.log(req.headers);
    //console.log("user's operating system is : " + req.headers["user-agent"]);

    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.setHeader("Content-type", "text/html");
        res.write(htmlCode);
        return res.end();
    }


    //when the form will redirect to /message with method post
    if (url === "/message" && method === "POST" ) {

        //the below event functions will be registered internally
        //in njs event emitter registry
        //and not run right away



        //////  Receiving input chunks //////
        const requestDataBody = [];

        //the req.on allows to listen to events like (data-event, end-event)
        //1st argument, data event, fired whenever a new chunk 
            //of data is ready to be read
        //2nd function to be executed on every event fire
        req.on("data", (chunk) => {

            //push can be used on const, as it changes the object behind the object not the object itself
            requestDataBody.push(chunk);

        });



        //////  All received, now store, output the data //////

        //1st argument, end event, fired when finished parsing the incoming request data 
        return req.on("end", () => {

            const parsedBody = Buffer.concat(requestDataBody).toString();

            //console.log(parsedBody);
            //take the second array from the split arrays
            const message = parsedBody.split("=")[1];
            console.log(message);

            //now we have the message
            //write it to the file-system

            //writeFile is higher performance because it never stops/blocks the code or server
            //3rd argument, function, exe on complete, receives error
            fs.writeFile("filesystem_output.txt", message, (err) => {

                //if error, set header to redirection
                //switch to 302 (redirection), set header location (default header accepted by browser)
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();

                //or use
                //res.writeHead(302, {"Location", "/"});
                //return res.end();


            });
        });
    }

    //this is the default response when visiting any page other than
    // "/" or "/message with method=post"
    res.setHeader("Content-Type", "text/html");
    res.write(htmlCode2);
    res.end();

    

});


server.listen(3000);
                