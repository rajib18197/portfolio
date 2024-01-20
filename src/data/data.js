// const techStacks = [
//   "React as in-house app is one of the perfect use case of react",
//   "React Router as standard in react community and for SPA",
//   "Remote State management RTK Query for leveraging beautiful user experience (less network request/caching, revalidation, optimistic and pessimistic updates and more)",
//   "React hook form for simplify manual state management and error handling in form",
//   "Tailwind CSS for styling And other tools - React Icons, Supabase",
// ];

const techStacks = [
  "React.@ as in-house app is one of the perfect use case of react",
  "React Router.@ as standard in react community and for SPA",
  "Remote State management React Query.@ for leveraging beautiful user experience (less network request/caching, revalidation, pre-fetching and more)",
  "React hook form.@ for simplify manual state management and error handling in form",
  "Styled Components.@ for styling",
  "Supabase.@ for creating full-fleged backend",
  "ReCharts.@ for creating nice charts",
  "React hot toast and React Icons.@ for notifications and charts",
];

// const challenges = [
//   "Figuring out the right code organiztion.h. I always try to follow some sort of patterns and architecture when I am building an app because I truely believe A project is never really done as I often need to add new feature or changes something inside and when I don't follow a good image of the code then it becomes too hard and frustrating when I am reading my code and wanted to change something.",

//   "Designing the database.h. Run into many issues when designing database as this is my first database design and going through lot of re-thinking about that.",

//   "On how to think about cache and invalidation.h. I run into some quirky behavior when implementing optimistic/pessimistic update and got to do lot of experimenting and study about varius APIs like [refetchOnMountOrArgChange, refetchOnFocus, unused queries, cache time] and trying to relate with react query and how it's done on react query",
// ];

const challenges = [
  "Event Deletgation.h. I always try to follow some sort of patterns and architecture when I am building an app because I truely believe A project is never really done as I often need to add new feature or changes something inside and when I don't follow a good image of the code then it becomes too hard and frustrating when I am reading my code and wanted to change something.",

  "Designing the database.h. Run into many issues when designing database as this is my first database design and going through lot of re-thinking about that.",

  "On how to think about cache and invalidation.h. I run into some quirky behavior when implementing optimistic/pessimistic update and got to do lot of experimenting and study about varius APIs like [refetchOnMountOrArgChange, refetchOnFocus, unused queries, cache time] and trying to relate with react query and how it's done on react query",
];

// const thoughts = [
//   "I divide my application into couple of feature categories like in this app I have auth, invoices, cartList feature categories",
//   "After that I try to drill down into each of this feature categories",
//   "Then I figured out all the features I need to implement for each categories",
//   "I always striving for reuable component whenever need arises as it is one of the core and main advantage of the React library",
//   "As one of the big goal of this project is to ensure seamless experiece and for that I leverage most of the common benefits that RTK query offers and try to inject them with the best possible way.",
// ];

const thoughts = [
  "Divide the application into multiple of feature categories: auth, dashboard, Job, Application, setting.",
  "Next up I drill down each of the feature categories, figured out all the features they need",
  "Take one feature at a time, break up that UI feature into components to separate responsibilities, think about state Management (which type: local/global) and data flow to power up the feature",
  "Always striving for reusable component whenever need arises as it's one of the core and main advantage of React",
  "As one of the major goal of this project is to ensure seamless experiece and for that I leverage most of the finest benefits React query offers and inject them with best possible way.",
];

// const learnings = [
//   "The big lesson I get from this project where optimistic & pessimistic update makes sense and where Not as these two feature requires good thinking of how to revalidate a cache.",
//   " I have to go quite a dive dive into these topics and learn their pros and cons.",
//   "Also I run into many issues when designing database and found some interesting and valuable guides for designing them",
// ];

