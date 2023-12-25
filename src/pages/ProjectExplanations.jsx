import { useParams } from "react-router-dom";
import Article from "../components/projectExplanations/Article";
import ProjectName from "../components/projectExplanations/ProjectName";
import { useEffect } from "react";
import { useHttp } from "../hooks/useHttp";
import { getProject, getProjects } from "../services/apiProjects";
import Social from "../ui/Social";
import styled from "styled-components";
import ProjectBox from "../components/projects/ProjectBox";
import Heading from "../components/about/Heading";
import { FaHeart } from "react-icons/fa";

const Link = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: min-content 1fr;
  row-gap: 3rem;
  column-gap: 2rem;

  @media (max-width: 59em) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr 1fr 1fr 1fr;
  }
`;

const Other = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Greeting = styled.h3`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #101d28;
  color: white;
  width: max-content;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;

  & svg {
    width: 2rem;
    height: 2rem;
    fill: orangered;
  }
`;

export default function ProjectExplantions() {
  const { id } = useParams();
  console.log(id);

  const {
    data: [project = {}] = [],
    isLoading,
    isError,
    error,
  } = useHttp(getProject, id);

  console.log(project);

  const {
    data: otherProjects,
    isLoading: isOtherLoading,
    isError: isOtherError,
  } = useHttp(getProjects);

  // if (isLoading) return <h1>Loading</h1>;

  // if (!isLoading && isError) return <h2>{error.message}</h2>;

  // console.log(projects);

  if (isLoading || isOtherLoading) return <h1>Loading</h1>;

  if (!isLoading && isError) return <h2>{error.message}</h2>;

  if (Object.keys(project).length === 0) return <h2>Loading</h2>;

  console.log(project);
  console.log(otherProjects);

  return (
    <>
      <ProjectName name={project.name} />
      <Article article={project} />

      <Other>
        <Heading>Other Projects</Heading>
        <Link>
          {otherProjects.map((project) => {
            if (Number(project.id) === Number(id)) return null;
            return <ProjectBox key={project.name} project={project} />;
          })}
        </Link>
        <Greeting>
          <FaHeart /> Thank You So much for reading <FaHeart />
        </Greeting>
      </Other>
    </>
  );
}

/** 
  ✅ The Project: combineInvoices
  combinInvoices is a small centralized place for effortless tracking where company log their invoices. They  specialize in offering cutting-edge solutions.

  This business wants an internal application that will be used inside the company to track everything about their invoices: Invoice details with assoisiated project and tasklist.

  I built this project from the ground up, employing React for the frontend and Supabase for the backend. I even took charge of database design apart from react and create a seamless user experience with features like optimistic and pessimistic updates.

  ✅ Tech stack I decided to use - 
   1) React as in-house app is one of the perfect use case of react  
   1) React Router as standard in react community and for SPA
   2) Remote State management RTK Query for leveraging beautiful user experience (less network request/caching, revalidation, optimistic and pessimistic updates and more)
   3) React hook form for simplify manual state management and error handling in form
   4) Tailwind CSS for styling
   And other tools - React Icons, Supabase


   ✅ Project Requirements
    1) Authentication Feature
     - App users are company's employees. They need to be logged into the application to perform tasks
     - Creation of new users happens inside the app to make sure compnay's employee can get accounts

    2) Invoices Feature
     - app shows list of all invoices with Invoice name, project name, payment due date, custmer name, task quantity, task price and status
     - users can do all the CRUD operation for invoices seamlessly
     - refine the list as users want because of app has slightly complex filters, sorting and pagination operations
     - display details of an invoice such as - customer info, company info, status, the project that invoice offer and all the sub-tasks of that project
     - can add new task item in the cart from that sub-tasks which the company completed for the customer, update the task item quantity and also delete the item
     - mark the invoice as 'paid' status from pending after customer make the full payment 


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

/* 
   The Project: The Enterprise Inc.
  The Enterprise Inc. is A small organization that needs to create an useful internal Application which provide utilities and ensures to manage everything about their recruitment workflow: Job Posts, Candidates Applications, Candidates.
  
  An in-house tool that helps business to look through candidates and get them selected to their space and also imprints sequence of events: Job Posts, Job Applications.

  This business wants an internal application that will be used inside the company to track everything about their invoices: Invoice details with assoisiated project and tasklist.

  I built this project from the ground up, employing React for the frontend and Supabase for the backend. I even took charge of database design apart from react and create a seamless user experience with features like optimistic and pessimistic updates.
   
   ✅ Project Requirements
    1) Authentication Feature
     - App users are company's employees. They need to be logged into the application to perform tasks
     - Creation of new users happens inside the app to make sure company's employee can get accounts
     - Can upload avatar and change name or password

    2) Jobs Feature
     - App needs a table view with all job posts, showing the job name, type, experience, salary, benefit and current status.

     - users should be able to do all the CRUD operation (Create, Read, Update, Delete) for Job Posts
     - App needs to have complex filters, sorting so that users are able to refine the table with ease

     

    3) Application Features
     - App needs a table view with all applications, showing the resume's pdf, status, and speciality, as well as Job and candidate's data
     - complex filters with much more configurations here than jobs
     - To ensure performance app needs to includes debounce technique for searching, caching server data for less network request, leverage re-validate remote data to keep UI in sync with server and add Slightly complex pagination and include pre-fetching data that might become necessary in the pagination operations

    - display details of an Application such as - candidate info, Job info, observations, status, applicants performance, weather applicant face extra round or Not.
    - should be able to perform CRUD oprations including pdf updload, give candidate a rating, write some observation about them in a small interactive editor and choose to under-review as interview proceed. 
    
    - should be able to Confirm that a candidate has been selected 
    - during interview, interviewer can conduct an extra round for some. needs to log that as well in the app.  

    4) Dashboard
     - app has a dashboard as initial screen, to portrayed important information for the last 7, 30, or 90 days:

    5) settings:
     - Can define a few application-wide settings: extra round name, performace rating, max duration etc.

    - App has a dark mode
   */
