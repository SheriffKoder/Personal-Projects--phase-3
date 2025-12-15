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
    chartjs,
    gsap,
    firebase,
    stripe,
    ai,

    mysql,
    graphql,
    sequelize,
    expressjs,
    acc,
    sql,
    figma,

    x,
    linkedin,
    github,
    pinterest,

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
      link: "https://www.linkedin.com/in/sherif-khodeir-webdev/"
    },
    {
      name: "github",
      icon: github,
      link: "https://github.com/SheriffKoder/"
    },
    {
      name: "pinterest",
      icon: pinterest,
      link: "https://pinterest.com/sheriffkoder7"
    },
  ];

  // Done, In Progress, Not Yet
  export const goals = [

    //
    {
      title: "Improve my knowledge & skills (courses)",
      progress: "In progress",
      steps: [
        {title: "Algorithms and Data Structures Masterclass", progress: "In Progress"},
        {title: "Next.js 14 & React Complete course", progress: "In Progress"},
        {title: "Learn about Next.js 14 & React", progress: "Done"},
        {title: "Learn NodeJS/MongoDB to setup back-end APIs for database storage", progress: "Done"},
        {title: "Complete the Odin project to Learn advanced HTML, CSS, Javascript and other skills", progress: "Done"},

      ]
    },

    //
    {
      title: "Learn to develop better UI components",
      progress: "In progress",
      steps: [
        {title: "Learn and use GSAP", progress: "In Progress"},
        {title: "Learn and use Three.js", progress: "Done"},
        {title: "Learn and use framerMotion", progress: "Done"},
      ]
    },

    {
      title: "Practice projects final fixes",
      progress: "Done",
      steps: [
        {title: "Final fixes for all previous projects", progress: "Done"},
        {title: "Deploy projects to redirect from the portfolio website links", progress: "Done"},
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
      title: "Practice: make a website and use #1 skills and hookup with a backend for storage (Amazon clone website)",
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
    {
      name: "Accessibility",
      icon: acc,
    },
    {
      name: "ChartJS",
      icon: chartjs,
    },
    {
      name: "GSAP",
      icon: gsap,
    },
    {
      name: "Stripe",
      icon: stripe,
    },
    {
      name: "AI",
      icon: ai,
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
    {
      name: "SQL",
      icon: sql,
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
      name: "Firebase",
      icon: firebase,
    },

  
  ];

  export const technologies3 = [
    {
      name: "git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },

  ];
  

  export const allTechnologies = [
   ...technologies1, ...technologies2, ...technologies3 
  ]


  //////////////////////////////////////////////////////////////


// Templates
  // = Template 1
  // = Template 2
  // = Template 3
  // = Dashboard template 1
  // = Dashboard template 2
  // - Form
  // Food Ordering App <<
  // = HubStaff - Time Tracker
  // = REI Renewable Energy questionnaire
  // - MIS V3
  // = Keyboard
  // = Particles
  // = Angles
  // = AI Booking assistant
  // - Ready-table
  // = AI Products 2
 /*

Template 1: 
- Add notes, upload, move to template 2 responsive adjustment cars

 */


  export const clientProjects = [

    // Angles
    {
      id: "angles-operations-platform",
      name: "Angels - Operations Platform",
      description: `A comprehensive healthcare operations management system featuring advanced virtualized tables, role-based access control, and client management capabilities for managing workforce, compliance, operations, and client care delivery.`,
      image1: "/images/projects/assets/angles-operations-platform/wallpaper-1.png",
      image2: "/images/projects/assets/angles-operations-platform/wallpaper-2.png",
      imagex: "/images/projects/assets/angles-operations-platform/wallpaper-2.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "NextJS", "TailwindCSS"],
      link: "https://angles-operations-platform.vercel.app/",
      // github: "https://github.com/SheriffKoder/noventra-financial-services",
      icon: "/images/projects/assets/angles-operations-platform/angles-operations-platform-icon.png",
      longerDescription:
      `
      <h2>
      The system is designed for a healthcare organization that manages caregivers, nurses (CNAs, RNs), and client services. The organization requires comprehensive tracking of employee time and attendance, compliance certifications, recruiting pipelines, operations escalations, and client assessments across multiple departments including Human Resources, Operations, Intake, and Nursing.<br/>
      </h2>
      <br/>

      <h2>Main features:</h2><br/><br/>
      <h3>Dashboard Page:</h3><br/> 
      Provides an executive overview with department-specific KPI metric cards displayed in a responsive grid layout.<br/><br/>
      The dashboard shows key performance indicators for each department including metrics such as time to hire, active users, billable hours, marketing leads, and nursing assessments.<br/><br/>
      Additionally, it displays overdue task alerts in a virtualized table, allowing managers and administrators to quickly identify critical issues requiring immediate attention.<br/><br/>
      The page includes department filtering capabilities with role-based access control, ensuring users only see departments they have permission to access.<br/><br/>
      <br/>

      <h3>Tasks Page:</h3><br/> 
      Serves as the central hub for task management across all departments, featuring a powerful virtualized table with comprehensive filtering, sorting, and search capabilities.<br/><br/>
      Users can create, assign, and track tasks with detailed information including department assignment, assigned users and managers, status, priority, dates, and notes.<br/><br/>
      The page includes quick filter buttons for overdue tasks and provides a detailed task slider for viewing and editing task information. Tasks can be filtered by due date status, sorted by multiple columns, and searched globally across specific task fields, enabling efficient task tracking and management.<br/><br/>
      <br/>

      <br/><h3>Reports Page:</h3><br/> 
      Offers a comprehensive reporting suite with 10+ specialized reports covering various aspects of healthcare operations including employee time tracking, compliance management, recruiting pipelines, operations escalations, and client assessments.<br/><br/>
      The page features efficient navigation through a dropdown selector with URL-based routing for shareable links. Each report utilizes a highly customizable virtualized table that can handle up to 47+ columns and thousands of rows, demonstrating exceptional performance in managing complex, large-scale healthcare datasets.<br/><br/>
      The reports include metric cards at the top displaying key statistics, and the tables support advanced features like inline editing, column grouping with accordion functionality, conditional row styling, and action buttons.<br/><br/>
      <br/>
      <br/>

      <h2>Role-Based Access:</h2><br/><br/>
      <h3>Dashboard Page:</h3><br/>
      The Dashboard is exclusively accessible to administrators and managers, with regular users and Administration department members automatically redirected to the Tasks page.<br/><br/>
      Access control extends to department-level filtering, ensuring users only see department-specific KPIs and overdue task alerts for departments they have permission to view, providing a tailored executive overview based on organizational role and department assignments.
      <br/><br/>
      <h3>Tasks Page:</h3><br/>
      Role-based access on the Tasks page creates a hierarchical permission structure where regular users have view-only access with limited column visibility, managers can create and edit tasks while viewing department and user assignments within their scope, and administrators have full access including manager assignments and cross-departmental task management.<br/><br/>
      Tasks are automatically filtered based on the user's role and department, ensuring users only see and interact with tasks relevant to their responsibilities, while task creation and editing capabilities are dynamically enabled or disabled based on role permissions.
      <br/><br/>
      <h3>Reports Page:</h3><br/> 
      The Reports page implements comprehensive role-based access control that filters both report visibility and editing capabilities.<br/>
      Users only see reports they have permission to access in the dropdown selector, with unauthorized access attempts automatically redirecting to an accessible report.<br/><br/>
      Edit permissions for report data cells are determined by role and department, allowing admins and authorized managers to modify report data while maintaining data integrity through granular permission checks.<br/><br/>
      Action buttons, escalation modals, and other interactive features are conditionally rendered based on role permissions, ensuring users can only perform actions appropriate to their access level.
      <br/>
      <br/>
      <br/>
      <br/>

      <h2>Report table features:</h2><br/><br/>
      • Virtualization:<br/> 
      High-performance rendering using virtualized table components that efficiently handle large datasets with thousands of rows and 47+ columns without performance degradation
      <br/>
      <br/>• Column Customization: <br/>
      Extensive column-level configurations including sortable columns, searchable columns, custom widths, sticky column positioning with layered z-index, dropdown editing options, and custom cell renderers for formatting
      <br/>
      <br/>• Filtering: <br/>
      Advanced filtering capabilities with dropdown filters showing count badges for available items per filter option, pill filters for quick column-based filtering, side filter buttons for specific report types, and auto-apply functionality
      <br/>
      <br/>• Sorting: <br/>
      Multi-column sorting with visual indicators showing sort direction, allowing users to sort by multiple columns simultaneously for complex data analysis
      <br/>
      <br/>• Global Search: <br/>
      Search functionality across multiple designated columns with text highlighting to quickly locate specific data within large datasets
      <br/>
      <br/>• Inline Editing: <br/>
      Editable columns support inline cell editing for authorized users with real-time updates, dropdown selections for standardized values, and date pickers for date fields
      <br/>
      <br/>• Column Grouping: <br/>
      Accordion-style expandable and collapsible column groups with color-coded headers, allowing users to show or hide related columns to focus on specific data sections
      <br/>
      <br/>• Row Styling: <br/>
      Conditional row highlighting based on data values (e.g., status, priority, completion percentage) to visually identify important or problematic records
      <br/>
      <br/>• Group Styling: <br/>
      Conditional styling for grouped columns based on row data, providing visual indicators for data relationships within column groups
      <br/>
      <br/>• Action Buttons: <br/>
      Inline action buttons per row (e.g., view, edit, escalate) that trigger specific actions or open detailed modals for escalation-based reports
      <br/>
      <br/>• Escalation Modals: <br/>
      Detailed modal views for escalation-based reports with editable fields, allowing users to view and edit escalation level information in a focused interface
      <br/>
      <br/>• Pagination: <br/>
      Configurable pagination with customizable page sizes (default 10 items per page) for efficient data navigation
      <br/>
      <br/>• Header Columns: <br/>
      Separate header columns configuration for pill filter display, allowing different columns to be shown in the filter row versus the main table
      <br/>
      <br/>• Performance Optimization:<br/>
      Shimmer loading states during data fetching, optimistic updates for instant UI feedback, and efficient data caching to minimize server requests
      <br/>
      <br/>

      <h3>Tech Stack:</h3><br/>
      - Next.js 14, React 18, TypeScript: Modern React framework with server-side rendering, type safety, and component-based architecture<br/>
      - Tailwind CSS: Utility-first CSS framework for rapid styling and responsive design<br/>
      - React Window: Virtualization library for efficient rendering of large lists and tables with thousands of rows<br/>
      `
      ,
      type: "Web App",
      date: "2025"

    },  

    // Noventra
    {
      id: "noventra",
      name: "Noventra - Financial Services Website",
      description: `A premium one-page financial services website featuring scroll-triggered 3D particle animations and interactive service cards.`,
      image1: "/images/projects/assets/noventra/wallpaper-1.png",
      image2: "/images/projects/assets/noventra/wallpaper-2.png",
      imagex: "/images/projects/assets/noventra/wallpaper-2.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "NextJS", "TailwindCSS", "ThreeJS", "GSAP"],
      link: "https://noventra-financial-services.vercel.app/",
      // github: "https://github.com/SheriffKoder/noventra-financial-services",
      icon: "/images/projects/assets/noventra/noventra-icon.png",
      longerDescription:
      `
      <h2>
      Modern financial services landing page with immersive 3D animations, problem-solution service cards, social proof sections, and an engaging rotating card CTA that converts visitors into leads.<br/>
      </h2>
      <br/>

      <h3>Key Features & User Journey Impact:</h3><br/><br/>
      - <h3>Hero Section:</h3><br/>
      Clean hero section with animated 3D particle background that morphs between shapes as users scroll, featuring icy white gradient background with grain texture overlay and dual CTA buttons.<br/><br/>
      Establishes premium brand perception from first impression, captures attention with dynamic visuals, and provides immediate conversion paths that accommodate different user intents (consultation vs. message), setting the foundation for trust and engagement.<br/><br/><br/>

      - <h3>Interactive Scroll Cards:</h3><br/>
      Three color-coded service cards (red/orange, blue, gold) that slide up from the bottom in a staggered stack as users scroll, with clickable interactions and synchronized particle morphing effects.<br/><br/>
      Educates users about services through problem-solution framework, maintains engagement during long scroll with interactive elements, creates memorable exploration experience that helps users identify relevant solutions, and builds interest through progressive disclosure.<br/><br/><br/>

      - <h3>Case Studies Section:</h3><br/>
      Three case study cards with 3D perspective rotation effects, color-coded borders matching service categories, grain texture overlays, and hover-activated colored glow effects that intensify on interaction.<br/><br/>
      Builds credibility through concrete metrics (18% cost reduction, 22% faster decisions), validates service claims with real-world examples, encourages deeper engagement through interactive hover states, and reinforces trust by showing proven results across different industries.<br/><br/><br/>

      - <h3>Testimonials Section:</h3><br/>
      Three testimonial cards with staggered sequential reveal animations, color-coded avatars and accents, quote icons, and hover effects that activate colored overlays and brightness increases.<br/><br/>
      Reinforces trust through social proof from diverse roles (CFO, Investor, Founder), makes testimonials feel dynamic and authentic through animations, addresses different service areas with specific benefits, and reduces risk perception by showing others' positive experiences.<br/><br/><br/>

      - <h3>Rotating 3D CTA Card:</h3><br/>
      Black card with animated gradient background that rotates on Y-axis to reveal contact or booking forms on the back face, featuring grain texture overlay and smooth 3D perspective transitions.<br/><br/>
      Converts interest into action through engaging card-flip interaction that reduces form friction, provides clear conversion paths for different user preferences, creates memorable interaction that increases completion rates, and offers immediate feedback through success animations that provide closure and satisfaction.<br/><br/><br/>
      <br/>

      <h3>Design Principles:</h3><br/>
      - Color-Coded Service Categories: Consistent red/orange (Credit), blue (Currency), and gold (Analytics) themes across all sections create visual connections that help users quickly identify relevant services and build mental associations between problems and solutions.<br/><br/>
      - Scroll-Triggered Progressive Disclosure: Information reveals gradually through scroll-based animations (fade-ins, blur effects, 3D rotations) that maintain user interest, prevent cognitive overload, and create a narrative flow from awareness to conversion.<br/><br/>
      - Premium Visual Aesthetics: Grain textures, gradient animations, and 3D particle effects create a sophisticated, high-tech brand image that positions the business as innovative and trustworthy, essential for financial services credibility.<br/><br/>
      - Seamless integration between 3D (Three.js) and 2D content for cohesive visual storytelling<br/><br/>
      - Responsive design with mobile-first approach, adaptive layouts, and device-specific optimizations<br/><br/>
      <br/>
      <br/>

      <h3>Tech Stack:</h3><br/>
      - Next.js 14, React 18, TypeScript: Modern React framework with server-side rendering, type safety, and component-based architecture<br/>
      - Tailwind CSS: Utility-first CSS framework for rapid styling and responsive design<br/>
      - Three.js: 3D graphics library for creating interactive 3D scenes and models<br/>
      - GSAP (GreenSock) & ScrollTrigger: Professional animation library with scroll-based animation plugin for smooth transitions and interactions<br/>

      `
      ,
      type: "Landing page",
      date: "2025"

    },   
    
    // Nexa Keyboard
    {
      id: "nexa",
      name: "Nexa - SaaS Workflow Integration Platform",
      description: `SaaS landing page seamlessly blending interactive 3D graphics with scroll-based storytelling to transform abstract workflow concepts into tangible, engaging visual narratives that guide users from problem awareness to conversion.`,
      image1: "/images/projects/assets/nexa/wallpaper-1.png",
      image2: "/images/projects/assets/nexa/wallpaper-22.png",
      imagex: "/images/projects/assets/nexa/wallpaper-22.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "NextJS", "TailwindCSS", "ThreeJS", "GSAP"],
      link: "https://nexa-automation.vercel.app/",
      // github: "https://github.com/SheriffKoder/nexa-workflow-integration",
      icon: "/images/projects/assets/nexa/nexa-icon.png",
      longerDescription:
      `
      <h2>
      A modern, interactive SaaS landing page for Nexa—a workflow integration platform that unifies Gmail, Sheets, Slack, Calendar, and AI agents into one seamless experience. Built with cutting-edge 3D graphics, smooth scroll animations, and a premium glassmorphism design.<br/>
      </h2>
      <br/>

      <h3>Key Technical Features:</h3><br/>
        - Hero: Interactive 3D keyboard scene with Three.js, responsive image fallback for mobile devices<br/>
          Creates an immediate visual impact that captures attention and introduces the product's core value proposition of connecting workflows.<br/>
        <br/>
        - Problem/Solution: 3D glass cards with tool icons, animated connection lines, and floating glowing box with reflective planes<br/>
          Visually represents the fragmentation problem (scattered tools) and the unified solution (connected workflows) through animated connections that guide users to understand the value proposition.<br/>
        <br/>
        - How It Works: Pinned scroll section with GSAP ScrollTrigger, each scroll increment activates a glass card animation<br/>
          Engages users through interactive storytelling, allowing them to discover the integration process step-by-step, building understanding and confidence in the solution.<br/>
        <br/>
        - Plans: Gradient border pricing cards with rotating animations and service cost tooltips<br/>
          Presents pricing options in an engaging, transparent manner that helps users evaluate their investment and find the right plan for their needs.<br/>
        <br/>
        - Testimonials: GSAP-animated proof cards with staggered reveals and mobile-optimized layouts<br/>
          Builds trust and social proof through real user experiences, addressing concerns and reinforcing the product's value before the final conversion step.<br/>
        <br/>
        - Final CTA: Interactive background grid that responds to mouse movement with smooth parallax effects<br/>
          Creates an engaging, interactive moment that draws focus to the call-to-action, encouraging users to take the final step and convert after understanding the full value proposition.<br/>
        <br/>
      <br/>

      <h3>Design Principles:</h3><br/>
      - GSAP animations on section entry with ScrollTrigger for smooth, professional scroll-based reveals<br/>
      - Seamless integration between 3D (Three.js) and 2D content for cohesive visual storytelling<br/>
      - Responsive design with mobile-first approach, adaptive layouts, and device-specific optimizations<br/>
      - Dark theme with primary color accents for premium brand identity and visual hierarchy<br/>
      - Minimalist interface focusing on content clarity, user engagement, and performance optimization<br/>
      - Performance-first approach with optimized images, code splitting, and efficient animation rendering<br/>
      <br/>
      <br/>

      <h3>Tech Stack:</h3><br/>
      - Next.js 14, React 18, TypeScript: Modern React framework with server-side rendering, type safety, and component-based architecture<br/>
      - Tailwind CSS: Utility-first CSS framework for rapid styling and responsive design<br/>
      - Three.js: 3D graphics library for creating interactive 3D scenes and models<br/>
      - GSAP (GreenSock) & ScrollTrigger: Professional animation library with scroll-based animation plugin for smooth transitions and interactions<br/>

      `
      ,
      type: "Landing page",
      date: "2025"

    },

    // Stellar va tracker
    {
      id: "hubstaff-timetracker",
      name: "HubStaff - Time Tracker",
      description: `A comprehensive time tracking and workforce management platform for remote teams and virtual assistants with real-time activity monitoring, project management, and analytics.`,
      image1: "/images/projects/assets/hubstaff/wallpaper-1.png",
      image2: "/images/projects/assets/hubstaff/wallpaper-2.png",
      imagex: "/images/projects/assets/hubstaff/wallpaper-2.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "NextJS", "TailwindCSS"],
      link: "https://hubstaff-va-tracker.vercel.app/",
      // github: "https://github.com/SheriffKoder/nexa-workflow-integration",
      icon: "/images/projects/assets/hubstaff/hubstaff-icon.png",
      longerDescription:
      `
      <h2>
      Enterprise-grade time tracking solution that helps businesses monitor remote team productivity, manage projects and clients, analyze performance metrics, and maintain accountability through automated screenshot capture and detailed reporting.<br/>
      </h2>
      <br/>

      <h3>Key Pages and Features:</h3><br/>
        - Dashboard: <br/>Interactive timeline visualization with dual view modes (hour-based for single day, day-based for multi-day ranges) toggled via date selector, real-time filtering, timezone support, user avatars with online status indicators, and export capabilities for comprehensive oversight<br/><br/>
        - Projects & Tasks: <br/>Complete project lifecycle management with user assignments, priority tracking, and multi-level filtering for efficient resource allocation<br/><br/>
        - Clients: <br/>Client relationship management with project associations and status tracking for streamlined client operations<br/><br/>
        - Reports: <br/>Advanced analytics for users and projects with time allocation breakdowns, performance indicators, and date range analysis for data-driven decisions<br/><br/>
        - Screenshots: <br/>Automated screenshot monitoring with timezone-aware viewing, filtering, and navigation for transparency and accountability<br/><br/>
        - Modifications: <br/>Time adjustment workflow with approval system for accurate time tracking corrections<br/><br/>
        - User Management: <br/>Role-based access control with team member administration, permission management, and real-time online status visibility<br/><br/>
        - Settings: <br/>Company-wide configuration for priorities, statuses, and organizational settings<br/><br/>
        - Advanced Filtering: <br/>Comprehensive filtering system across all sections including date ranges, users, projects, clients, roles, priorities, statuses, and search functionality for precise data access<br/><br/>
        <br/>
      <br/>

      <h3>Design Principles:</h3><br/>
      - User-Centric Interface: <br/>Intuitive right-side sliders for details/edit panels, consistent filter bars, and responsive layouts for seamless navigation<br/><br/>
      - Real-Time Data: <br/>Auto-refresh capabilities, optimistic updates, and live timeline visualization for up-to-date information<br/><br/>
      - Multi-Directional Filtering: <br/>Intelligent filter relationships where selections dynamically update related options for efficient data exploration<br/><br/>
      - Timezone Intelligence: <br/>Comprehensive GMT offset handling with cross-day timelog support for global remote teams<br/><br/>
      - Role-Based Access: <br/>Granular permissions ensuring users only see and interact with data relevant to their responsibilities<br/><br/>
      <br/>
      <br/>

      <h3>Tech Stack:</h3><br/>
      - Frontend: Next.js 15, React 19, TypeScript, Tailwind CSS<br/>
      - Backend: Supabase (PostgreSQL, Authentication, Storage)<br/>
      - State Management: Redux Toolkit, React Context API<br/>
      - Data Processing: date-fns, xlsx for exports<br/>
      - Cloud Storage: AWS S3 for screenshot storage<br/>
      `
      ,
      type: "Web app",
      date: "2025"

    },

    // Renewable Energy questionnaire
    {
      id: "rei-questionnaire",
      name: "Renewable Energy Questionnaire",
      description: `An adaptive questionnaire system that intelligently filters 443 questions, enabling comprehensive data collection for service providers while delivering clients a fast, personalized experience.`,
      image1: "/images/projects/assets/rei-questionnaire/wallpaper-1.png",
      image2: "/images/projects/assets/rei-questionnaire/wallpaper-2.png",
      imagex: "/images/projects/assets/rei-questionnaire/wallpaper-2.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "NextJS", "TailwindCSS"],
      link: "https://rei-questionnaire.vercel.app/questionnaire?rid=Vv6JxII",
      // github: "https://github.com/SheriffKoder/mis-website",
      icon: "/images/projects/assets/rei-questionnaire/rei-questionnaire-icon.png",
      longerDescription:
      `
      <h2>
        REI, an energy efficiency consulting firm, was managing client assessments through lengthy phone calls and manual data entry into Google Sheets—a slow, error-prone process that provided poor client experience. As part of a comprehensive management console solution, we developed an intelligent, adaptive questionnaire system that transforms their manual assessment process into a streamlined digital experience.<br/>
        <br/>
      </h2>

      The questionnaire guides clients through a comprehensive energy assessment, dynamically filtering from a total pool of 443 questions to display only the relevant questions based on their specific situation and previous responses. This creates a win-win scenario: the service provider gets all the comprehensive data they need without losing client interest or causing survey fatigue, while clients only see applicable questions tailored to their situation, resulting in a fast, personalized experience.<br/>
      <br/>
      The system ensures data quality through real-time validation while maintaining user engagement by showing only what matters to them. At the end of the questionnaire, users are presented with a comprehensive summary view that displays all their answers in an organized, reviewable format. The summary intelligently handles complex data structures: repeater items (like multiple windows or systems) are displayed with navigation controls to review each item individually, nested repeaters are properly displayed within their parent items, and questions that were hidden by conditional rules are automatically filtered out.<br/>
      <br/>
      This questionnaire system integrates seamlessly with the broader platform, feeding data into automated energy calculations, contractor assignment workflows, and professional PDF report generation, transforming REI's manual process into an accurate, efficient, and client-friendly digital experience.<br/>
      <br/>


      <h3> Key Features: </h3><br/>

      <h2>1. Progress Preservation</h2><br/>
      - Auto-save functionality: Progress is automatically saved to browser storage<br/>
      - Resume capability: Users can close the browser and return later without losing data<br/>
      - Project-specific storage: Each questionnaire is saved separately by report ID<br/>
      - Visual feedback: Toast notifications inform users when data is loaded or saved<br/>
      <br/>
      > This is achieved through: Storage System that provides localStorage-based persistence with project-specific keys, automatic save/load on mount, and debounced saves triggered by form data changes.<br/>
      <br/>
      <br/>

      <h2>2. Smart Navigation</h2><br/>
      - Sidebar navigation: Clear visual progress indicator showing completed, current, and upcoming sections (with validation)<br/>
      - Section-based navigation: Jump between sections easily (with validation)<br/>
      - Progress tracking: Visual indicators show which sections are complete (green), current (highlighted), and locked (gray)<br/>
      - Mobile-responsive sidebar: Collapsible sidebar for mobile devices with overlay<br/>
      <br/>
      > This is achieved through: Navigation & Routing system that uses URL-based section navigation with Next.js search params, validation-gated navigation to prevent errors, state preservation during navigation, and sidebar navigation logic with proper browser history support.<br/>
      <br/>
      <br/>

      <h2>3. Adaptive Question Flow</h2><br/>
      - Conditional questions: Questions appear/disappear based on previous answers<br/>
        - Example: If user selects "Electricity" as utility, electric cost questions appear and gets into the validation system<br/>
        - Example: If user says "No" to solar panels, solar-related questions are hidden and bypassed by the validation system<br/>
      - Dynamic requirements: Fields become required only when relevant<br/>
      - Context-aware forms: The form adapts in real-time to user selections<br/>
      <br/>
      > This is achieved through: Domain-Specific Language (DSL) for Rules that evaluates showIf and requireIf rules in real-time using a rule engine, Dynamic Form Rendering that conditionally renders components based on rule evaluation, and State Management with React Context that provides global access to form data for rule evaluation.<br/>
      <br/>
      <br/>

      <h2>4. Validation & Error Prevention</h2><br/>
      - Real-time validation: Errors shown immediately as users interact<br/>
      - Section validation: Validates before allowing navigation to next section<br/>
      - Comprehensive error modal: Shows all errors organized by section/subgroup when trying to proceed<br/>
      - Error grouping: Errors are organized by location (section → group → subgroup) and shown to the user before leaving the section<br/>
      - Continue or fix options: Users can choose to fix errors or continue anyway<br/>
      - Field-level error messages: Inline error messages below each field<br/>
      <br/>
      > This is achieved through: Validation Engine that performs multi-layered validation with conditional rules, validates only visible/required fields, aggregates errors by location, and integrates with Modal System to display organized error structures with actionable options.<br/>
      <br/>
      <br/>

      <h2>5. Complex Data Collection</h2><br/>
      - Repeater items: Add multiple items of the same type (e.g., multiple windows, systems)<br/>
      - Tab-based navigation for repeaters: When a system has multiple items, each item is displayed as a tab (e.g., Window 1, Window 2) with intuitive navigation controls, preventing information overload and allowing users to focus on one item at a time<br/>
      - Nested repeaters: Support for nested repeating items (e.g., items within items)<br/>
      - Quantity-based forms: Forms that expand based on quantity entered<br/>
      - Multi-select cards: Visual card selection for multiple options<br/>
      - File uploads: Support for image and document uploads<br/>
      <br/>
      > This is achieved through: Repeater System that automatically synchronizes array length with quantity inputs, provides proper React keys for stable rendering, maintains context awareness for each item's rule evaluation, supports nested repeater structures for complex data hierarchies, and implements tab-based navigation UI within sections to enhance usability when managing multiple similar items.<br/>
      <br/>
      <br/>

      <h2>6. User-Friendly Interface</h2><br/>
      - Clean, modern design: Professional appearance with clear visual hierarchy<br/>
      - Responsive layout: Works on desktop, tablet, and mobile<br/>
      - Loading states: Visual feedback during validation and saving<br/>
      - Toast notifications: Non-intrusive notifications for important actions<br/>
      - Summary view: Review all answers before submission<br/>
      - Success page: Confirmation after successful submission<br/>
      <br/>
      > This is achieved through: Dynamic Form Rendering with component mapping system for field types, dynamic label and option generation, Modal System for confirmations and error displays, and responsive design patterns that adapt to different screen sizes.<br/>
      <br/>
      <br/>

      <h2>7. Data Safety</h2><br/>
      - Clear confirmation: Modal confirmation before clearing all data<br/>
      - Manual save option: Users can manually save progress<br/>
      - Clear data option: Ability to start fresh with confirmation<br/>
      <br/>
      > This is achieved through: Storage System that provides manual save/clear controls with project-specific storage isolation, and Modal System that displays confirmation dialogs with proper focus management and keyboard navigation for accessibility.<br/>
      <br/>
      <br/>

      <h3> Design Principles: </h3><br/>
      The questionnaire system achieves high-quality UX through:<br/>
        User-Facing Features:<br/>
        - Adaptive, intelligent form flow<br/>
        - Progress preservation<br/>
        - Clear navigation and feedback<br/>
        - Comprehensive validation<br/>
        - Professional, responsive design<br/>
      <br/>
        Technical Enablers:<br/>
        - Schema-driven architecture<br/>
        - Powerful DSL for rules<br/>
        - Efficient state management<br/>
        - Smart validation engine<br/>
        - Type-safe implementation<br/>
        - Performance optimizations<br/>
      <br/>
      This combination creates a form experience that feels intelligent, safe, and user-friendly while being maintainable, extensible, and performant from a development perspective.<br/>
      <br/>

      <h3> Core Stack: </h3><br/>
      - Next.js, React 19, TypeScript: Full-stack framework with component-based UI and type-safe development for server-side rendering, API routes, optimized navigation, and compile-time error checking<br/>
      - TypeScript: Type-safe development</br>
      - Tailwind CSS: Utility-first CSS framework for responsive, modern styling and consistent design system<br/>
      - React Hook Form: Performant form state management with minimal re-renders and built-in validation integration<br/>
      - Zod: TypeScript-first schema validation library for runtime type checking and form data validation<br/>
      - React Context: Global state management for form data, validation state, and user preferences across the application<br/>
      - Custom DSL Engine: Domain-specific language for evaluating conditional rules (showIf, requireIf, disableIf) in real-time<br/>
      <br/>
      `
      ,
      type: "Web app",
      date: "2025"

    },

    // MIS V2 - new updates
    {
      id: "mis-2",
      name: "MIS website version 2",
      description: `Navigate the website alongside our interactive 3D robot guide, while exploring comprehensive service offerings enhanced by sophisticated smooth animations and a mobile-first responsive design.`,
      image1: "/images/projects/assets/mis-v2/wallpaper-1.png",
      image2: "/images/projects/assets/mis-v2/wallpaper-2.png",
      imagex: "/images/projects/assets/mis-v2/wallpaper-2.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "NextJS", "TailwindCSS", "ThreeJS", "GSAP", "AI"],
      link: "https://mis-website-2.vercel.app/",
      github: "https://github.com/SheriffKoder/mis-website-2",
      icon: "/images/projects/assets/mis-v2/mis-v2-icon.png",
      longerDescription:
      `
      <h2>
      This is the second version of the website I've developed for Modern Intelligence Solutions (MIS) - a technology services company that specializes in AI-driven business solutions and automation.<br/>
      </h2>
      <br/>

      <h3> Key Technical Features: </h3><br/>
      - 3D Robot Component: Interactive 3D model with animations<br/>
      - VaporWave Background: Animated gradient effects<br/>
      - Scroll-triggered Animations: GSAP ScrollTrigger for smooth reveals<br/>
      - Responsive Design: Mobile-first approach with breakpoint optimization<br/>
      - Performance Optimized: Image optimization, lazy loading, code splitting<br/>
      <br/>

      <h3> What has been added over the previous version: </h3><br/>
      This iteration represents a significant evolution in both design sophistication and user engagement, transforming the website into a more immersive and professional digital experience.<br/><br/>
      - Visual & Branding Enhancements: Refined Typography System, Redesigned buttons, Smoother Animations.<br/><br/>
      - Expressive Robot Companion: Introduced a new, more realistic 3D robot model with dynamic body animations that respond contextually to each section visited, creating an engaging user journey.<br/><br/>
      - Rotating 3D Service Elements: Added interactive 3D models in the services section that rotate and animate to visually represent each service offering, enhancing comprehension and engagement.<br/><br/>
      - AI-Powered Customer Engagement: Intelligent Chatbot Integration with context-aware responses based on company knowledge base with intelligent call-to-action detection.  Includes cooldown periods, file upload capabilities, and seamless integration with the existing design system.<br/><br/>
      - Custom Flow Diagram: animated flow diagram for the step-by-step process that dynamically illustrates the company's methodology with smooth transitions making complex processes easily digestible.<br/><br/>
      - Implemented animated star displays in the testimonials section that dynamically convey high ratings and client satisfaction.<br/>
      <br/>
      <br/>

      <h3> Website Sections: </h3><br/>
      - Hero: 3D robot + animated text + CTA buttons<br/>
      - About: Service cards with hover effects<br/>
      - Stats: Animated counters with circular progress indicators<br/>
      - Process: 4-step workflow with staggered animations<br/>
      - Testimonials: Client reviews with company logos<br/>
      - Contact: Form + social links + final CTA<br/>
      <br/>      
      <br/>

      <h3> Core Stack: </h3><br/>
      - Next.js 14 (App Router) + React 18 + TypeScript<br/>
      - Three.js + @react-three/fiber for 3D graphics<br/>
      - GSAP + Framer Motion for advanced animations<br/>
      - Tailwind CSS + custom themes (light/dark/neon)<br/>
      <br/>
      `
      ,
      type: "Landing page",
      date: "2025"

    },

    // DH Ordering
    {
      id: "dh-ordering",
      name: "Food Ordering System",
      description: `B2B food ordering platform with phone-based authentication, real-time inventory management, and automated order processing.`,
      image1: "/images/projects/assets/dh-ordering/wallpaper-1.png",
      image2: "/images/projects/assets/dh-ordering/wallpaper-2.png",
      imagex: "/images/projects/assets/dh-ordering/wallpaper-2.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "NextJS", "TailwindCSS"],
      link: "https://dh-ordering-platform.vercel.app/",
      // github: "https://github.com/SheriffKoder/mis-website",
      icon: "/images/projects/assets/dh-ordering/dh-ordering-icon.png",
      longerDescription:
      `
      <h2>
      This project is developed for an established food distribution company serving restaurants, cafes, and food service businesses.<br/>
      As their business expanded, they needed to modernize their traditional order-taking methods to handle increased order volume, multiple delivery schedules, and complex inventory tracking while ensuring existing clients could easily adapt.<br/>
      This application is specifically designed for mobile phone use, prioritizing touch interactions, thumb-friendly navigation, and responsive layouts that work seamlessly on smartphones and tablets, making it easy for busy kitchen managers and restaurant staff to place orders quickly from their mobile devices.<br/>
      </h2>
      <br/>
      <br/>

      <h2>Main features:</h2><br/>
      <h3># Phone-Based OTP Authentication:</h3><br/> 
      The application uses a streamlined, passwordless authentication system that feels familiar and secure. Users simply enter their phone number, receive a 4-digit verification code via SMS, and enter the code to gain access. Eliminating the need for account creation, password management, and complex login processes.<br/><br/>
      The system automatically recognizes returning users and remembers their role (admin or customer), routing them to the appropriate dashboard upon successful authentication.<br/><br/>
      The entire login flow is designed for mobile use with large, touch-friendly input fields and smooth transitions between the phone number and OTP verification steps.<br/><br/>
      <br/>

      <h3># Role-Based Access Control & Customer Management:</h3><br/> 
      The admin panel provides comprehensive customer management capabilities for authorized administrators. Admins can view, create, edit, and delete customer accounts, controlling who has access to the ordering platform.<br/><br/>
      The interface includes validation for customer data (name, phone, email, company), bulk update capabilities, and individual row editing for efficient customer database management.<br/><br/>
      <br/>

      <h3># Orders Page (heart of the application):</h3><br/> 
      - Header with Last Order Quick-Fill<br/>
      The header includes a "Last Order" button that allows users to quickly replicate their previous order for the same delivery date, saving time for regular customers who order similar items weekly.<br/><br/>

      - Choose Delivery Date<br/>
      Users can select delivery dates from tomorrow up to 7 days in advance through an intuitive date selection modal that displays day-of-week labels for easy reference.<br/><br/>

      - Search by Category<br/>
      A prominent search bar allows users to quickly find products by typing category names or product names, with automatic filtering and scrolling to matching categories.<br/><br/>

      - Scrollable Items with Active Category Badge<br/>
      A horizontal scrollable row of category badges sits at the top of the product list. Users can tap any badge to instantly scroll to that category section. The active category badge automatically highlights based on the user's scroll position, providing real-time visual feedback about which section is currently in view as they browse through the product list.<br/><br/>

      - Product Selection & Quantity Management<br/>
      Each product card displays item names (English and Chinese), unit information, and images. Tapping an item opens a modal for quantity selection with increment/decrement controls. Selected items are visually highlighted with quantities displayed on the cards.<br/><br/>

      - Cart Persistence<br/>
      The system automatically saves cart contents for each delivery date, allowing users to maintain separate orders for different delivery dates.<br/><br/>
      <br/>

      <h3># Order Review Page:</h3><br/> 
      Clean, organized summary displaying all selected items with images, quantities, user information, and the ability to remove items before final confirmation.<br/><br/>
      

      <h3># Order Success Page:</h3><br/> 
      Displays complete order confirmation with order details, delivery information, and an "Order Again" button for quick reordering.<br/><br/>
      <br/>

      <h3> Core Stack: </h3><br/>
      - Next.js: React-based full-stack framework</br>
      - TypeScript: Type-safe development</br>
      - Tailwind CSS: Utility-first styling</br>
      <br/>
      `
      ,
      type: "Web app",
      date: "2025"

    },  

    // Sustainserv
    {
      id: "sustainserv",
      name: "SustainServ Invoice System",
      description: `A modern business management platform built for a sustainability consulting company. Users interact with an intuitive dashboard featuring real-time project analytics, comprehensive invoice management, and streamlined project administration. The application delivers a clean, professional interface with interactive data visualizations, advanced filtering systems, and responsive design that enhances productivity and business operations.`,
      image1: "/images/projects/assets/sustainserv/wallpaper-1.png",
      image2: "/images/projects/assets/sustainserv/wallpaper-2.png",
      imagex: "/images/projects/assets/sustainserv/wallpaper-2.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "NextJS", "TailwindCSS", "ChartJS"],
      link: "https://sustainserv-dashboard.vercel.app/",
      // github: "https://github.com/SheriffKoder/mis-website",
      icon: "/images/projects/assets/sustainserv/sustainserv-icon.png",
      longerDescription:
      `
      <h2>
      This project was developed to help SustainServ transition from manual tracking systems to a modern, automated business management solution.<br/>
      </h2>
      By implementing this customized web application, we achieved:<br/>
      - Enhanced Productivity: Automated workflows reduced manual data entry by 80% and eliminated duplicate work across departments<br/>
      - Improved Collaboration: Centralized data access enabled real-time team coordination and transparent project visibility<br/>
      - Better Decision Making: Interactive dashboards and analytics provided instant insights into project performance and financial health<br/>
      - Streamlined Operations: Integrated invoice generation, time tracking, and project management created a seamless business workflow<br/>
      - Scalable Growth: Modern architecture supports business expansion with role-based access and multi-currency capabilities<br/>
      <br/>
      The solution transformed SustainServ's operations from reactive manual processes to proactive, data-driven business management.</br>
      <br/>
      <br/>

      <h3> Core Business Functions: </h3><br/>
      - Team Assignment: Project managers, executive owners, assignees.</br>
      - Financial Management: Automated invoice creation, Payment Tracking (Draft, final, sent statuses), Support for different currencies, Available budget, invoiced amounts.</br>
      - User Management: Role-based Access: ADMIN and USER roles, Authentication: Microsoft OAuth integration, Permission Control: Different access levels, User Administration: Add, edit, delete users.</br>
      <br/>
      <br/>

      <h3> Website Sections: </h3><br/>
      - Layout Design: The application features a collapsible sidebar navigation with a modern, clean aesthetic using a custom color palette. The responsive layout adapts seamlessly across devices with smooth animations and intuitive user interactions.</br>
      - Landing Page: Company logo with hover animations and Microsoft OAuth integration, Animated particle background with geometric design elements.</br>
      - Active Projects Dashboard: Main business intelligence hub displaying project analytics and financial overview using Interacive data visualization charts and an advanced filtering table with real-time project statistics and slideover detail panels.</br>
      - Invoices Management: Score cards displaying financial metrics and invoice status statistics.</br>
      - Project Adminstration: Comprehensive project portfolio management with team assignments and budget tracking.</br>
      - Time logs: Time entry table with person, project, and hours tracking.</br>
      - Admin Panel: System administration with user management and configuration controls, Tabbed interface for organized admin functions.</br>
      </br>
      Sub-pages (Detail & Management Views):</br>
      - invoice/[id]: Tabbed interface displaying invoice overview with comprehensive financial breakdown and project context.</br>
      - invoice/[id]/edit: Invoice modification interface for draft and review status invoices.</br>
      - project-admin/[id]: Comprehensive project details with team assignments, sub-projects, and financial tracking, Navigation breadcrumbs with edit access controls and project status indicators.</br>
      - project-admin/[id]/edit: Project modification interface with conditional rendering of fields based on project status, comprehensive form validation and data management.</br>
      - project-admin/[id]/new: collapsible card interface that was strategically implemented to address the complexity of project creation, which involves 50+ form fields across multiple data categories helping in reducing cognitive load, improved usability, Better data and indicator visibility, and overall enhanced data management.</br>
      <br/>      
      <br/>

      <h3> Core Stack: </h3><br/>
      - Next.js 14: React-based full-stack framework</br>
      - TypeScript: Type-safe development</br>
      - Tailwind CSS: Utility-first styling</br>
      - Component-based: Modular, reusable UI components</br>
      <br/>
      `
      ,
      type: "Web app",
      date: "2025"

    },

    // Review Lawyer
    {
      id: "reviewlawyer",
      name: "Review Lawyer+",
      description: `A comprehensive SaaS solution designed for short-term rental professionals to protect and manage their online reputation across multiple booking platforms.`,
      image1: "/images/projects/assets/reviewlawyer/wallpaper-1.png",
      image2: "/images/projects/assets/reviewlawyer/wallpaper-2.png",
      imagex: "/images/projects/assets/reviewlawyer/wallpaper-2.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "NextJS", "TailwindCSS", "ChartJS", "Firebase", "Stripe", "AI"],
      link: "https://www.reviewlawyer.ai/",
      // github: "https://github.com/SheriffKoder/mis-website",
      icon: "/images/projects/assets/reviewlawyer/reviewlawyer-icon.png",
      longerDescription:
      `
      <h2>
      Developed for a seasoned rental business professional with extensive experience managing multiple properties across various online platforms. Their deep industry knowledge and firsthand experience with review management challenges led to creating this all-in-one solution that combines AI technology with professional advocacy to deliver superior results..<br/>
      <br/>
      </h2>
      <br/>

      <h3> Key Technical Features: </h3><br/>
      - Interactive Dashboard - Graphical charts, review filters by rating/date/platform, and comprehensive analytics for better decision-making.</br>
      - AI Recommendations - Intelligent analysis that identifies review patterns and pinpoints, organizing them into actionable tasks to improve hosting quality and guest satisfaction.</br>
      - API Integrations - Seamless data synchronization with Hostaway PMS and major booking platforms for automated workflow management.</br>
      - Token System - Usage-based pricing model that ties revenue directly to value delivered, preventing abuse while encouraging growth.</br>
      - Rewards Program - Free tier token regeneration and website visit notifications to enhance user engagement.</br>
      <br/>
      <br/>

      <h3> Website Sections: </h3><br/>
      - Landing Page - Showcases product benefits and value proposition with modern, responsive design.</br>
      - Dashboard - Centralized review management with interactive charts, filters, and real-time analytics.</br>
      - Blog - AI-powered article generation that runs automatically every amount of days or with a one-click for admins.</br>
      - User Portal - Account management, token purchases, payment plan changes, and API connections.</br>
      - Admin Panel - User management, analytics, and platform oversight.</br>
      <br/>      
      <br/>

      <h3> Core Stack: </h3><br/>
      - Frontend: Next.js 15, React 19, Chart.js, TypeScript, Tailwind CSS - Chosen for rapid development, type safety, modern responsive design capabilities, and interactive data visualization.</br>
      - AI & Analytics: DeepSeek with custom AI algorithms - Implemented for advanced review analysis.</br>
      - Integrations: Stripe, Hostaway API, RSS feeds, Multi-platform APIs - Essential for payment processing, PMS connectivity, and seamless platform integration.</br>
      - Backend and Database: Firebase, Firebase Admin, Cloudinary - Selected for real-time data sync, scalable authentication, and efficient image management.</br>
      <br/>
      `
      ,
      type: "SaaS Website ",
      date: "2025"

    },

    // WayToGo
    {
      id: "waytogo",
      name: "WayToGo Staffing - Premium Hospitality Staffing Website",
      description: `High-quality hospitality and events staffing company website featuring sophisticated modern animations.`,
      image1: "/images/projects/assets/waytogo/wallpaper-1.png",
      image2: "/images/projects/assets/waytogo/wallpaper-2.png",
      imagex: "/images/projects/assets/waytogo/wallpaper-2.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "NextJS", "TailwindCSS", "GSAP"],
      link: "https://www.waytogostaffing.com/",
      // github: "https://github.com/SheriffKoder/mis-website",
      icon: "/images/projects/assets/waytogo/waytogo-icon.png",
      longerDescription:
      `
      <h2>
      WayToGo Staffing needed to elevate their online presence in the competitive hospitality staffing market. We created a website that strategically targets their target market of hotels, country clubs, and corporate events while demonstrating their company strengths and reinforcing their mission of exceptional service delivery.
      <br/>
      </h2>
      <br/>

      <h3> Strategic Implementation: </h3><br/>
      Landing Page:<br/>
      - Value Demonstration: Showcases 10+ years experience and 99% client satisfaction.<br/>
      - Trust Building: Google Certified ratings and professional testimonials.<br/>
      - Service Showcase: Interactive carousel highlighting 13 specialized positions.<br/>
      - Clear CTAs: Strategic booking and contact buttons.<br/>
      <br/>
      Careers Page:<br/>
      - Comprehensive questionnaire with diverse input types for efficient applicant collection.<br/>
      <br/>
      Visual Design:<br/>
      - Luxury Palette: Gold and navy blue conveying premium quality.<br/>
      - Sophisticated Animations: GSAP-powered parallax effects and scroll animations.<br/>
      - Responsive Layout: Seamless experience across all devices.<br/>
      <br/>
      <br/>

      <h3> Market Impact: </h3><br/>
      This project demonstrates how strategic web design transforms market position. By creating a website that matches WayToGo's professional standards and speaks directly to their target market, we helped them establish credibility, communicate their mission clearly, and showcase their company strengths - positioning them as the premium choice in a crowded market.<br/>
      <br/>      
      <br/>

      <h3> Technical Excellence:</h3><br/>
      Tech Stack:<br/>
      - Next.js with TypeScript for robust architecture.<br/>
      - GSAP for advanced animations and parallax effects.<br/>
      - Tailwind CSS for responsive design.<br/>
      <br/>
      Advanced Features:<br/>
      - Animating perspective cards with tilt effects.<br/>
      - Pinned card animations.<br/>
      - Text scroll animations.<br/>
      - Customized infinite slider.<br/>
      `
      ,
      type: "Landing page",
      date: "2025"

    },

    // MIS V1
    {
      id: "mis-1",
      name: "MIS website version 1",
      description: `Navigate the website alongside Eva, our interactive 3D robot guide, while exploring comprehensive service offerings enhanced by sophisticated animations and a mobile-first responsive design.`,
      image1: "/images/projects/assets/mis-v1/wallpaper1.png",
      image2: "/images/projects/assets/mis-v1/wallpaper2.png",
      imagex: "/images/projects/assets/mis-v1/wallpaper2.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "NextJS", "TailwindCSS", "ThreeJS", "GSAP"],
      link: "https://mis-website-v1.vercel.app/",
      github: "https://github.com/SheriffKoder/mis-website",
      icon: "/images/projects/assets/mis-v1/mis-v1-icon.png",
      longerDescription:
      `
      <h2>
      This is a website version I've developed for Modern Intelligence Solutions (MIS) - a technology services company that specializes in AI-driven business solutions and automation.<br/>
      </h2>
      <br/>

      <h3> Key Technical Features: </h3><br/>
      - 3D Robot Component: Interactive 3D model with animations<br/>
      - VaporWave Background: Animated gradient effects<br/>
      - Scroll-triggered Animations: GSAP ScrollTrigger for smooth reveals<br/>
      - Responsive Design: Mobile-first approach with breakpoint optimization<br/>
      - Performance Optimized: Image optimization, lazy loading, code splitting<br/>
      <br/>
      <br/>

      <h3> Website Sections: </h3><br/>
      - Hero: 3D robot + animated text + CTA buttons<br/>
      - About: Service cards with hover effects<br/>
      - Stats: Animated counters with circular progress indicators<br/>
      - Process: 4-step workflow with staggered animations<br/>
      - Testimonials: Client reviews with company logos<br/>
      - Contact: Form + social links + final CTA<br/>
      <br/>      
      <br/>

      <h3> Core Stack: </h3><br/>
      - Next.js 14 (App Router) + React 18 + TypeScript<br/>
      - Three.js + @react-three/fiber for 3D graphics<br/>
      - GSAP + Framer Motion for advanced animations<br/>
      - Tailwind CSS + custom themes (light/dark/neon)<br/>
      <br/>
      `
      ,
      type: "Landing page",
      date: "2024"

    },
  ]

  export const PracticeProjects= [


    // ShopMate
    {
      id: "ai-ecommerce",
      name: "ShopMate AI - Shopping assistant",
      description: `Intelligent e-commerce assistant that enables natural product discovery, personalized recommendations, and conversational cart management for electronic products`,
      image1: "/images/projects/assets/ai-ecommerce/wallpaper-1.png",
      image2: "/images/projects/assets/ai-ecommerce/wallpaper-2.png",
      imagex: "/images/projects/assets/ai-ecommerce/wallpaper-2.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "ReactJS", "NextJS", "TailwindCSS", "AI"],
      link: "https://shopmate-ai-product-assistant.vercel.app/",
      // github: "https://github.com/SheriffKoder/template-1-everdrive",
      icon: "/images/projects/assets/ai-ecommerce/ai-ecommerce-icon.png",
      longerDescription:
      `
      <h2>
       Intelligent e-commerce assistant that enables natural product discovery, personalized recommendations, and conversational cart management with persistent chat history, interactive artifacts, and real-time streaming for seamless multi-session shopping experiences.<br/>
      </h2>
      <br/>

      <h3>Core Features:</h3><br/>
      - Natural language product search and discovery with visual product cards</br>
      - Personalized recommendations based on budget, needs, and preferences</br>
      - Conversational cart management (view, modify, remove items through chat)</br>
      - Real-time streaming responses with reasoning transparency</br>
      - Product comparisons and detailed Q&A about features and specifications</br>
      - Seamless browsing: Click on chat product cards to visit detail pages while keeping the AI assistant open for continued conversation throughout the shopping journey</br>
      - Persistent chat history with URL-based resuming: All conversations are saved and can be resumed via shareable URLs</br>
      - Interactive artifacts with version history: AI-generated content (text and sheets) can be edited, versioned, and managed with full history tracking</br>
      - Real-time data streaming: Tools stream data progressively for instant feedback and better user experience</br>
      - Flexible interface modes: Toggle between full-screen and compact modes with collapsible sidebar for optimal viewing</br>
      <br/>
      <br/>
      <br/>

      <h3>Design Principles:</h3><br/>
      - Node-based routing architecture:</br> Two-level classification system routes queries through specialized agent nodes - Query Classifier determines if query is shop-related, technical discussion, or unrelated, then Product Classifier (for related queries) routes to specialized agents (products, recommendation, filtering) for optimal handling</br>
      <br/>- Tool-driven execution with streaming:</br> Specialized agents use productSearch and cartInfo tools to show actual products, not just describe them - products are displayed through tools for consistent UI and interactive controls. All tool outputs stream in real-time for immediate feedback</br>
      <br/>- User-centric:</br> Prioritizes showing products with interactive controls over asking clarifying questions - agents display products immediately when possible</br>
      <br/>- Context-aware:</br> Integrates full product catalog and cart state into every conversation - all product-related agents receive complete catalog context for informed responses (future optimization: can selectively pass relevant products instead of entire catalog for better performance)</br>
      <br/>- Transparent reasoning:</br> Displays AI thinking process to build user trust - uses OpenAI o3-mini with reasoning transparency to show decision-making process</br>
      <br/>- Persistent and resumable conversations:</br> All chats are automatically saved to Supabase with full message history. Users can share chat URLs to resume conversations, and the sidebar provides quick access to chat history with searchable, date-grouped organization</br>
      <br/>- Artifact management with version control:</br> AI-generated artifacts (text documents, spreadsheets, code) are stored in Supabase with complete version history. Users can edit artifacts, choose to keep or discard changes, and track all modifications over time</br>
      
      <br/>
      <br/>

      <h3>Other Site Features:</h3><br/>
      - Header dropdown cart management:</br> Quick access cart dropdown in header with item display, quantity controls, remove functionality, and total price calculation</br>
      <br/>- Search:</br> Global product search bar in header that navigates to filtered product results page</br>
      <br/>- Responsive design:</br> Mobile-first responsive layout that adapts seamlessly across all device sizes and screen orientations</br>
      <br/>- URL-based filtering:</br> Category and search filters managed through URL parameters, enabling shareable links and browser back/forward navigation</br>
      <br/>- Chat history sidebar:</br> Toggleable sidebar with chat history organized by date (Today, Yesterday, Last 7 days, etc.). Features infinite scroll pagination, active chat highlighting, and quick actions (share, delete) for each conversation</br>
      <br/>- Flexible UI modes:</br> Full-screen and compact modes with collapsible chat interface. Sidebar can be toggled on/off with smooth animations, and automatically reserves space on larger screens for optimal layout</br>
      <br/>
      <br/>

      <h3>How This Helps Users:</h3><br/>
      - Faster product discovery:</br> Ask "best smartphones under $500" instead of browsing filters</br>
      <br/>- Personalized shopping:</br> Get recommendations tailored to budget, needs, and preferences</br>
      <br/>- Informed decisions:</br> Compare products, understand features, and get answers instantly</br>
      <br/>- Seamless cart management:</br> Modify quantities and remove items through natural conversation</br>
      <br/>- Continuous assistance:</br> Click product cards in chat to view details while keeping AI assistant open for ongoing conversation and support</br>
      <br/>- Resume conversations:</br> Share chat URLs or access previous conversations from the sidebar to continue where you left off - perfect for returning customers and multi-session shopping journeys</br>
      <br/>- Edit and manage AI content:</br> Artifacts generated by the AI (product lists, comparisons, specifications) can be edited directly, with full version history to track changes and revert if needed</br>
      <br/>- 24/7 assistance:</br> Get help anytime without waiting for human support</br>
      <br/>
      <br/>

      <h3>How This Brings Success to Website Owners:</h3><br/>
      - Increased conversion rates:</br> AI guides users to products that match their needs, reducing decision paralysis</br>
      <br/>- Reduced bounce rate:</br> Engaging conversational interface keeps users on site longer</br>
      <br/>- Higher average order value:</br> Personalized recommendations can suggest complementary products</br>
      <br/>- Lower support costs:</br> AI handles common product questions, reducing customer service load</br>
      <br/>- Competitive advantage:</br> Modern AI-powered shopping experience differentiates from traditional e-commerce</br>
      <br/>- Better user engagement:</br> Interactive chat interface increases time on site and return visits</br>
      <br/>- Conversation persistence:</br> Users can return to previous conversations, share specific chats with others, and maintain context across sessions - increasing return visits and user retention</br>
      <br/>
      <br/>

      <h3> Core Stack: </h3><br/>
      - Next.js 14 with React 19 and TypeScript<br/>
      - Tailwind CSS v4 for styling<br/>
      - Vercel AI SDK: Framework for building AI-powered applications</br>
      - Supabase: Database for storing chat history and artifacts</br>
      `
      ,
      type: "AI Tool",
      date: "2025"

    },

    // Calendar scheduler
    {
      id: "ai-scheduler",
      name: "Liora AI - Booking assistant",
      description: `AI-powered appointment booking system that automates scheduling workflows through natural language conversation`,
      image1: "/images/projects/assets/ai-scheduler/wallpaper-1.png",
      image2: "/images/projects/assets/ai-scheduler/wallpaper-2.png",
      imagex: "/images/projects/assets/ai-scheduler/wallpaper-2.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "ReactJS", "NextJS", "TailwindCSS", "AI"],
      link: "https://liora-ai-calendar-scheduler.vercel.app/",
      // github: "https://github.com/SheriffKoder/template-1-everdrive",
      icon: "/images/projects/assets/ai-scheduler/ai-scheduler-icon.png",
      longerDescription:
      `
      <h2>
       This AI-powered calendar scheduling system transforms the traditional appointment booking process from a manual, time-consuming task into an automated, user-friendly experience that can scale with your business. By combining natural language processing with visual calendar management, it provides both convenience for users and operational efficiency for platforms.<br/>
      </h2>
      <br/>

      <h2>Core Features:</h2><br/>

        <h3>1. Natural Language Booking:</h3><br/>
        - Users can request appointments using plain language (e.g., "I want to book a marketing session")</br>
        - The AI analyzes existing bookings and unavailable dates to suggest available time slots</br>
        - Supports multiple appointment types: Business Consultation, Marketing Session, Financial Planning, Team Workshop</br>
        - Extracts exact appointment types from user messages automatically</br>
        <br/>

        <h3>2. Smart Availability Detection:</h3><br/>
        - Automatically checks existing bookings and unavailable dates to prevent conflicts</br>
        - Generates available slots intelligently (2 slots per day: 9 AM-12 PM and 2 PM-5 PM, each 3 hours long)</br>
        - Supports flexible date ranges: "this week", "next week", "this month"</br>
        - Handles specific date requests (e.g., "book on November 22nd")</br>
        - Timezone-aware: Converts local times to UTC automatically</br>
        <br/>

        <h3>3. Appointment Management:</h3><br/>
        - Update/Reschedule: Users can move appointments to different times or dates using natural language</br>
        - Remove/Cancel: Users can cancel appointments with simple requests</br>
        - Off-Schedule Days: Users can mark days as unavailable or make them available again</br>
        - Authorization: Only user-created appointments can be modified (admin appointments are protected)</br>
        <br/>

        <h3>4. Multiple Booking Methods:</h3><br/>
        - Chat-Based Booking: Select from AI-suggested available slots</br>
        - Direct Calendar Selection: Click on empty calendar cells to book directly</br>
        - Date-Specific Requests: "Add appointment on 22 Nov for marketing"</br>
        - Flexible Time Selection: Choose from morning (9 AM) or afternoon (2 PM) slots</br>
        <br/>

        <h3>5. Visual Calendar Integration:</h3><br/>
        - Real-time calendar view showing all appointments</br>
        - Color-coded by appointment type for easy identification</br>
        - Interactive calendar cells for direct booking</br>
        - Mobile-responsive with slide-out calendar for smaller screens</br>
        - Gantt-style timeline visualization for project management</br>
        <br/>
      <br/>

      <h2>Benefits for Users:</h2><br/>

        <h3>1. Conversational Interface:</h3><br/>
        - No need to learn complex UI - just talk naturally</br>
        - Intuitive interaction that feels like chatting with a helpful assistant</br>
        - Suggestion cards for quick actions</br>
        - Instant availability checks without manual searching</br>
        <br/>
        
        <h3>2. Smart Conflict Prevention:</h3><br/>
        - Automatically avoids double-bookings</br>
        - Respects unavailable dates and existing appointments</br>
        - Prevents scheduling conflicts before they happen</br>
        <br/>

        <h3>3. Timezone Awareness:</h3><br/>
        - Handles timezone conversions automatically</br>
        - Users can specify times in their local timezone</br>
        - System stores everything in UTC for consistency</br>
        <br/>

        <h3>4. Visual Feedback:</h3><br/>
        - See all appointments at a glance on the calendar</br>
        - Real-time updates when bookings are made or changed</br>
        - Clear visual distinction between booked and available slots</br>
        <br/>
      <br/>

      <h2>Benefits for Online Platforms:</h2><br/>
        <h3>1. Reduced Support Burden:</h3><br/>
        - Users can self-serve without human intervention</br>
        - AI handles common scheduling questions automatically</br>
        - Fewer support tickets and manual coordination needed</br>
        <br/>

        <h3>2. Increased Conversion Rates:</h3><br/>
        - Frictionless booking process reduces abandonment</br>
        - Instant availability information keeps users engaged</br>
        - Multiple booking methods accommodate different user preferences</br>
        <br/>

        <h3>3. Competitive Advantage:</h3><br/>
        - Modern, AI-powered experience differentiates from competitors</br>
        - Shows innovation and technological sophistication</br>
        - Improves user satisfaction and retention</br>
        <br/>
    <br/>

      <h3> Core Stack: </h3><br/>
      - Next.js 14 with React 19 and TypeScript<br/>
      - Tailwind CSS v4 for styling<br/>
      - Vercel AI SDK: Framework for building AI-powered applications</br>
      - date-fns: Modern JavaScript date utility library for date manipulation</br>
      `
      ,
      type: "AI Tool",
      date: "2025"

    },

    // Template-dashboard-2 // crypto
    {
      id: "crypto-dashboard",
      name: "Crypto Dashboard",
      description: `A real-time dashboard for managing and analyzing cryptocurrency portfolios with interactive data visualization and master filtering.`,
      image1: "/images/projects/assets/crypto-dashboard/wallpaper-1.png",
      image2: "/images/projects/assets/crypto-dashboard/wallpaper-2.png",
      imagex: "/images/projects/assets/crypto-dashboard/wallpaper-2.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "ReactJS", "NextJS", "TailwindCSS", "ChartJS"],
      link: "https://dashboard-example-2-six.vercel.app/",
      // github: "https://github.com/SheriffKoder/template-1-everdrive",
      icon: "/images/projects/assets/crypto-dashboard/crypto-dashboard-icon.png",
      longerDescription:
      `
      <h2>
        This project demonstrates highly configurable, dynamic, and customizable data representation components—including interactive line charts, greed index gauges, and bar charts—with master filtering across multiple data views.<br/>
        It also showcases the ability to translate a niche design aesthetic into functional, production-ready code with attention to detail and user experience.<br/>
        Design Source: https://pinterest.com/pin/906982812458713012/<br/>
      </h2>
      <br/>

      <h3> Key Features: </h3><br/><br/>
       - Multi-tab data views (Overview, Tokens, Pods, Composition) with centralized data management<br/>
       - Advanced search with auto-fill and cross-tab filtering<br/>
       - Interactive charts (line, bar, gauge) with time period controls<br/>
       - Real-time notifications and updates system in header<br/>
       - Wallet integration with modal connect flow<br/>
      <br/>

    <h3> Design Principles: </h3><br/>
      - Glassmorphism UI with backdrop blur and subtle borders<br/>
      - Dark theme with gradient overlays and smooth transitions<br/>
      - Responsive layout optimized for desktop and mobile<br/>
      - Data-driven architecture with reusable components<br/>
      <br/>

      <h3> Core Stack: </h3><br/>
      - Next.js 14 with React 19 and TypeScript<br/>
      - Tailwind CSS v4 for styling<br/>
      - Chart.js for interactive data visualization components<br/>
      - CSS custom properties for theming<br/>
      `
      ,
      type: "Dashboard",
      date: "2025"

    },     

    // Template-dashboard-1 / Neon
    {
      id: "neon-dashboard",
      name: "Neon Dashboard",
      description: `An interactive, real-time business analytics dashboard built with Next.js and TypeScript. It visualizes company performance metrics with dynamic data visualization and theme customization.`,
      image1: "/images/projects/assets/neon-dashboard/wallpaper-11.png",
      image2: "/images/projects/assets/neon-dashboard/wallpaper-22.png",
      imagex: "/images/projects/assets/neon-dashboard/wallpaper-22.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "ReactJS", "NextJS", "TailwindCSS", "ChartJS"],
      link: "https://dashboard-example-1.vercel.app/",
      // github: "https://github.com/SheriffKoder/template-1-everdrive",
      icon: "/images/projects/assets/neon-dashboard/neon-dashboard-icon.png",
      longerDescription:
      `
      <h2>
        This project focuses on building a custom, interactive business analytics dashboard with a dynamic theming system and responsive data visualizations,<br/>
        highlighting component architecture, custom SVG filter effects for visual polish, and real-time data synchronization across multiple visualization types. This project showcases the ability to create production-ready, visually engaging dashboards with custom components, advanced theming, and thoughtful UX design.<br/>
        Design Source: https://pinterest.com/pin/906982812458712447/<br/><br/>
        </h2>
      <br/>

      <h3> Core Features: </h3><br/><br/>

      <h2>1. Multi-company data visualization:</h2><br/>
      - Tracks 3 companies with location-based data<br/>
      - Displays metrics: revenue, profit, growth trends<br/>
      - Interactive selection updates all visualizations<br/>
      <br/>

      <h2>2. Custom chart components (Theme-synchronized colors)</h2><br/>
        - Donut charts with neon-effects showing: Revenue Profit (largest), Growth Profit (medium), Growth Profit (smallest)<br/>
        - Line chart: Multi-dataset, Custom styling with gradient fills, Interactive tooltips, neon-shadow effects<br/>
      <br/>

      <h2>3. Dynamic theme system</h2><br/>
        - Real-time theme switching<br/>
        - CSS variable-based color system<br/>
        - MutationObserver detects theme changes<br/>
        - All charts/UI elements update colors instantly<br/>
        - System theme detection support<br/>
      <br/>

      <h2>4. Interactive world map</h2><br/>
        - Globe background with location markers<br/>
        - Clickable markers for each company location<br/>
        - Location tooltips showing company location<br/>
      <br/>

      <h2>5. Data table (Transactions)</h2><br/>
        - Displays company data in a grid<br/>
        - Click to select company<br/>
        - Visual feedback on hover/selection<br/>
      <br/>

      <h3>6. Responsive design</h3><br/>
        - Mobile-first approach<br/>
        - Reorderable grid system adapts to screen sizes<br/>
      <br/>
      
      <h3> Core Stack: </h3><br/>
      - Next.js 14 with React 19 and TypeScript<br/>
      - Tailwind CSS v4 for styling<br/>
      - Custom SVG filters for neon glow effects<br/>
      - CSS custom properties for theming<br/>
      `
      ,
      type: "Dashboard",
      date: "2025"

    },        

    // Template-3 / PHOTOIX 
    {
      id: "photoix",
      name: "PHOTOIX - Premium photography services",
      description: `A scroll-driven 3D product showcase website, a premium photography studio. Interactive camera model that animate in real time as users scroll through sections, creating an immersive brand experience.`,
      image1: "/images/projects/assets/photoix/wallpaper-1.png",
      image2: "/images/projects/assets/photoix/wallpaper-2.png",
      imagex: "/images/projects/assets/photoix/wallpaper-2.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "ReactJS", "NextJS", "TailwindCSS", "GSAP", "ThreeJS"],
      link: "https://photoix-studio.vercel.app/",
      // github: "https://github.com/SheriffKoder/template-1-everdrive",
      icon: "/images/projects/assets/photoix/photoix-icon.png",
      longerDescription:
      `
      <h2>
        The site focuses on smooth animations throughout. These include the main entry, each section’s entrance, 3D object transitions between sections, and element animations on exit and re-entry. This creates a fluid scrolling experience.<br/><br/>
        Elements are precisely positioned across screen sizes. The hero 3D object and section content are aligned to complement each other, ensuring a cohesive visual balance on all devices.<br/><br/>
      </h2>
      <br/>

      <h3> Key Features: </h3><br/>
        - Hero section: Elements load in a smooth transtion where the 3D camera model sits centered in the background, creating an immediate, focused introduction to the product. Combined with the infinite scrolling client experiences, this makes a connection between the product and the people's end experience.<br/><br/>
        - Events section: PHOTOIX can be hired for photo sessions so this section cycles through event types and as the text changes, the camera rotates showing its screen which switches to a matching video, creating a direct connection between service and visual content. The synchronized updates reinforce PHOTOIX’s capability to capture different moments, making the service tangible and contextual.<br/><br/>
        - Gear/final CTA section: PHOTOIX also sells camera gear and accessories. As users enter this section, the camera rotates into a new composition alongside gear items (lenses and accessories). The 3D scene groups the camera with complementary products, reinforcing how these components work together. The camera’s prominent angle and the gear’s positioning convey fit and completeness. This supports both the product lineup and the message that quality gear elevates photography. The visual narrative shifts from showing the camera alone to showing it as part of a cohesive system, encouraging exploration of the full collection making it the natural conversion point.<br/>
      <br/>

      <h3> Design Principles: </h3><br/>
      - Seamless and synchronized integration of 3D scenes with 2D content powered by Three.js and GSAP ScrollTrigger.<br/>
      - Scroll-driven narrative progression across three sections with dynamic hero object positioning that adapts to section changes.<br/>
      - Contextual video playback on the camera's screen matching text content.<br/>
      - Smooth scroll with Lenis for refined page transitions.<br/>
      - Responsive 3D rendering optimized for desktop and mobile.<br/>
      <br/>
      
      <h3> Core Stack: </h3><br/>
      - Next.js 15 + React 19: App Router, server-side rendering, and cross-section state management.<br/>
      - React Three Fiber and Three.js: 3D scenes and WebGL rendering.<br/>
      - GSAP: Scroll-driven animations and camera/model transitions.<br/>
      - Lenis: Smooth scrolling across sections.<br/>
      - Tailwind CSS: Responsive styling and theming.<br/>
      `
      ,
      type: "Landing page",
      date: "2025"

    },    

    // Template-2 / Everline Car show
    {
      id: "everline-carshow",
      name: "Everline Car Show - Automotive Website",
      description: `Interactive 3D car rental platform with real-time 3D models, responsive design, and smooth loading animations.`,
      image1: "/images/projects/assets/everline/wallpaper-1.png",
      image2: "/images/projects/assets/everline/wallpaper-2.png",
      imagex: "/images/projects/assets/everline/wallpaper-x.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "ReactJS", "NextJS", "TailwindCSS", "GSAP", "ThreeJS"],
      link: "https://everline-carshow.vercel.app/",
      // github: "https://github.com/SheriffKoder/template-1-everdrive",
      icon: "/images/projects/assets/everline/everline-icon.png",
      longerDescription:
      `
      <h2>
      I developed this project to advance my 3D web development skills. The application features an immersive car dashboard with an interactive start button that launches users into a comprehensive car showcase experience.</br>
      The experience is meticulously crafted with precise animations, smooth transitions, and responsive 3D scaling across all devices. Users can seamlessly navigate between premium German vehicles, explore detailed car interiors in realistic outdoor environments, and enjoy fluid interactions.</br>
      The project demonstrates advanced Three.js integration, custom shaders, and sophisticated state management—serving as a foundation for future expansion while delivering an engaging, professional user experience.<br/>
      </h2>
      <br/>

      <h3> Key Features: </h3><br/>
      - Immersive 3D Car Showcase - Interactive Three.js models with realistic lighting and animations.<br/>
      - Interactive Dashboard Model - Mouse-responsive 3D dashboard with real-time movement tracking.<br/>
      - 360° Car Rotation - Manual car rotation controls for comprehensive viewing angles.<br/>
      - Responsive 3D Scaling - 3D elements dynamically scale with screen size for optimal viewing.<br/>
      - Real-Time Car Selection - Dynamic car switching with smooth transitions and descriptions.<br/>
      - Distorted Text Effects - Custom shader-based text animations for branding.<br/>
      - Auto-Activation - Smart scroll detection with debounced button activation.<br/>
      <br/>

      <h3> Design Principles: </h3><br/>
      - User-Centric Experience - Intuitive navigation with clear visual hierarchy and smooth interactions.<br/>
      - Responsive Design - Seamless adaptation across all device sizes with mobile-first approach.<br/>
      - Interactive Feedback - Visual responses to user actions (hover, click, scroll).<br/>
      - Visual Consistency - Cohesive color palette, typography, and spacing throughout the interface.<br/>
      - Minimalist Aesthetics - Clean, uncluttered interface that lets 3D content shine.<br/>
      - Smooth Transitions - Fluid animations and micro-interactions for professional feel.<br/>
      <br/>
      
      <h3> Core Stack: </h3><br/>
      - Next.js 14 (App Router) + TypeScript<br/>
      - Three.js + @react-three/fiber for 3D graphics<br/>
      - GSAP for advanced animations<br/>
      - Tailwind CSS + Custom CSS for additional styling for complex animations<br/>
      `
      ,
      type: "Landing page",
      date: "2025"

    },

    // Template-1 / Everdrive
    {
      id: "everdrive",
      name: "Everdrive - Automotive Website",
      description: `Premium automotive aesthetic with GSAP animations, responsive design, and immersive media experiences that reflect luxury brand positioning.`,
      image1: "/images/projects/assets/everdrive/wallpaper-1.png",
      image2: "/images/projects/assets/everdrive/wallpaper-2.png",
      imagex: "/images/projects/assets/everdrive/wallpaper-2.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "ReactJS", "NextJS", "TailwindCSS", "GSAP"],
      link: "https://template-1-everdrive.vercel.app/",
      github: "https://github.com/SheriffKoder/template-1-everdrive",
      icon: "/images/projects/assets/everdrive/everdrive-icon.png",
      longerDescription:
      `
      <h2>
      A premium single-page website showcasing modern web design principles through custom animations and micro-interactions. This project demonstrates how thoughtful design details can elevate a company profile from functional to exceptional, emphasizing premium aesthetics, smooth transitions, and immersive user experiences.<br/>
      </h2>
      <br/>

      <h3> Key Features: </h3><br/>
      - Entry Animation: Multi-layered brand logo reveal conveying luxury automotive heritage.<br/>
      - Hero Section: GSAP-powered infinite vertical marquee with hover-triggered content switching and custom animated side navigation.<br/>
      - Testimonials: Scroll-triggered zoom effects with floating client images creating 3D depth perception and dynamic scaling, transitioning into draggable feedback cards.<br/>
      - Vehicle Categories: Responsive CSS Grid with staggered fade animations and interactive hover states.<br/>
      - Call-to-Action: Full-screen video storytelling enhancing user engagement.<br/>
      <br/>

      <h3> Design Principles: </h3><br/>
      - Premium micro-interactions.<br/>
      - Smooth, timed transitions.<br/>
      - Clean typography.<br/>
      - Organized information hierarchy.<br/>
      - Fully responsive design.<br/>
      <br/>
      
      <h3> Core Stack: </h3><br/>
      - Next.js 14 (App Router) + TypeScript<br/>
      - GSAP for advanced animations<br/>
      - Tailwind CSS + Custom CSS for additional styling for complex animations<br/>
      `
      ,
      type: "Landing page",
      date: "2025"

    },

    // Healthcare Finance Dashboard
    {
      id: "healthcarefinance",
      name: "Healthcare Finance Dashboard",
      description: `A comprehensive dashboard designed to help healthcare companies track and analyze their financial performance across different facilities, services, and time periods.`,
      image1: "/images/projects/assets/healthcarefinance/wallpaper1.png",
      image2: "/images/projects/assets/healthcarefinance/wallpaper2.png",
      imagex: "/images/projects/assets/healthcarefinance/wallpaper2.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "NextJS", "TailwindCSS", "ChartJS"],
      link: "https://healthcare-finance-dashboard.vercel.app/",
      github: "https://github.com/SheriffKoder/healthcare_finance_dashboard",
      icon: "/images/projects/assets/healthcarefinance/healthcarefinance-icon-2.png",
      longerDescription:
      `
      <h2>
      This is my first project to display visualizations and data analysis and I've done it without any AI assistance.<br/>
      </h2>
      <br/>
      
      <h3>How to use </h3><br/>
      - Open the filter by clicking on the 'change' button and select the desired filter options.<br/>
      - See the real-time updates across all visualizations.<br/>
      <br/>
      <h3> Business Value </h3><br/>
      This dashboard helps healthcare administrators:<br/>
      - Monitor Revenue Performance across facilities and time periods<br/>
      - Identify Top Payers and payment patterns<br/>
      - Track Service Utilization and profitability<br/>
      - Analyze Payment Collection Rates and identify issues<br/>
      - Compare Facility Performance using standardized KPIs<br/>
      - Make Data-Driven Decisions for resource allocation and billing strategies<br/>
      <br/>

      <h3> Introduction </h3><br/>
      The dashboard visualizes financial data for a healthcare company that operates multiple facilities, each offering various medical services to patients. It helps track:<br/>
      - Revenue and billing performance<br/>
      - Payment collection rates <br/>
      - Patient demographics and payer analysis<br/>
      - Service utilization and profitability<br/>
      - Key Performance Indicators (KPIs)<br/>
      <br/>
      <br/>

      <h3> Functionalities in this website </h3><br/>
      Dynamic Filtering System: <br/>
      - Filter data by Facility, Year, or Payer Company<br/>
      - Real-time updates across all visualizations<br/>
      - Responsive filter interface with expandable options<br/>
      <br/>
      Financial Score Cards: <br/>
      - Total Billed Amount - What was charged to patients<br/>
      - Total Paid Amount - What was actually collected<br/>
      - OOPM (Out-of-Pocket Maximum) - Insurance coverage limits achieved<br/>
      <br/>
      Data Visualizations:<br/>
      - Bar Charts: Top payers by revenue and patient volume<br/>
      - Pie Charts: Payment distribution across different services<br/>
      - Line Charts: Trends showing charges vs payments over time<br/>
      - Gauge Charts: Patient payment completion rates and total amounts<br/>
      - Data Table: Company-wide KPI comparison across all facilities<br/>
      <br/>
      Responsive Design:<br/>
      - Mobile-first approach with Tailwind CSS<br/>
      - Glass-morphism UI design with gradient backgrounds<br/>
      - Adaptive layouts for different screen sizes<br/>
      <br/>      
      <br/>
      <h3> Technologies in this website </h3><br/>
      - Front-end: Next.js 15 with React 19, TypeScript for type safety, Tailwind CSS for styling, Chart.js with React Chart.js 2 for visualizations<br/>
      <br/>
      <h3> Data Structure: </h3><br/>
      - Hierarchical data model: Company → Facilities → Services → Patients<br/>
      - Each patient has: name, member ID, payer, date of service, billed amount, paid amount, payment percentage<br/>
      - Each service has: name (LOC), charge, OOPM, and associated patients<br/>
      <br/>
      <br/>
      `
      ,
      type: "Web app",
      date: "2024"

    },

    // Amazon (Partial-Clone)
    {
      id: "amazon",
      name: "Amazon (Partial-Clone)",
      description: `Create an account, select and order products or post your item for sale on the website.`,
      image1: "/images/projects/assets/amazon/wallpaper1.png",
      image2: "/images/projects/assets/amazon/wallpaper2.png",
      imagex: "/images/projects/assets/amazon/wallpaperx.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "Accessibility","TypeScript", "ExpressJS", "NodeJS", "MongoDB"],
      link: "https://amazon-nodejs.onrender.com",
      github: "https://github.com/SheriffKoder/Personal-Projects--phase-3/tree/main/recap/nodejs/recap/section22",
      icon: "/images/projects/assets/amazon/amazon-icon.jpg",
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

    // Real-Estate Admin
    {
      id: "realestateadmin",
      name: "Real-Estate Admin",
      description: `Be a real estate agent in Richard's real-estate agency.
      Create an account to add, edit and delete blog-posts/properties. Manage other agents on your team.
      Let clients see your latest entries and surely they will book a visit on a property with you!
      `,
      image1: "/images/projects/assets/realestateadmin/wallpaper1.png",
      image2: "/images/projects/assets/realestateadmin/wallpaper2.png",
      imagex: "/images/projects/assets/realestateadmin/wallpaperx.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "TailwindCSS", "TypeScript", "MongoDB", "NextJS"],
      link: "https://phase-3-one.vercel.app/",
      github: "https://github.com/SheriffKoder/Personal-Projects--phase-3/tree/main/projects/re-nextjs",
      icon: "/images/projects/assets/realestateadmin/re-icon.png",
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
        - Upload local images, store the image files on the cloud using (Cloudinary) and store/retrieve their urls to/from the database.<br/>

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
        `,

      type: "site",
      date: "2024"

    },

    // Car Maintenance 1 (RESTful API)
    {
      id: "carmaint-restful",
      name: "Car Maintenance 1 (RESTful API)",
      description: `This app can help you track your car checkups and make maintenance on time.`,
      image1: "/images/projects/assets/carmaint1/wallpaper1.png",
      image2: "/images/projects/assets/carmaint1/wallpaper2.png",
      imagex: "/images/projects/assets/carmaint1/wallpaperx.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "TailwindCSS", "TypeScript", "MongoDB", "ReactJS", "ExpressJS"],
      link: "https://carmaint-rest-full-react.vercel.app/",
      github: "https://github.com/SheriffKoder/Car-Maintenance-Tracker-RESTful",
      icon: "/images/projects/assets/carmaint1/carmaint1-icon.png",
      longerDescription: `
      <h2>Description</h2><br/>
This app will help you stay on track on keeping your car well maintained.<br/>
Where you can access it on any device that has a browser.<br/>
the app allows you to add details for your car<br/>
and add multiple checkups, each with a different name, color and due date.<br/>
but not just track with a due date, also a check history and know where this check was completed and how many times.
change.<br/>
<br/>
<br/>
<h3>How to use</h3>
<br/>
- <b>Sign-up or login to you your account</b><br/>
- Add a car to be promoted to access your profile.<br/>
- Where you can edit the car's info or delete the car (deleting will remove all checkups).<br/>
<br/>
- <b>Add a new checkup</b><br/>
- choose the checkup title, the title's color and see how it looks before applying.<br/>
- select the next due date and add some notes.<br/>
- select an initial date if this checkup has been done before adding on the application for reference (optional).<br/>
<br/>
- Once added, you can see how many days remaining till the next check with a color indicator (Green=far ahead, Yellow=should do it soon, Red=overdue).<br/>
<br/>
- Edit/remove added checkups.<br/>
- Once done with a checkup, mark it as completed.<br/>
<br/>
<b>When the checkup is completed you can:</b><br/>
- update the checkup to add a new due date.<br/>
- check the checkup history to view/edit/remove from previous completions.<br/>
<br/>
- use the navigation links, back to home to navigate through the app and the navigation bar to sign-out.<br/>
<br/>
<br/>
<br/>
<h2>Technical Introduction</h2><br/>
<b>Project's purpose:</b> after building a project with NextJS, I wanted to build a project with vanilla React.<br/>
Given that React does not support APIs and routing like NextJS,<br/>
I had to develop a separate NodeJS API project and another version of it with GraphQL to handle the react front-end API requests and save information to the database.<br/>
which is something also I wanted to practice and learn, so this project is composed of two separate applications.<br/>
<br/>
<b>this version</b> uses NodeJS/ExpressJS without GraphQL.<br/> 
<br/>
<h3> Technologies in this website </h3><br/>
  - Front-end: ReactJS w/ Typescript & TailwindCSS<br/>
  - Back-end: REST API built with NodeJS, expressJS<br/>
  - Database: MongoDB w/ Mongoose<br/>
<br/>
Back-end libraries used:<br/>
- body-parser (use req.body.field), multer (local image storage), bcrypt (hashing passwords),
express-validator (input validation), jwt authentication tokens).<br/>
<br/>
<br/>
<h3> Functionalities in this website </h3><br/>
<b>Front-end</b><br/>
- Routing<br/>
<div class="ml-2">if there is a no user in context, the users will will be redirected to the welcome page to login or sign-up.<br/></div>
<br/>
<div class="ml-2">if there is a user in context but has no car added yet, the users will will be redirected to add a car.<br/></div>
  <br/>
<div class="ml-2">if the there is a user in context (logged in) and has a car, the users can access their profile page to edit, add, delete their car or checkups.<br/></div>
<br/>
- Make the UI more mobile-like and feel more dynamic.<br/>
- Make the app UI responsive and work with large screen sizes.<br/>
- Allow checkups to have history instances and be able to manipulate these instances.<br/>
- Users can see the title's color of checkups while editing/adding.<br/>
- Display color and icon indicators to the user (car image status, checkup status, checkup completion status).<br/>
- Use the same form components when adding/editing a car or a checkup.<br/>
- Add navigation links to top and bottom of the pages.<br/>
- Compare dates to display the difference in numbers to the user.<br/>
- Save images locally.<br/>
- Save user information in react's context instead of having to use a GET request on every page.<br/>
- Authenticate requests sent to the backend with tokens.<br/>
<br/>
<b>Back-end</b><br/>
- Input validation.<br/>
- Password encryption (bcrypt).<br/>
- User authentication (jwt tokens).<br/>
- Local image storage (multer).<br/>
- Be able to access and manipulate (edit/delete/complete) from the multiple checks present in the car all-checks array separately.<br/>
- Be able to manipulate a specific check history instances to edit or delete them from start/middle/end of the check array.<br/>
<br/>
please visit the github page for more details about the program's logic.
<br/>
<br/>
Yet to be added:<br/>
- view input feedback received from the API to the user on failure or success of entries.<br/>
- use a cloud service to store car images and receive a url to store in the database.<br/>
- use a third-party library to manipulate car images by removing their background.<br/>
- avoid losing the react.context value when refreshing the page and thus have to login again.<br/>
- send emails to users to notify on close due dates.<br/>
- check user authentication when manipulating checks as done when manipulating the car information.<br/>
`,
      type: "site",
      date: "2024"
    },

    // Car Maintenance 2 (GraphQL RESTful API)
    {
      id: "carmaint-graphql",
      name: "Car Maintenance 2 (GraphQL REST API)",
      description: `This app can help you track your car checkups and make maintenance on time.`,
      image1: "/images/projects/assets/carmaint2/wallpaper1.png",
      image2: "/images/projects/assets/carmaint2/wallpaper2.png",
      imagex: "/images/projects/assets/carmaint2/wallpaperx.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "TailwindCSS", "TypeScript", "MongoDB", "ReactJS", "GraphQL", "ExpressJS"],
      link: "https://carmaint-graphql-react.vercel.app/",
      github: "https://github.com/SheriffKoder/Car-Maintenance-Tracker-RESTful-Graphql",
      icon: "/images/projects/assets/carmaint2/carmaint2-icon.png",
      longerDescription: `
<h2>Description</h2><br/>
This app will help you stay on track on keeping your car well maintained.<br/>
Where you can access it on any device that has a browser.<br/>
the app allows you to add details for your car<br/>
and add multiple checkups, each with a different name, color and due date.<br/>
but not just track with a due date, also a check history and know where this check was completed and how many times.
change.<br/>
<br/>
<br/>
<h3>How to use</h3>
<br/>
- <b>Sign-up or login to you your account</b><br/>
- Add a car to be promoted to access your profile.<br/>
- Where you can edit the car's info or delete the car (deleting will remove all checkups).<br/>
<br/>
- <b>Add a new checkup</b><br/>
- choose the checkup title, the title's color and see how it looks before applying.<br/>
- select the next due date and add some notes.<br/>
- select an initial date if this checkup has been done before adding on the application for reference (optional).<br/>
<br/>
- Once added, you can see how many days remaining till the next check with a color indicator (Green=far ahead, Yellow=should do it soon, Red=overdue).<br/>
<br/>
- Edit/remove added checkups.<br/>
- Once done with a checkup, mark it as completed.<br/>
<br/>
<b>When the checkup is completed you can:</b><br/>
- update the checkup to add a new due date.<br/>
- check the checkup history to view/edit/remove from previous completions.<br/>
<br/>
- use the navigation links, back to home to navigate through the app and the navigation bar to sign-out.<br/>
<br/>
<br/>
<br/>
<h2>Technical Introduction</h2><br/>
This is the <b>second version</b> of a project that holds the same name,<br/>
In this version the API has been re-built using GraphQL and the front-end has been re-adjusted only in the method of receiving the new API data in the format of GraphQL query plus changing some colors on the UI<br/>
As graphQL allows more control to the request inputs being received and allows the front-end to select "specific" data from the received API response.<br/>
<br/>
<b>Project's purpose:</b> after building a project with NextJS, I wanted to build a project with vanilla React.<br/>
Given that React does not support APIs and routing like NextJS,<br/>
I had to develop a separate NodeJS API project and another version of it with GraphQL to handle the react front-end API requests and save information to the database.<br/>
which is something also I wanted to practice and learn, so this project is composed of two separate applications.<br/>
<br/>
<h3> Technologies in this website </h3><br/>
  - Front-end: ReactJS w/ Typescript & TailwindCSS<br/>
  - Back-end: REST API built with NodeJS, expressJS, GraphQL<br/>
  - Database: MongoDB w/ Mongoose<br/>
<br/>
Back-end libraries used:<br/>
- body-parser (use req.body.field), multer (local image storage), bcrypt (hashing passwords),
express-validator (input validation), jwt authentication tokens), GraphQL, express-GraphQL, validator (input format validation)<br/>
<br/>
<br/>
<h3> Functionalities in this website </h3><br/>
<b>Front-end</b><br/>
- Routing<br/>
<div class="ml-2">if there is a no user in context, the users will will be redirected to the welcome page to login or sign-up.<br/></div>
<br/>
<div class="ml-2">if there is a user in context but has no car added yet, the users will will be redirected to add a car.<br/></div>
  <br/>
<div class="ml-2">if the there is a user in context (logged in) and has a car, the users can access their profile page to edit, add, delete their car or checkups.<br/></div>
<br/>
- Make the UI more mobile-like and feel more dynamic.<br/>
- Make the app UI responsive and work with large screen sizes.<br/>
- Allow checkups to have history instances and be able to manipulate these instances.<br/>
- Users can see the title's color of checkups while editing/adding.<br/>
- Display color and icon indicators to the user (car image status, checkup status, checkup completion status).<br/>
- Use the same form components when adding/editing a car or a checkup.<br/>
- Add navigation links to top and bottom of the pages.<br/>
- Compare dates to display the difference in numbers to the user.<br/>
- Save images locally.<br/>
- Save user information in react's context instead of having to use a GET request on every page.<br/>
- Authenticate requests sent to the backend with tokens.<br/>
<br/>
<b>Back-end</b><br/>
- Input validation.<br/>
- Password encryption (bcrypt).<br/>
- User authentication (jwt tokens).<br/>
- Image storage (multer).<br/>
- Be able to access and manipulate (edit/delete/complete) from the multiple checks present in the car all-checks array separately.<br/>
- Be able to manipulate a specific check history instances to edit or delete them from start/middle/end of the check array.<br/>
<br/>
please visit the github page for more details about the program's logic.
<br/>
<br/>
Yet to be added:<br/>
- view input feedback received from the API to the user on failure or success of entries.<br/>
- use a cloud service to store car images and receive a url to store in the database.<br/>
- use a third-party library to manipulate car images by removing their background.<br/>
- avoid losing the react.context value when refreshing the page and thus have to login again.<br/>
- send emails to users to notify on close due dates.<br/>
- check user authentication when manipulating checks as done when manipulating the car information.<br/>
`,
      
      type: "site",
      date: "2024"

    },
    
    
    
  

  ];

  export const DraftProjects = [

    // Apple iPhone
    {
      name: "Apple iPhone 15 Pro",
      description: `Apple style webpage displaying user interactive videos and iPhone 3D models `,
      image1: "",
      image2: "",
      imagex: "",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "ReactJS", "TailwindCSS", "ThreeJS"],
      link: "https://draft-projects-2.vercel.app/",
      github: "https://github.com/SheriffKoder/Draft-Projects-2/tree/main/APPLE-GSAP-3JS",
      icon: "/images/projects/assets/drafts/appleiPhone/appleiPhone.jpg",
      id: "draft-111024",
      longerDescription: ``,
      type: "page",
      date: "2024"

    },
    // Shop ExpressJs
    {
      name: "Shop (MongoDB)",
      description: `A simple shop website with the ability to add/edit products and make orders to/from a MongoDB database. `,
      image1: "/images/projects/assets/drafts/shopexpress/wallpaper1.png",
      image2: "",
      imagex: "",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "ExpressJS", "NodeJS", "MongoDB"],
      link: "https://phase2-nodejs.onrender.com/products",
      github: "https://github.com/SheriffKoder/Course--Phase2--jQuery-ResponsiveDesign-NodeJS/tree/main/courses/nodejs/section29",
      icon: "/images/projects/assets/drafts/shopexpress/shopexpress.png",
      id: "draft-1",
      longerDescription: 
      `A simple CRUD shop website built during Maxmillan's Nodejs course. 
      <br\>built with basic ExpressJS and additional helper libraries to handle the received and sent information.
      <br\><br\>
      the front-end is constructed with "ejs", a HTML/CSS/Javascript templating engine.
      <br\>using the MVC (Model-view-controller) software architecture for code organization
      <br\>and using express middlewares that forward to routes then use controller functions.
      <br\>used helper libraries like (multer: to store images locally, csrf protections, flash: to send messages to the front end as a response from the controller functions, express-session)
      `,
      type: "site",
      date: "2023"

    },
    
    // Promptopia
    {
      // phase2/courses/nodejs/section22 
      name: "Promptopia",
      description: `Sign in with your Google account to add/edit/delete posts. Done for the purpose of learning NextJS, Tailwind with a connected MongoDB database.`,
      image1: "/images/projects/assets/drafts/shopexpress/wallpaper1.png",
      image2: "",
      imagex: "",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "NextJS", "TailwindCSS", "TypeScript", "MongoDB"],
      link: "https://promptopia-two-umber.vercel.app",
      github: "https://github.com/SheriffKoder/Draft-Projects-1",
      icon: "/images/projects/assets/drafts/promptopia/icon.png",
      id: "draft-2",
      longerDescription: 
      `
      `,
      type: "page",
      date: "2023"

    },
    
    // Movie-Library
    {
      name: "Movie Library",
      description: `A website displaying the latest movies in theaters and their description with the Help of an API. Done for the purpose of learning ReactJS.`,
      image1: "/images/projects/assets/drafts/movie-library/wallpaper1.png",
      image2: "/images/projects/assets/drafts/movie-library/wallpaper2.png",
      imagex: "/images/projects/assets/drafts/movie-library/wallpaperx.png",
      imageAnim:"",
      tech: ["HTML5", "CSS3", "JavaScript", "ReactJS"],
      link: "https://react-movie-app-pink-tau.vercel.app/",
      github: "https://github.com/SheriffKoder/Draft-Projects-1",
      icon: "/images/projects/assets/drafts/movie-library/icon.png",
      id: "draft-3",
      longerDescription: 
      `
      Displaying the latest movies in theaters with their description and thumbnails with the help of the The Movie Database (TMDB) API.<br/>
      The project emphasizes on the use of separate small components to be combined on a one major component.<br/>
      The component styling was made through the "styled-components" third party library which allows for each component to have a file describing its css styling.<br/>
      The configuration for fetching from the API was provided by the tutorial's author to explain from and focus on the idea of Learning reactJS.<br/>
      This app was possible by <a href="https://www.youtube.com/@Weibenfalk">Thomas Vavenfeld</a>.<br/>
      `,
      type: "site",
      date: "2023"

    },
    
    //3D Calculator
    {
      name: "3D Calculator",
      description: `A 3D calculator built only with HTML/CSS/Javascript`,
      image1: "/images/projects/assets/drafts/calc/wallpaper1.png",
      image2: "",
      imagex: "",
      imageAnim: "/images/projects/assets/drafts/calc/wallpaper1.gif",
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "https://calculator-kappa-self.vercel.app/",
      github: "https://github.com/SheriffKoder/Course--Phase1--TheOdinProject/tree/main/side_notes/calculator12",
      icon: "/images/projects/assets/drafts/calc/icon.png",
      id: "draft-4",
      longerDescription: 
      `
      <h2>Calculator 3D Model</h2><br/>
      One of my very early projects when I was starting learning HTML,CSS,Javascript.<br/>
      There was an assignment in the Odin Project course to implement a simple calculator,<br/>
      However I took it a step further to add more styling and functionality to emulate a CASIO scientific calculator in these points:<br/>
      <br/>
- Make a 3D effect with vanilla CSS.<br/>
- Use any sign from * or X, / , + , -<br/>
- Add and position a screen and buttons as an overlay over a real calculator image.<br/>
- Accept long input lengths.<br/>
- Calculate from inputs which can contain many and different signs together.<br/>
- Be smart enough to know if it is valid to place a number, a sign, an open bracket or a closed bracket depending on the current input location in the input string.<br/>
- Support nested brackets and be smart to not calculate input if the opened brackets are not closed yet properly.<br/>
- Side by side brackets act as a multiplication calculation.<br/>
- Support decimals.<br/>
- Click DEL/keyboard backspace to remove from input.<br/>
- Click =/keyboard-enter to display result.<br/>
- Click AC/keyboard-CMD/keyboard-ESC to reset.<br/>
<br/>
<h3>Yet to be implemented</h3><br/>
- the design allows to easily add future features of calculating more advanced
calculations like tan(),cos(),sin(), power etc.<br/>
- accept X or x as multiplication inputs in javascript calculations.<br/>
- minor fixes and re-adjustments.<br/>
      `,
      type: "site",
      date: "2023"

    },

    // mySQL shop
    {
      name: "Shop (mySQL)",
      description: `A simple shop website with the ability to add/edit products and make orders to/from a mySQL database.`,
      image1: "/images/projects/assets/drafts/mysql1/wallpaper1.png",
      image2: "/images/projects/assets/drafts/mysql1/wallpaper2.png",
      imagex: "",
      imageAnim: "",
      tech: ["HTML5", "CSS3", "JavaScript", "NodeJS", "ExpressJS", "mySQL", "Sequelize"],
      link: "https://phase-3-1ty9.onrender.com/admin/products",
      github: "https://github.com/SheriffKoder/Personal-Projects--phase-3/tree/main/projects/section10-SQL",
      icon: "/images/projects/assets/drafts/mysql1/icon.png",
      id: "draft-5",
      longerDescription: 
      `
      <h3>The website demonstrates using a mySQL database to store product data.</h3><br/>
      The investment in the front-end design is really simple, because the target was to learn how to connect the front-end and the back-end together and manage the products's info.<br/>
      <br/>
      Used the Sequelize library to facilitate the interaction with the mySQL database.<br/>
      The idea of a mySQL database is to define the relation between (Product/Cart/Orders/Users).<br/>
      <br/>
      Used the MVC software architecture to separate functionalities and display specific data for each page visited.<br/>
      <br/>
      <h3>What can be done on this website:</h3><br/>
      - an admin user is created by default.<br/>
      - Add a product by filling in the details from the nav bar.<br/>
      - The ability to edit with the old information present from the "Admin Products" page.<br/>
      - Delete a product from the "Admin Products" page.<br/>
      - Add a product to the user's cart and view the cart.<br/>
      - Make an order from the cart and clear the cart items.<br/>
      - View your orders.<br/>
      <br/>
      <h3>Technologies used:</h3><br/>
      Back-end: Javascript, NodeJS, ExpressJS, Sequelize.<br/>
      Front-end: HTML/CSS, ejs templating engine.<br/>
      <br/>
      <h3>Yet to be added:</h3><br/>
      - Image upload support with an online cloud service.<br/>
      - Add separate users by signing-up, signing in.<br/>
      - Add sessions, authentication and input validation.<br/>
      - Process orders by checking out and paying.<br/>
      - and many other features mostly implemented in the <a href="https://www.sheriffkoder.com/projects/practice-1">Amazon's shopping website clone</a>.<br/>


      `,
      type: "site",
      date: "2023"

    },
  
  ]

  // Configuration for featured projects: specify IDs and star status
  const featuredProjectsConfig = [
    { id: "photoix", star: false },      // PracticeProjects[0]
    { id: "everline-carshow", star: true },        // PracticeProjects[1]
    { id: "hubstaff-timetracker", star: false },     // PracticeProjects[3]
    { id: "reviewlawyer", star: false }            // DraftProjects[3]
  ];

  // Helper function to get featured projects by IDs
  function getFeaturedProjectsByIds(configs: Array<{ id: string; star: boolean }>) {
    const allProjects = [
      ...PracticeProjects,
      ...DraftProjects,
      ...clientProjects
    ];

    const projectMap = new Map(allProjects.map(project => [project.id, project]));

    return configs
      .map(config => {
        const project = projectMap.get(config.id);
        if (!project) {
          console.warn(`Project with id "${config.id}" not found`);
          return null;
        }
        return { ...project, star: config.star };
      })
      .filter((project): project is NonNullable<typeof project> => project !== null);
  }

  export const featuredProjects = getFeaturedProjectsByIds(featuredProjectsConfig);


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