const learnings = [
  "Got to know even better how JavaScript event propagation works.",
  "learned lots of useful principles to implement filters, sort, pagination, menus.",
  "seeing use cases of design patterns: Compound Component, render props for highest flexibility.",
  "come up with lot more clarity why in react we always work with immutability and component model.",
  "Got some valuable guides for database designing",
];

// const descriptions = [
//   "The Project combinInvoices is a small centralized place for effortless tracking where company log their invoices. They specialize in offering cutting-edge solutions.",
//   "This business wants an internal application that will be used inside the company to track everything about their invoices: Invoice details with assoisiated project and tasklist.",
//   "I built this project from the ground up, employing React for the frontend and Supabase for the backend. I even took charge of database design apart from react and create a seamless user experience with features like optimistic and pessimistic updates.",
// ];

const descriptions = [
  "The Enterprise Inc. is A small organization that needs to create an useful internal Application which provide utilities and ensures to manage everything about their recruitment workflow: Job Posts, Candidates Applications, Candidates.",

  "An in-house tool that helps business to look through candidates and get them selected to their space, and also imprints sequence of events: Job Posts, Job Applications as well as analyse them visually.",

  "Built this beautiful project entirely with great care, by employing React and Supabase, took charge of database design, create a better UX with features like caching remote data, re-fetching, pre-fetching, complex filterations etc.",
];

// const requirementsList = [
//     {
//       featureName: "Authentication Feature",
//       features: [
//         "App users are company's employees. They need to be logged into  the application to perform tasks",
//         "Creation of new users happens inside the app to make sure compnay's employee can get accounts",
//       ],
//     },

//     {
//       featureName: "Invoices Feature",
//       features: [
//         "app shows list of all invoices with Invoice name, project name, payment due date, custmer name, task quantity, task price and status",
//         "users can do all the CRUD operation for invoices seamlessly",
//         "refine the list as users want because of app has slightly complex filters",
//         "sorting and pagination operations",
//         " display details of an invoice such as - customer info, company info, status.",
//       ],
//     },

//     {
//       featureName: "Single Invoice Details and Customers",
//       features: [
//         "Display The project that invoice offer and all the sub-tasks of that project",
//         "Can add new task item in the cart from that sub-tasks which the company completed for the customer",
//         "update the task item quantity and also delete the item",
//         "mark the invoice as 'paid' status from pending after customer make the full payment",
//       ],
//     },
//   ];

const requirementsList = [
  {
    featureName: "Authentication Feature",
    features: [
      "App users are company's employees. They need to be logged into  the application to perform tasks",
      "Creation of new users happens inside the app to make sure compnay's employee can get accounts",
      "Can upload avatar and change name or password",
    ],
  },

  {
    featureName: "Job Posts Feature",
    features: [
      "App needs a table view with all job posts, showing the job name, type, experience, salary, benefit and current status",
      "users should be able to do all the CRUD operation (Create, Read, Update, Delete) for Job Posts",
      "App needs to have Client Side Data Operations: filters, sorting so that users are able to refine the table with ease",
      " display details of an invoice such as - customer info, company info, status.",
    ],
  },

  {
    featureName: "Job Applications Feature",
    features: [
      "App needs a table view with all applications, showing the resume's pdf, status, and speciality, as well as Job and candidate's data",
      "complex server side filters with much more configurations and also another data operation: Pagination",
      "update the task item quantity and also delete the item",
      "To ensure performance and best user experience app needs to includes i.debounce technique for searching i.caching server data for less network request i.leverage re-validate remote data to keep UI in sync with server i.add Slightly complex pagination and i.pre-fetching to make better pagination experience",

      "display details of an Application such as - candidate info, Job info, observations, status, applicants performance, weather applicant face extra round or Not",

      "should be able to perform CRUD oprations including pdf updload and i.give candidate a performance based rating i.write some observation about them in a small interactive editor i.choose to under-review as interview proceed.",
      "should be able to Confirm that a candidate has been selected ",
      "during interview, interviewer can conduct an extra round for some. needs to log that as well in the app. ",
    ],
  },
  {
    featureName: "Dashboard Feature",
    features: [
      "app has a dashboard as initial screen, to portrayed important information for the last 7, 30, or 90 days",
    ],
  },
  {
    featureName: "Dashboard Feature",
    features: [
      "Can define a few application-wide settings: extra round name, performace rating, max duration etc.",
    ],
  },
];

