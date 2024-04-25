import {

    javascript,
    typescript,
    html,
    css,
    reactjs,
    nextjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,

    mysql,
    graphql,
    sequelize,
    expressjs,
    acc,

    x,
    linkedin,
    github

  } from "../public/assets";


  //////////////////////////////////////////////////////////////

  export const socials = [
    {
      name: "x",
      icon: x,
      link: "https://twitter.com/KoderXE"
    },
    {
      name: "linkedin",
      icon: linkedin,
      link: "https://www.linkedin.com"
    },
  ];

  // Done, In Progress, Not Yet
  export const goals = [
    {
      title: "Practice projects final fixes",
      progress: "In progress",
      steps: [
        {title: "Final fixes for all previous projects", progress: "In Progress"},
        {title: "Deploy projects to redirect from the portfolio website links", progress: "In Progress"},
      ]
    },
    {
      title: "Build and Deploy my portfolio",
      progress: "Done",
      steps: [
        {title: "Deploy website", progress: "Done"},
        {title: "Final fixes for all components", progress: "Done"},
        {title: "Make the website responsive", progress: "Done"},
        {title: "Sort the home components", progress: "Done"},
        {title: "Design, build and style all the sites components", progress: "Done"}

      ]
    },
    {
      title: "Learn: ThreeJS and modern animations",
      progress: "Done",
      steps: []
    },
    {
      title: "Practice: convert the (Car Mainenance App)'s API to a GraphQL version",
      progress: "Done",
      steps: []
    },
    {
      title: "Practice: make a web-app with ReactJS and Mongoose (RESTful API) as a Database (Car Maintenance App)",
      progress: "Done",
      steps: []
    },
    {
      title: "Practice: make a website using NextJS with a Mongoose Database (Real-Estate Admin website)",
      progress: "Done",
      steps: []
    },
    {
      title: "Learn: a front-end framework (ReactJS, NextJS)",
      progress: "Done",
      steps: []
    },
    {
      title: "Practice: make a website and use #1 skills and hookup with a backend for storage (Amazon clone website)",
      progress: "Done",
      steps: []
    },
    {
      title: "Learn: how to setup a back-end using MongoDB/Mongoose",
      progress: "Done",
      steps: []
    },
    {
      title: "Learn: HTML, CSS, Javascript #1",
      progress: "Done",
      steps: []
    },


  ]


  //////////////////////////////////////////////////////////////
  
  export const technologies1 = [
    {
      name: "HTML5",
      icon: html,
    },
    {
      name: "CSS3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "ReactJS",
      icon: reactjs,
    },
    {
      name: "NextJS",
      icon: nextjs,
    },
    {
      name: "TailwindCSS",
      icon: tailwind,
    },
    {
      name: "ThreeJS",
      icon: threejs,
    },

  
  ];
  
  export const technologies2 = [
  
    {
      name: "ExpressJS",
      icon: expressjs,
    },
    {
      name: "NodeJS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },

    {
      name: "GraphQL",
      icon: graphql,
    },

  
  ];

  export const technologies3 = [
    {
      name: "git",
      icon: git,
    },
    {
      name: "mySQL",
      icon: mysql,
    },
    {
      name: "Sequelize",
      icon: sequelize,
    },
    {
      name: "Accessibility",
      icon: acc,
    },
  ];
  

  export const allTechnologies = [
   ...technologies1, ...technologies2, ...technologies3 
  ]


  //////////////////////////////////////////////////////////////


 


  export const clientProjects = [

  ]

  export const PracticeProjects= [
    {
      name: "Amazon (Partial-Clone)",
      description: `A copy of amazon.eg shopping website. Create an account, select and order products or post your item for sale on the website.`,
      image1: "/images/projects/assets/amazon/wallpaper1.png",
      image2: "/images/projects/assets/amazon/wallpaper2.png",
      imagex: "/images/projects/assets/amazon/wallpaperx.png",
      tech: ["HTML5", "CSS3", "JavaScript", "Accessibility","TypeScript", "ExpressJS", "NodeJS", "MongoDB"],
      link: "https://amazon-nodejs.onrender.com",
      icon: "/images/projects/assets/amazon/amazon-icon.jpg",
      id: "practice-1",
      longerDescription:
      `
      <h2>
      A trial to replicate amazon.eg shopping website, the main functionality and design is complete
      but some functionalities are yet to be added.<br/>
      </h2>
      <br/>
      
      <h3>How to use </h3><br/>
      - sign-up/sign-in from the account button on the navigation bar or the mobile's menu.<br/>
      - move your mouse over the account button or use the mobile menu to add a product or manage your products on sale.<br/>
      <br/>
      <h3> What users can do </h3><br/>
      - account sign-up, sign-in, sign-out and reset-password via email.<br/>
      - view all products posted by other accounts.<br/>
      - add product to cart with the desired quantity.<br/>
      - view your cart from "/cart" page to delete items, change quantity or proceed to buy.<br/>
      - when on the /checkout page, just click order to create an order.<br/>
      - make a virtual payment for your order with stripe.<br/>
      - view your orders from the "/orders" page.<br/>
      - view your order's invoice and download as a pdf file.<br/>
      <br/>
      Also be a seller and:<br/>
      - add a new product, edit product.<br/>
      - view your products, see how many are sold/in-stock.<br/>
      - decrease price to show a discount percentage to users checking your item's page.<br/>
      <br/>
      <br/>

      <h3> Introduction </h3><br/>
      A trial to replicate amazon.eg website.<br/>
      this is my first personal real project in web-development.<br/>
      I wanted to experience making a copy of an advanced website like Amazon.<br/>
      and to put the skills I learnt in the NodeJS course into practice.<br/>
      building on <a href="https://phase2-nodejs.onrender.com/products">this project</a> which is a code along project from a nodejs course.<br/>
      check it out to see the difference between it project and the personalized amazon version.<br/>
      <br/>
      I spent a lot of time trying to mirror some of the design in CSS and HTML
      so the project can have a similar front-end design as the original
      with a responsive design (which was not present on the original desktop website at the time)
      with a heavy implementation of accessibility practices
      <br/>
      however I did not complete it and had to move to other projects as I started to learn other technologies 
      like ReactJS/NextJS, which would require constructing the code in a different way
      and also as I have new design/functionality ideas in mind wanted to implement in these other projects.
      but the missing parts in this project were implemented in these future projects
      <br/>
      <br/>

      <h3> Functionalities in this website </h3><br/>
      Account management: <br/>
      - sign-up/sign-in, reset password via an email with an expiry time.<br/>
      - front-end and backend input validation.<br/>
      <br/>
      Product management: <br/>
      - Add, edit, delete products as a seller.<br/>
      - get notifications for incorrect inputs.<br/>
      <br/>
      Cart/Order management:<br/>
      - View products then add to & manage your cart.<br/>
      - get notified with out of stock or low stock items.<br/>
      - Confirm an order and make a payment.<br/>
      - view your orders and their "invoice" and download it as a pdf.<br/>
      <br/>
      <br/>
      <h3> Technologies in this website </h3><br/>
      - Front-end: vanilla html/css/javascript - ejs templating engine<br/>
      - Back-end: expressJS, NodeJS, MongoDB, Typescript<br/>
      - Front-end animations and input validation made with jQuery<br/>
      <br/>
      <h3> Javascript libraries used in this project: </h3><br/>
      - bcrypt, csurf, connect-flash, nodemailer, express-validator, express-session, multer, pdfkit, stripe<br/>
      <br/>
      <br/>
      <h3> Yet to be implemented </h3><br/>
      - checkout page (for now you can just click "order" there).<br/>
      - product search*, sort.<br/>
      - view products by their categories (from the navigation bar and the side menu).<br/>
      - change language and location from the navigation bar.<br/>
      - save for later and buy it again cart page functionalities.<br/>
      - add customer reviews and rating stars.<br/>
      - add multiple images*.<br/>
      - 404 page.<br/>
      - signup mobile verification with sms
      - pay from a checkout page styled like amazon's website.<br/>
      
      (implemented in newer projects)*
      `
      ,
      type: "site",
      date: "2023"

    },
    {
      name: "Real-Estate Admin",
      description: `Be a real estate agent in Richard's real-estate agency.
      Create an account to add, edit and delete blog-posts/properties. Manage other agents on your team.
      Let clients see your latest entries and surely they will book a visit on a property with you!
      `,
      image1: "/images/projects/assets/realestateadmin/wallpaper1.png",
      image2: "/images/projects/assets/realestateadmin/wallpaper2.png",
      imagex: "/images/projects/assets/realestateadmin/wallpaperx.png",
      tech: ["HTML5", "CSS3", "JavaScript", "TailwindCSS", "TypeScript", "MongoDB", "NextJS"],
      link: "https://phase-3-one.vercel.app/",
      icon: "/images/projects/assets/realestateadmin/re-icon.png",
      id: "practice-2",
      longerDescription: 
      `
        <h2>
            A website for a real-estate agency to display their products and news posts.<br/>
            Which also allows its agents to have customized accounts to add, edit, delete properties and posts
            for visiting clients to navigate through the properties and book a visit or stay up to date with the latest market/company news.
        </h2>
        <br/>
        <br/>
      
        <h3>How to use as a visitor</h3><br/>
        open the homepage and start discovering<br/>
        - recommended properties (auto slider)<br/>
        - latest products and latest posts by the agency's agents<br/>
        - switch between the website's light/dark themes from the navigation menu <br/>
        <br/>
        go to the "all properties" page<br/>
        - search for a property by its description and use the filter to tune the results by the property's area, price etc.<br/>
        - use the page numbering to navigate through the results.<br/>
        - use the arrow icons on the property's image to view the property's different images.<br/>
        <br/>
        go to the "all posts" page<br/>
        - checkout all the news and posts submitted by the company from the latest submit.<br/>
        - use the page numbering to navigate through the results.<br/>
        <br/>
        go to the "about" page.<br/>
        - know more about the agency and its location on the map<br/>
        - send an email to the agency with your inquiry<br/>
        <br/>
        go to the "property" page<br/>
        - view the different images of the property from the thumbnail image selector<br/>
        - checkout the property details<br/>
        - see also other properties related to this property you may be interested in<br/>
        - click "book a visit" to send an email with your information to the company regarding this property to contact you back<br/>
        <br/>
        go to the "post" itself's page<br/>
        - read the content, see the descriptive picture<br/>
        - see also other posts related to this property you may be interested in<br/>
        <br/>
        <br/>      
        <h3>How to use as an agent</h3><br/>
        - use the navigation bar user icon to sign-up, sign-in, sign-out.<br/>
        - when signing-up use ID# value of "1111" to create a normal agent account or "1234" to create an account with admin privileges (view/control/monitor other agents profiles from your profile).<br/>
        - edit your information values and change your photo.<br/>
        - add a new property or a new post.<br/>
        - navigate through your posts/properties through the pagination numbered buttons.<br/>
        - edit or delete some of your properties or posts.<br/>
        - mark your property as "Favorite" to be displayed on the homepage's "our recommendations" area.<br/>
        <br/>
        Admin account privileges<br/>
        - monitor other agents on your team by seeing their last update, number of properties/posts.<br/>
        - remove an agent from the website.<br/>
        - view another agent's profile which includes their information, properties and posts.<br/>
        - edit other agents' information, properties and posts.<br/>
        - add for other agents a new property or a post without changing their lastUpdate value.<br/>
        - return back to your profile.<br/>
        <br/>
        <br/>
        <br/>
        <h3>Technical Description</h3><br/>
        This is my first ReactJS/NextJS/TailwindCSS personal project,
        I built it while still learning how to use these frameworks with Typescript in the same time,
        so there was a learning curve involved.<br/>
        I had a lot of front-end design features and back-end functionalities I wanted to implement which are successfully added to the website.<br/>
        this project was built upon <a href="https://phase2-nodejs.onrender.com/products">this</a>
        code-along nextJS application tutorial, which you can check out and see the difference as I have heavily amplified and customized what is practiced there.<br/>
        <br/>
        Javascript libraries used<br/>
        - mongoDB, mongoose, bcrypt, nodemailer, react-google-maps, next-auth (authentication and sessions).<br/>
        <br/>
        <br/>
        <h3>Technical Functionalities</h3><br/>
        - Light/dark mode switcher and a loading UI.<br/>
        - Recommended properties slider at the homepage that changes properties automatically, pause/resume with user's interaction.<br/>
        - Navigation links at the top of any page other than the home page to guide the user or get back.<br/>
        - Image slider on all property cards to navigate through the images the property has. present at (home, all properties and agent profile pages).<br/>
        - A customized website vertical scroll bar.<br/>
        - Booking a visit on a property fills up for the user the email content with the details of the property.<br/>
        - Input validation when signing in, signing up with another validation feedback from the backend.<br/>
        - Set a lastUpdate, number of properties, number of posts values on agents each time they make a change on a property or post for admins to monitor the agents' activity.<br/>
        - Set a lastUpdate value on a property when its added or edited, for viewers to know when this property was last updated.<br/>
        - Changing details for another agent do not change their user profile lastUpdate value but the property or post only will be updated.<br/>
        - Retrieve the property/post details when editing them for agents to see all the previous details already filling the inputs.<br/>
        - Save property inputs when adding/editing in uppercase for the filter to have more uniform values like "Rent, Sale" nor "Rent, rent, Sale, sale".<br/>
        - Customized add image buttons when adding/editing a property or post.<br/>
        - Integrate the add/edit property/post interfaces within the agent's profile page without routing to a new page.<br/>
        - Integrate the sign-up/sign-in interfaces within the navigation bar without routing to a new page.<br/>
        - Use default images if no image is provided when adding a new post, property or a user.<br/>
        - When visiting another agent's profile as an admin, display to the admin agent that they are on a "view mode".<br/>
        - Admins can delete an agent from the website/database.<br/>
        - When signing-up a new agent profile, a new local folder in public/images is created with the new agent's id value, with separate folders to contain future images for profile, posts, properties.<br/>
        - When deleting a an agent profile, the local folder created for the user "and" its contents will be deleted.<br/>
        - View (retrieve) products, posts or agents by last added date.<br/>
        <br/>
        - Images input management:<br/>
        you do not need to have all the images inputs to be filled when adding/editing a property.<br/>
        for example if you remove the first image input while there is a second image, 
        the second image will keep its order as the second input/image in the editing interface as a reference for agents,
        but for clients they will see only the images available (in property card image sliders and the property's page).<br/>
        <br/>
        <br/>
        Yet to be implemented<br/>
        - properties/posts you may be interested in should be retrieved based on the current property/post's category/price range for example.<br/>
        - clicking on the agent's name from property/post page redirect to a page containing the agent's submissions.<br/>
        - property and post input validation.<br/>
        - use a cloud image storage service to store images and return back their "urls" to be stored in the database.<br/>
        - delete the agent's old image when updating their photo (if no cloud service is used).<br/>
        `,

      type: "site",
      date: "2024"

    },
    {
      name: "Car Maintenance 1 (RESTful)",
      description: `saepe dignissimos similique quae. Deleniti, animi. Voluptates molestiae officia voluptatem rerum, nostrum accusantium deleniti asperiores officiis omnis quibusdam veniam, porro voluptatum pariatur? Modi quidem obcaecati doloremque doloribus ipsum aperiam animi. Debitis harum dolores ipsum pariatur id!`,
      image1: "/images/projects/assets/carmaint1/wallpaper1.png",
      image2: "/images/projects/assets/carmaint1/wallpaper2.png",
      imagex: "/images/projects/assets/carmaint1/wallpaperx.png",
      tech: ["HTML5", "CSS3", "JavaScript", "TailwindCSS", "TypeScript", "MongoDB", "ReactJS"],
      link: "https://www.google.com",
      icon: "/images/projects/assets/carmaint1/carmaint1-icon.png",
      id: "practice-3",
      longerDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis aut omnis nobis deserunt a, sed, aliquid laboriosam dicta atque dolor ad voluptates velit saepe dignissimos similique quae. Deleniti, animi.`,
      type: "site",
      date: "2024"
    },
    {
      name: "Car Maintenance 2 (RESTful GraphQL)",
      description: `saepe dignissimos similique quae. Deleniti, animi. Voluptates molestiae officia voluptatem rerum, nostrum accusantium deleniti asperiores officiis omnis quibusdam veniam, porro voluptatum pariatur? Modi quidem obcaecati doloremque doloribus ipsum aperiam animi. Debitis harum dolores ipsum pariatur id!`,
      image1: "/images/projects/assets/carmaint2/wallpaper1.png",
      image2: "/images/projects/assets/carmaint2/wallpaper2.png",
      imagex: "/images/projects/assets/carmaint2/wallpaperx.png",
      tech: ["HTML5", "CSS3", "JavaScript", "TailwindCSS", "TypeScript", "MongoDB", "ReactJS", "GraphQL"],
      link: "https://www.google.com",
      icon: "/images/projects/assets/carmaint2/carmaint2-icon.png",
      id: "practice-4",
      longerDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis aut omnis nobis deserunt a, sed, aliquid laboriosam dicta atque dolor ad voluptates velit saepe dignissimos similique quae. Deleniti, animi.`,
      type: "site",
      date: "2024"

    },
    
    
    
  

  ];

  export const DraftProjects = [
    {
      // phase2/courses/nodejs/section22 
      name: "Shop (express.js)",
      description: `A simple shop application with the ability to add/delete products to/from a database `,
      image1: "/images/projects/assets/drafts/shopexpress/wallpaper1.png",
      image2: "",
      imagex: "",
      tech: ["HTML5", "CSS3", "JavaScript", "ExpressJS", "NodeJS", "MongoDB"],
      link: "https://phase2-nodejs.onrender.com/products",
      icon: "/images/projects/assets/drafts/shopexpress/shopexpress.png",
      id: "draft-1",
      longerDescription: 
      `A simple CRUD shop website built during Maxmillan's Nodejs course. 
      <br\>built with basic express.js and additional helper libraries to handle the received and sent information.
      <br\><br\>
      the front-end is constructed with "ejs", a HTML/CSS/Javascript templating engine.
      <br\>using the MVC (Model-view-controller) software architecture for code organization
      <br\>and using express middlewares that forward to routes then use controller functions.
      <br\>used helper libraries like (multer: to store images locally, csrf protections, flash: to send messages to the front end as a response from the controller functions, express-session)
      `,
      type: "site",
      date: "2023"

    },
  ]


  export const featuredProjects = [
    PracticeProjects[0], PracticeProjects[1], PracticeProjects[2], PracticeProjects[3], 
  ]


  export const allProjects = [
    ...clientProjects, ...PracticeProjects, ...DraftProjects
  ]
  


/*
  <h2>
  description
  <br/>
  </h2>
  <br/>
  
  <h3>How to use </h3><br/>
  - 1 <br/>
  - 2 <br/>
  <br/>
  
  <h3> What users can do </h3><br/>
  - 1 <br/>
  - 2 <br/>
  
  <br/>
  Also be a seller and:<br/>
  - 1 <br/>
  - 2 <br/>
  <br/>
  <br/>

  <h3> Introduction </h3><br/>
  <br/>
  <br/>
  <a href="https://phase2-nodejs.onrender.com/products">this project</a><br/>
  <br/>
  
  <br/>
  <br/>

  <h3> Functionalities in this website </h3><br/>
  F1 <br/>
  - 1 <br/>
  - 2 <br/>
  <br/>
  F2 <br/>
  - 1 <br/>
  - 2 <br/>
  <br/>
  
  <br/>
  <br/>

  <h3> Technologies in this website </h3><br/>
  - 1 <br/>
  - 2 <br/>
  <br/>

  <h3> Javascript libraries used in this project: </h3><br/>
  - <br/>

  <br/>
  <br/>

  <h3> Yet to be implemented </h3><br/>
  - 1 <br/>
  
  (implemented in newer projects)*
  `
*/

