## **Richards Real Estate Agency [[ Live Demo ]](https://phase-3-one.vercel.app/)**

>**Description**

A website for a real-estate agency to display their products and news posts.
Which also allows its agents to have customized accounts to add, edit, delete properties and posts for visiting clients to navigate through the properties and book a visit or stay up to date with the latest market/company news.

![desktop screenshot](screenshot.png)

>## **How to use as a visitor**
- open the homepage and start discovering
- recommended properties (auto slider)
- latest products and latest posts by the agency's agents
- switch between the website's light/dark themes from the navigation menu
######
- go to the "all properties" page
- search for a property by its description and use the filter to tune the results by the property's area, price etc.
- use the page numbering to navigate through the results.
- use the arrow icons on the property's image to view the property's different images.
######
- go to the "all posts" page
- checkout all the news and posts submitted by the company from the latest submit.
- use the page numbering to navigate through the results.
######
- go to the "about" page.
- know more about the agency and its location on the map
- send an email to the agency with your inquiry
######
- go to the "property" page
- view the different images of the property from the thumbnail image selector
- checkout the property details
- see also other properties related to this property you may be interested in
- click "book a visit" to send an email with your information to the company regarding this property to contact you back
######
- go to the "post" itself's page
- read the content, see the descriptive picture
- see also other posts related to this property you may be interested in
######

>## **How to use as an agent**
- use the navigation bar user icon to sign-up, sign-in, sign-out.
- when signing-up use ID# value of "1111" to create a normal agent account or "1234" to create an account with admin privileges (view/control/monitor other agents profiles from your profile).
- edit your information values and change your photo.
- add a new property or a new post.
- navigate through your posts/properties through the pagination numbered buttons.
- edit or delete some of your properties or posts.
- mark your property as "Favorite" to be displayed on the homepage's "our recommendations" area.

>**Admin account privileges**
- monitor other agents on your team by seeing their last update, number of properties/posts.
- remove an agent from the website.
- view another agent's profile which includes their information, properties and posts.
- edit other agents' information, properties and posts.
- add for other agents a new property or a post without changing their lastUpdate value.
- return back to your profile.

>## **Technical Functionalities**
- Light/dark mode switcher and a loading UI.
- Recommended properties slider at the homepage that changes properties automatically, pause/resume with user's interaction.
- Navigation links at the top of any page other than the home page to guide the user or get back.
- Image slider on all property cards to navigate through the images the property has. present at (home, all properties and agent profile pages).
- A customized website vertical scroll bar.
- Booking a visit on a property fills up for the user the email content with the details of the property.
- Input validation when signing in, signing up with another validation feedback from the backend.
- Set a lastUpdate, number of properties, number of posts values on agents each time they make a change on a property or post for admins to monitor the agents' activity.
- Set a lastUpdate value on a property when its added or edited, for viewers to know when this property was last updated.
- Changing details for another agent do not change their user profile lastUpdate value but the property or post only will be updated.
- Retrieve the property/post details when editing them for agents to see all the previous details already filling the inputs.
- Save property inputs when adding/editing in uppercase for the filter to have more uniform values like "Rent, Sale" nor "Rent, rent, Sale, sale".
- Customized add image buttons when adding/editing a property or post.
- Integrate the add/edit property/post interfaces within the agent's profile page without routing to a new page.
- Integrate the sign-up/sign-in interfaces within the navigation bar without routing to a new page.
- Use default images if no image is provided when adding a new post, property or a user.
- When visiting another agent's profile as an admin, display to the admin agent that they are on a "view mode".
- Admins can delete an agent from the website/database.
- When signing-up a new agent profile, a new local folder in public/images is created with the new agent's id value, with separate folders to contain future images for profile, posts, properties.
- When deleting a an agent profile, the local folder created for the user "and" its contents will be deleted.
- View (retrieve) products, posts or agents by last added date.


>## **How to use on your computer**
- Clone or download the project folder
- open the folder in your IDE
- open the terminal and run "npm install"
- run "npm run dev" in the terminal after the installation is complete
- create a ".env" file in the root directory and add these keys

>###### GG_Maps_AP = "google maps api key"
>###### GG_Maps_MapId = "google maps map id"
>###### MONGODB_URI = "mongodb+srv://username:pasword@cluster0.jgxkgch.mongodb.net/folder" // MongoDB Atlas database connection string
>###### NEXTAUTH_SECRET = "your next-auth secret"
>###### NEXTAUTH_URL= "your domain or local host"
>######  EmailHost = "amazon aws email API domain"
>###### EmailPort = "port number"
>###### EmailUser = "credentials key"
>###### EmailPass = "credentials password"
>###### myEmail = "a email to send to"