export {
  techStacks,
  requirementsList,
  thoughts,
  challenges,
  learnings,
  descriptions,
};

/** 

  ✅ Tech stack I decided to use - 
   1) React as in-house app is one of the perfect use case of react  
   1) React Router as standard in react community and for SPA
   2) Remote State management RTK Query for leveraging beautiful user experience (less network request/caching, revalidation, optimistic and pessimistic updates and more)
   3) React hook form for simplify manual state management and error handling in form
   4) Tailwind CSS for styling
   And other tools - React Icons, Supabase


  ✅ challenges
  1) Figuring out the right code organiztion
    I always try to follow some sort of patterns and architecture when I am building an app because I truely believe A project is never really done as I often need to add new feature or changes something inside and when I don't follow a good image of the code then it becomes too hard and frustrating when I am reading my code and wanted to change something.

  2) designing the database
    Run into many issues when designing database as this is my first database design and going through lot of re-thinking about that.

  3) On how to think about cache and invalidation
    I run into some quirky behavior when implementing optimistic/pessimistic update and got to do lot of experimenting and study about varius APIs like [refetchOnMountOrArgChange, refetchOnFocus, unused queries, cache time] and trying to relate with react query and how it's done on react query.

  ✅ Thought process
  second I divide my application into couple of feature categories like in this app I have auth, invoices, cartList feature categories and after that I try to drill down into each of this feature categories and figure out all the features I need to implement for each categories.
  I always striving for reuable component whenever need arises as it is one of the core and main advantage of the React library.
  As one of the big goal of this project is to ensure seamless experiece and for that I leverage most of the common benefits that RTK query offers and try to inject them with the best possible way. 


  ✅ Lessons Learned:
   The big lesson I get from this project where optimistic update makes sense and where pessimistic update makes sense as these two feature requires good thinking of how to revalidate a cache. I have to go quite a dive dive into these topics and learn their pros and cons.

   also I run into many issues when designing database and found some interesting and valuable guides for designing them 

 */

// var Storm = function () {};
// Storm.prototype.precip = 'rain';

// var WinterStorm = function () {};
// WinterStorm.prototype = new Storm();
// WinterStorm.prototype.precip = 'snow';

// var bob = new WinterStorm();
// console.log(bob.precip);

