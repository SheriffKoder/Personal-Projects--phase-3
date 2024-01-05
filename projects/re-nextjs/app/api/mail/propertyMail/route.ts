
//Part 11.2 - send email with data passed to this api

import nodemailer from "nodemailer";

export const POST = async (req:Request) => {

    try {

        //get the url and the user session
        const emailBody = await req.json();
        console.log(emailBody);

        //1
        const transporter = nodemailer.createTransport({
            host: process.env.EmailHost,
            port: process.env.EmailPort as unknown as number, //to solve the "no overload" ts error
            secure: false, //true for 465, false for other ports
            auth: {
                user: process.env.EmailUser,
                pass: process.env.EmailPass
            }
        });

        //2
        const mailOptions = {
            from: "kodersheriff@gmail.com",
            to: "kodersheriff@gmail.com",
            replyTo: emailBody.email,
            subject: "(TEST) NODE AMZ: Password Reset!",
            html: `
                <h3> New Inquiry </h3>
                <p> Inquiry about Property: ${emailBody.content.split("property")[1]}</p>
                <div>
                    <h5>Client Info</h5>
                    <p> name: ${emailBody.name} </p>
                    <p> phone: ${emailBody.number} </p>
                    <p> email: ${emailBody.email} </p>
                <div>
                `
        };
        
        //3 - Send the email
        await transporter.sendMail(mailOptions);


        // 200: operation succeeded
        return new Response(JSON.stringify("Email Sent"), {status: 200});

    } catch {
        return new Response(JSON.stringify("Failed to fetch agent's info"), {status: 500});
    }

}