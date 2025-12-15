

//Part 11.2 - send email with data passed to this api

import nodemailer from "nodemailer";

// if you created a new key the IAM pass should be converted using a python script as mentioned here
// https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html


export const POST = async (req:Request) => {

    try {

        //get the url and the user session
        const emailBody = await req.json();
        console.log(emailBody);

        //1
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        //2
        const mailOptions = {
            from: "kodersheriff@gmail.com",
            to: "kodersheriff@gmail.com",
            replyTo: "kodersheriff@gmail.com",
            subject: "(Nodemailer) Portfolio e-mail",
            html: `
                <h2> New Email </h2>
                <h4> From </h4>
                <p> name: ${emailBody.name} </p>
                <p> email: ${emailBody.email} </p>
                <div>
                    <h4>Email Body</h4>
                    <p>${emailBody.content}</p>
                <div>
                `
        };
        
        //3 - Send the email
        await transporter.sendMail(mailOptions);
        

        // 200: operation succeeded
        return new Response(JSON.stringify("Email Sent"), {status: 200});


    } catch {
        return new Response(JSON.stringify("Failed to send email"), {status: 500});
    }

}