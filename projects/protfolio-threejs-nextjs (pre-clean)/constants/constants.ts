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
      link: "https://www.x.com"
    },
    {
      name: "linkedin",
      icon: linkedin,
      link: "https://www.x.com"
    },
  ];

  export const goals = [
    {
      title: "Build and Deploy my portfolio",
      progress: "In progress",
      steps: [
        {title: "Deploy website", progress: "In Progress"},
        {title: "Final fixes for all components", progress: "Not Yet"},
        {title: "Make the website responsive", progress: "Not Yet"},
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
      name: "Amazon (Semi-Clone)",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis aut omnis nobis deserunt a, sed, aliquid laboriosam dicta atque dolor ad voluptates velit saepe dignissimos similique quae. Deleniti, animi.
      Voluptates molestiae officia voluptatem rerum, nostrum accusantium deleniti asperiores officiis omnis quibusdam veniam, porro voluptatum pariatur? Modi quidem obcaecati doloremque doloribus ipsum aperiam animi. Debitis harum dolores ipsum pariatur id!`,
      image1: "/images/projects/assets/amazon/wallpaper1.png",
      image2: "/images/projects/assets/amazon/wallpaper2.png",
      imagex: "/images/projects/assets/amazon/wallpaperx.png",
      tech: ["HTML5", "CSS3", "JavaScript", "Accessibility","TypeScript", "ExpressJS", "NodeJS", "MongoDB"],
      link: "https://www.google.com",
      icon: "/images/projects/assets/amazon/amazon-icon.jpg",
      id: "practice-1",
      longerDescription: 
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis aut 
      omnis nobis deserunt a, sed, aliquid laboriosam dicta atque dolor ad voluptates velit saepe 
      dignissimos similique quae. Deleniti, animi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis aut 
      omnis nobis deserunt a, sed, aliquid laboriosam dicta atque dolor ad voluptates velit saepe 
      dignissimos similique quae. Deleniti, animi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis aut 
      omnis nobis deserunt a, sed, aliquid laboriosam dicta atque dolor ad voluptates velit saepe 
      dignissimos similique quae. Deleniti, animi.`,
      type: "site",

    },
    {
      name: "Real-Estate Admin",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis aut omnis nobis deserunt a, sed, aliquid laboriosam dicta atque dolor ad voluptates velit saepe dignissimos similique quae. Deleniti, animi.
      Voluptates molestiae officia voluptatem rerum, nostrum accusantium deleniti asperiores officiis omnis quibusdam veniam, porro voluptatum pariatur? Modi quidem obcaecati doloremque doloribus ipsum aperiam animi. Debitis harum dolores ipsum pariatur id!`,
      image1: "/images/projects/assets/realestateadmin/wallpaper1.png",
      image2: "/images/projects/assets/realestateadmin/wallpaper2.png",
      imagex: "/images/projects/assets/realestateadmin/wallpaperx.png",
      tech: ["HTML5", "CSS3", "JavaScript", "TailwindCSS", "TypeScript", "MongoDB", "NextJS"],
      link: "https://www.google.com",
      icon: "/images/projects/assets/realestateadmin/re-icon.png",
      id: "practice-2",
      longerDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis aut omnis nobis deserunt a, sed, aliquid laboriosam dicta atque dolor ad voluptates velit saepe dignissimos similique quae. Deleniti, animi.`,
      type: "site"

    },
    {
      name: "Car Maintenance 1 (RESTful)",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis aut omnis nobis deserunt a, sed, aliquid laboriosam dicta atque dolor ad voluptates velit saepe dignissimos similique quae. Deleniti, animi.
      Voluptates molestiae officia voluptatem rerum, nostrum accusantium deleniti asperiores officiis omnis quibusdam veniam, porro voluptatum pariatur? Modi quidem obcaecati doloremque doloribus ipsum aperiam animi. Debitis harum dolores ipsum pariatur id!`,
      image1: "/images/projects/assets/carmaint1/wallpaper1.png",
      image2: "/images/projects/assets/carmaint1/wallpaper2.png",
      imagex: "/images/projects/assets/carmaint1/wallpaperx.png",
      tech: ["HTML5", "CSS3", "JavaScript", "TailwindCSS", "TypeScript", "MongoDB", "ReactJS"],
      link: "https://www.google.com",
      icon: "/images/projects/assets/carmaint1/carmaint1-icon.png",
      id: "practice-3",
      longerDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis aut omnis nobis deserunt a, sed, aliquid laboriosam dicta atque dolor ad voluptates velit saepe dignissimos similique quae. Deleniti, animi.`,
      type: "site"
    },
    {
      name: "Car Maintenance 2 (RESTful GraphQL)",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis aut omnis nobis deserunt a, sed, aliquid laboriosam dicta atque dolor ad voluptates velit saepe dignissimos similique quae. Deleniti, animi.
      Voluptates molestiae officia voluptatem rerum, nostrum accusantium deleniti asperiores officiis omnis quibusdam veniam, porro voluptatum pariatur? Modi quidem obcaecati doloremque doloribus ipsum aperiam animi. Debitis harum dolores ipsum pariatur id!`,
      image1: "/images/projects/assets/carmaint2/wallpaper1.png",
      image2: "/images/projects/assets/carmaint2/wallpaper2.png",
      imagex: "/images/projects/assets/carmaint2/wallpaperx.png",
      tech: ["HTML5", "CSS3", "JavaScript", "TailwindCSS", "TypeScript", "MongoDB", "ReactJS", "GraphQL"],
      link: "https://www.google.com",
      icon: "/images/projects/assets/carmaint2/carmaint2-icon.png",
      id: "practice-4",
      longerDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis aut omnis nobis deserunt a, sed, aliquid laboriosam dicta atque dolor ad voluptates velit saepe dignissimos similique quae. Deleniti, animi.`,
      type: "site"

    },
    
    
    
  

  ];

  export const DraftProjects = [
    
  ]


  export const featuredProjects = [
    PracticeProjects[0], PracticeProjects[1], PracticeProjects[2], PracticeProjects[3], 
  ]


  export const allProjects = [
    ...clientProjects, ...PracticeProjects, ...DraftProjects
  ]
  