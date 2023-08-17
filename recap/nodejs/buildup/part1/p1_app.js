

const htmlCode_default = `<html>
                    <head>
                        <title>Amazon</title>
                    </head>
                    
                    <body>
                        <h1>Welcome to Amazon</h1>
                    </body>
                </html>`;

const htmlCode_success = `<html>
                    <head>
                        <title>Amazon</title>
                    </head>
                    
                    <body>
                        <h1>Thanks for visiting Amazon</h1>
                    </body>
                </html>`;


const htmlCode_download = `<html>
                    <head>
                        <title>myPage</title>
                    </head>
                    <body>
                        <h1>Hello myPage</h1>
                        <p>this is a NodeJS page</p>

                        <form action="/order_download" method="POST">
                            <label for="html"> Which Order would you like to view </label>
                            <input id="html" type="text" name="messageName">
                            <button type="submit"> Send </button>
                        </form>

                    </body>
                </html>`;


/*
this app displays a form on the home page
asks for an input
on submit, the user is taken to a success page
*/


const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {


    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write(htmlCode_download);
        return res.end();

    }

    //will be redirected on writing success to this link
    if (url === "/order_download_success") {
        res.setHeader("Content-Type", "text/html");
        res.write(htmlCode_success);
        return res.end();

    }


    if (url === "/order_download" && method === "POST") {


        const requested_order = [];

        req.on("data", (chunks) => {
            requested_order.push(chunks);
        })

        req.on("end", () => {
            const data = Buffer.concat(requested_order).toString();

            console.log(data);
            const parsed_data = data.split("=")[1];
            console.log(parsed_data);

            //redirect or handle error on writing success
            fs.writeFile("requested_order.txt", parsed_data, (err) => {
                res.statusCode = 302;
                res.setHeader("Location", "/order_download_success");
                return res.end();
            });

        });
    }



    //this does not work with redirecting to /order_download_success
    //it works on the recap version though
    //res.setHeader("Content-Type", "text/html");
    //res.write(htmlCode_default);
    //res.end();

});


server.listen(8000);