export const projectsList = [
  {
    name: "EatroVion",
    image: "/public/cabin-001.jpg",
    overview:
      "Inexpensive, healthy and great tasting recipes, without even having to order.",
    liveLink: "",
    sourceCode: "",
  },
  {
    name: "The Enterprise Inc.",
    image: "/public/cabin-001.jpg",
    overview:
      "An in-house tool that helps business to manage everything about their recruitment workflow",
    liveLink: "",
    sourceCode: "",
    explanations: {
      descriptions: [
        "The Enterprise Inc. is A small organization that needs to create an useful internal Application which provide utilities and ensures to manage everything about their recruitment workflow: Job Posts, Candidates Applications, Candidates.",

        "An in-house tool that helps business to look through candidates and get them selected to their space, and also imprints sequence of events: Job Posts, Job Applications as well as analyse them visually.",

        "Built this beautiful project entirely with great care, by employing React and Supabase, took charge of database design, create a better UX with features like caching remote data, re-fetching, pre-fetching, complex filterations etc.",
      ],
      techStacks: [
        "React.@ as in-house app is one of the perfect use case of react",
        "React Router.@ as standard in react community and for SPA",
        "Remote State management React Query.@ for leveraging beautiful user experience (less network request/caching, revalidation, pre-fetching and more)",
        "React hook form.@ for simplify manual state management and error handling in form",
        "Styled Components.@ for styling",
        "Supabase.@ for creating full-fleged backend",
        "ReCharts.@ for creating nice charts",
        "React hot toast and React Icons.@ for notifications and charts",
      ],
      requirementsList: [
        {
          featureName: "Authentication Feature",
          features: [
            "App users are company's employees. They need to be logged into  the application to perform tasks",
            "Creation of new users happens inside the app to make sure compnay's employee can get accounts",
            "Can upload avatar and change name or password",
          ],
        },

        {
          featureName: "Job Posts Feature",
          features: [
            "App needs a table view with all job posts, showing the job name, type, experience, salary, benefit and current status",
            "users should be able to do all the CRUD operation (Create, Read, Update, Delete) for Job Posts",
            "App needs to have Client Side Data Operations: filters, sorting so that users are able to refine the table with ease",
            " display details of an invoice such as - customer info, company info, status.",
          ],
        },

        {
          featureName: "Job Applications Feature",
          features: [
            "App needs a table view with all applications, showing the resume's pdf, status, and speciality, as well as Job and candidate's data",
            "complex server side filters with much more configurations and also another data operation: Pagination",
            "update the task item quantity and also delete the item",
            "To ensure performance and best user experience app needs to includes i.debounce technique for searching i.caching server data for less network request i.leverage re-validate remote data to keep UI in sync with server i.add Slightly complex pagination and i.pre-fetching to make better pagination experience",

            "display details of an Application such as - candidate info, Job info, observations, status, applicants performance, weather applicant face extra round or Not",

            "should be able to perform CRUD oprations including pdf updload and i.give candidate a performance based rating i.write some observation about them in a small interactive editor i.choose to under-review as interview proceed.",
            "should be able to Confirm that a candidate has been selected ",
            "during interview, interviewer can conduct an extra round for some. needs to log that as well in the app. ",
          ],
        },
        {
          featureName: "Dashboard Feature",
          features: [
            "app has a dashboard as initial screen, to portrayed important information for the last 7, 30, or 90 days",
          ],
        },
        {
          featureName: "Dashboard Feature",
          features: [
            "Can define a few application-wide settings: extra round name, performace rating, max duration etc.",
          ],
        },
      ],

      challenges: [
        "Event Deletgation.h. I always try to follow some sort of patterns and architecture when I am building an app because I truely believe A project is never really done as I often need to add new feature or changes something inside and when I don't follow a good image of the code then it becomes too hard and frustrating when I am reading my code and wanted to change something.",

        "Designing the database.h. Run into many issues when designing database as this is my first database design and going through lot of re-thinking about that.",

        "On how to think about cache and invalidation.h. I run into some quirky behavior when implementing optimistic/pessimistic update and got to do lot of experimenting and study about varius APIs like [refetchOnMountOrArgChange, refetchOnFocus, unused queries, cache time] and trying to relate with react query and how it's done on react query",
      ],

      thoughts: [
        "Divide the application into multiple of feature categories: auth, dashboard, Job, Application, setting.",
        "Next up I drill down each of the feature categories, figured out all the features they need",
        "Take one feature at a time, break up that UI feature into components to separate responsibilities, think about state Management (which type: local/global) and data flow to power up the feature",
        "Always striving for reusable component whenever need arises as it's one of the core and main advantage of React",
        "As one of the major goal of this project is to ensure seamless experiece and for that I leverage most of the finest benefits React query offers and inject them with best possible way.",
      ],

      learnings: [
        "Got to know even better how JavaScript event propagation works.",
        "learned lots of useful principles to implement filters, sort, pagination, menus.",
        "seeing use cases of design patterns: Compound Component, render props for highest flexibility.",
        "come up with lot more clarity why in react we always work with immutability and component model.",
        "Got some valuable guides for database designing",
      ],
    },
  },
  {
    name: "combineInvoices",
    image: "/public/cabin-001.jpg",
    overview:
      "Inexpensive, healthy and great tasting recipes, without even having to order.",
    liveLink: "",
    sourceCode: "",
    explanations: {
      descriptions: [
        "The Project combinInvoices is a small centralized place for effortless tracking where company log their invoices. They specialize in offering cutting-edge solutions.",
        "This business wants an internal application that will be used inside the company to track everything about their invoices: Invoice details with assoisiated project and tasklist.",
        "I built this project from the ground up, employing React for the frontend and Supabase for the backend. I even took charge of database design apart from react and create a seamless user experience with features like optimistic and pessimistic updates.",
      ],

      techStacks: [
        "React as in-house app is one of the perfect use case of react",
        "React Router as standard in react community and for SPA",
        "Remote State management RTK Query for leveraging beautiful user experience (less network request/caching, revalidation, optimistic and pessimistic updates and more)",
        "React hook form for simplify manual state management and error handling in form",
        "Tailwind CSS for styling And other tools - React Icons, Supabase",
      ],

      requirementsList: [
        {
          featureName: "Authentication Feature",
          features: [
            "App users are company's employees. They need to be logged into  the application to perform tasks",
            "Creation of new users happens inside the app to make sure compnay's employee can get accounts",
          ],
        },

        {
          featureName: "Invoices Feature",
          features: [
            "app shows list of all invoices with Invoice name, project name, payment due date, custmer name, task quantity, task price and status",
            "users can do all the CRUD operation for invoices seamlessly",
            "refine the list as users want because of app has slightly complex filters",
            "sorting and pagination operations",
            " display details of an invoice such as - customer info, company info, status.",
          ],
        },

        {
          featureName: "Single Invoice Details and Customers",
          features: [
            "Display The project that invoice offer and all the sub-tasks of that project",
            "Can add new task item in the cart from that sub-tasks which the company completed for the customer",
            "update the task item quantity and also delete the item",
            "mark the invoice as 'paid' status from pending after customer make the full payment",
          ],
        },
      ],

      challenges: [
        "Figuring out the right code organiztion.h. I always try to follow some sort of patterns and architecture when I am building an app because I truely believe A project is never really done as I often need to add new feature or changes something inside and when I don't follow a good image of the code then it becomes too hard and frustrating when I am reading my code and wanted to change something.",

        "Designing the database.h. Run into many issues when designing database as this is my first database design and going through lot of re-thinking about that.",

        "On how to think about cache and invalidation.h. I run into some quirky behavior when implementing optimistic/pessimistic update and got to do lot of experimenting and study about varius APIs like [refetchOnMountOrArgChange, refetchOnFocus, unused queries, cache time] and trying to relate with react query and how it's done on react query",
      ],

      thoughts: [
        "I divide my application into couple of feature categories like in this app I have auth, invoices, cartList feature categories",
        "After that I try to drill down into each of this feature categories",
        "Then I figured out all the features I need to implement for each categories",
        "I always striving for reuable component whenever need arises as it is one of the core and main advantage of the React library",
        "As one of the big goal of this project is to ensure seamless experiece and for that I leverage most of the common benefits that RTK query offers and try to inject them with the best possible way.",
      ],

      learnings: [
        "The big lesson I get from this project where optimistic & pessimistic update makes sense and where Not as these two feature requires good thinking of how to revalidate a cache.",
        " I have to go quite a dive dive into these topics and learn their pros and cons.",
        "Also I run into many issues when designing database and found some interesting and valuable guides for designing them",
      ],
    },
  },
  {
    name: "JavaScript Project",
    image: "/public/cabin-001.jpg",
    overview:
      "Inexpensive, healthy and great tasting recipes, without even having to order.",
    liveLink: "",
    sourceCode: "",
  },
];
