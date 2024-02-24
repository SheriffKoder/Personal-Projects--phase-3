import {

    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,

    mysql,
    graphql,
    sequelize,
    expressjs,

  } from "../public/assets";


  
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
  ];
  

  export const allTechnologies = [
   ...technologies1, ...technologies2, ...technologies3 
  ]
