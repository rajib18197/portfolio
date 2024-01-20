export const data = [
  {
    id: 2,
    name: "The Enterprise Inc.",
    images: {
      cover: "enterprise-coverr.png",
      "img-1": "enterprise-2.png",
      "img-2": "enterprise-1.png",
    },
    overview:
      "An in-house tool that helps business to manage everything about their recruitment workflow",
    liveLink: "https://the-enterprise-inc.vercel.app/login",
    sourceCode: "https://github.com/rajib18197/The-Enterprise-Inc",
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
      requirements: [
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
          featureName: "Settings Feature",
          features: [
            "Can define a few application-wide settings: extra round name, performace rating, max duration etc.",
          ],
        },
      ],
      challenges: [
        "Event Deletgation.h.When I was building modal component using a compound component pattern, I run into some weird behavior where clicking modal button didn't open the modal window. And that occurs because of events phases of JavaScript. Basically what happened was, I clicked modal button to open the modal, but that modal window shows for a couple of milliseconds and after that the window disappears strangely. That's because I attached an click event listener in the document as well so that clicking anywhere in the dom (outside the modal window) to closes the window if that is open. But since events bubbles in JavaScript (meaning parent element can recieve and handle event that occurs in the child elements as a target if both of those DOM elements listens the exact same event) and clicking the open modal button open the modal window for a ms and that click event also attched to the document therefore, that listeners detects that window is open and the closes the window immediately. there is multiple ways to solve it for example stops the event propagation or listen for the event in the capturing phase. I actually employ both solution in my App as I run this this twice when I first solved it with listens in capturing pahse but as a consequences in other places it creates a problem and then there I have to solve it by stop event propagation so that event can't be propagated further up.",
        "define React Query Keys and status effectively.h. At some point when a certain interaction happens in my app to fetch some data then I notice that [quertFn] does not run which is because I did not place dependent query keys in right way and another thing that queryFn aggressive background refetch sometimes seems magic to me as this creates an inconsistent UI. So I have to learn these through some experimentation and research about them a quite a lot.",
        "Figuring out the right code organization.h. I always try to follow some sort of patterns and architecture when I am building an app because I truely believe A project is never really done as I often need to add new feature or changes something inside and when I don't follow a good image of the code then it becomes too hard and frustrating when I am reading my code and wanted to change something.",
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
        "Much more understanding of Async State manangement and realize how that can become out of sync so quickly if Not careful enough",
        "come up with lot more clarity why in react we always work with immutability and component model.",
      ],
    },
  },
  {
    id: 3,
    name: "combineInvoices",
    images: {
      cover: "invoice.png",
      "img-1": "invoice-2.png",
      "img-2": "invoice-3.png",
    },
    overview:
      "This business wants an internal application that will be used to track everything about their invoices.",
    liveLink: "https://combine-invoices.vercel.app/login",
    sourceCode: "https://github.com/rajib18197/combineInvoices",
    explanations: {
      descriptions: [
        "The Project combinInvoices is a small centralized place for effortless tracking where company log their invoices. They specialize in offering cutting-edge solutions.",
        "This business wants an internal application that will be used inside the company to track everything about their invoices: Invoice details with assoisiated project and tasklist.",
        "I built this project from the ground up, employing React for the frontend and Supabase for the backend. I even took charge of database design apart from react and create a seamless user experience with features like optimistic and pessimistic updates.",
      ],
      techStacks: [
        "React.@ as in-house app is one of the perfect use case of react",
        "React Router.@ as standard in react community and for SPA",
        "Remote State management RTK Query.@ for leveraging beautiful user experience (less network request/caching, revalidation, optimistic and pessimistic updates and more)",
        "Tailwind CSS.@ for styling",
        "Supabase.@ for fully fledged backend",
      ],
      requirements: [
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
    id: 1,
    name: "EatroVion",
    images: {
      cover: "eatrovion-cover.png",
      "img-1": "eatrovion-1.png",
    },
    overview: "A System to Chart your memorable restaurants around the world.",
    liveLink: "https://eatro-vion.vercel.app/",
    sourceCode: "https://github.com/rajib18197/EatroVion",
    explanations: {
      descriptions: [
        "An App that blends all of your memorable restaurants with an interactive visual Map which takes the hard work of synchronizing the oddeseys with the notebook away from you",
        "It keeps a log all of your oddeseys in no time with the relevant information you want to have with just one click in the map.",
        "The Project was built by React and Supabase with an important pattern used in redux thunk to manage asynchronous state for better reasoning and code structure.",
      ],
      techStacks: [
        "React.@ for building amazing UI with simple mental model",
        "React Router.@ as standard in react community and for SPA",
        "Redux Toolkit.@ for managing client state management",
        "React Leaflet.@ for integrate a Map",
        "CSS Modules.@ for styling",
        "Supabase.@ for creating full-fleged backend",
      ],
      requirements: [
        {
          featureName: "Authentication Feature",
          features: [
            "Any User can sign up in this application either with their fullName, email and password",
            "or their gmail account If they want",
          ],
        },
        {
          featureName: "Restaurants List Feature",
          features: [
            "App needs a list view with all the restaurants, showing the name, expenses, visiting date, speciality, experience and rating",
            "users should be able to do all the CRUD operation (Create, Read, Update, Delete) for restaurants",
            "App needs to have Client Side Data Operations: filters, sorting so that users are able to refine the list with ease",
            "display details of an restaurant such as - notes, favourites dishes, a link which bring to the wikipedia and other information that users give when creating a restaurant for trcaking",
            "users can create their favourites dishes on the details page, give their ratings",
          ],
        },
        {
          featureName: "Interactive Map Feature",
          features: [
            "Display the list of all the restaurants location in the world for the better user experience",
            "when user clicks on restaurant in list then the map will move to restaurant location",
            "update the task item quantity and also delete the item",
            "clicks on the map opens up the form with automatically pre-filled the location and country code",
            "Map also have a option to display coordinates of users current position",
          ],
        },
        {
          featureName: "Statistics Feature",
          features: [
            "app has a log of stats to portrayed important information: how many restaurants they have been visited so far, how many of them are absolute masterpiece, total expenses and annual restaurants visits count.",
            "app has a feature of all the countries they have been visited",
          ],
        },
      ],
      challenges: [
        "Event Deletgation.h. I always try to follow some sort of patterns and architecture when I am building an app because I truely believe A project is never really done as I often need to add new feature or changes something inside and when I don't follow a good image of the code then it becomes too hard and frustrating when I am reading my code and wanted to change something.",
      ],
      thoughts: [
        "Divide the application into multiple of feature categories: auth, dashboard, Job, Application, setting.",
        "Next up I drill down each of the feature categories, figured out all the features they need",
        "Take one feature at a time, break up that UI feature into components to separate responsibilities, think about state Management (which type: local/global) and data flow to power up the feature",
        "Always striving for reusable component whenever need arises as it's one of the core and main advantage of React",
        "As one of the major goal of this project is to ensure seamless experiece and for that I leverage most of the finest benefits React query offers and inject them with best possible way.",
      ],
      learnings: [
        "Got to know how to create a better loading and error states mechanisms with redux thunk as this can get out of hand pretty quickly if we don't implemented it with well known pattern",
        "learned how to work with 3rd party map as this oe is very tricky in my opinion",
      ],
    },
  },
  {
    id: 4,
    name: "Loyalist JS",
    images: {
      cover: "cabin-cover.png",
      "img-1": "cabin-2.png",
      "img-2": "cabin-4.png",
    },
    overview:
      "Inexpensive, healthy and great tasting recipes, without even having to order.",
    liveLink: "https://cabin-selling.vercel.app/",
    sourceCode: "https://github.com/rajib18197/Cabin-Selling",
    explanations: {
      descriptions: [
        "Loyalist is a minimalist System which sells luxurious wooden cabins that allow customers to book cabins in a simple way. Basically the application represents cabins which are located around the world so that users can choose their perfect palace and confirm their stays. That's literally all it does.",
        "Placed limitations on myself to create this project without any frameworks/libraries to sharpen my Vanilla JS command with Dom APIs and a good architechture of course. I did it with huge learning over lots of low level DOM APIs to build Virtual DOM to manipulate the UI which is not so fast for large App but works well with this application.",
      ],
      techStacks: [
        "HTML.@ for content of the page",
        "SASS.@ as it is better way of writing CSS for styling",
        "JavaScript.@ for leveraging beautiful user experience with lots of functionalities",
        "Supabase.@ for creating an API",
      ],
      requirements: [
        {
          features: [
            "app shows list of all luxury cabins with name, location, price, discount, and capacity loaded from an API",
            "display details of an luxury Cabin",
            "users can add cabins to a cart before booking",
            "have a bookmark functionality, persistency included with broweser local storage mechanism",
            "users can give ratings to cabins",
            "App has a DOM Updating Algorithm (little bit like a virtual DOM) for manipulate UI",
            "have Client Side Data Operations: filters, sorting so that users are able to refine the table with ease",
            "booking requires full name, email and address",
            "GPS address features so that users can easily fill up their address",
            "booking are made by post request with the booking data (users data + selected cabins)",
            "Each Cabin order will get a unique id so that they can search their booked cabin with the ID for lookup later",
          ],
        },
      ],
      challenges: [
        "need of Event propagation.h. As many of my HTML elements aren't in the DOM and they are created on runtime, I can't add event listener on those elements upfront. So for this to be solved I need the power of event delegation",
        "on State Management.h. by implement a global State manager for ease of accessing data, I really have to think a lot and going through some experimentation on which way to manage either completely functional approach or imperative way to mutate state, eventually I go for mutation way",
        "MVC frameworks and event handlers.h. In MVC model we place event handler functions in the controller module and listen events in the View layer and if in the view module we call handlers from controllers module then that would go against the MVC pattern as view should be independent and not importing anything from controller, only controller can import things from view layer (that's how MVC was implemented in this project). To solve this issue I use a design pattern called publisher-subscriber which is an amazing key learning moments in this Application for me.",
      ],
      thoughts: [
        "Figuring out all the features that I need to built",
        "think about code organization the best possible way",
        "figure out states I need to manage the App",
        "find the styles architecture by sass",
      ],
      learnings: [
        "One use case for publisher-subscriber pattern as finding implementation of design patterns is really hard ",
        "Event delegation and how events works in JavaScript and it's phases",
        "How to implement MVC Architechture with Just JavaScript",
      ],
    },
  },
];
