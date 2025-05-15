// import AuthForm from "./components/AuthForm";
// //  import Button from './components/button';
// // import Table from './components/table';
// //  import List from './components/list';
// //  import Form from './components/form';
// //  import  Heading1,{Heading2,Heading3,Heading4,Heading5} from './components/headings/headings';
// // function App() {
//   // const employee={
//   //   name:"sony",
//   //   secondName:"pandikunta" 
//   //  }
//   //  const {name,secondName}=employee
//   // return (
//   //   <div>
//       {/* <Button /> */}
//       {/* <Table/> 
//       <List/>
//       <Form/>  */}
//       {/* <AuthForm/>
//     </div>
//   );
// } */}


// // const isSubscried=true
// // if(isSubscried){
// //   return<Table/>
// // }
// //     else {
// //       return<h1>please Subscribe</h1>
// //     }
// //   }


// // return (
// //   <div>
// //     isSubscried
// //     ?
// //     <List/>
// //     :
// // <h1>please Subscribe</h1>
// //   </div>
// // )
// // }

// // const isSubscried=false
// // return(
// //   <div>
// //     <Heading1/>
// //     <Heading2/>
// //     <Heading3/>
// //     <Heading4/>
// //     <Heading5/>
// //   </div>
// // )
// // }
// // export default App


// src/App.js


// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import EmployeeTable from './components/employee'; // Uncomment if you want to use the EmployeeTable component
// import IPLTeams from './iplteam';
// import RenderingMap from './renderingmap';
// import ComponentHolder from './ComponentHolder';
// import { Model, ProgressBar, Spinner, Carousel, Table } from './model';
//  // Uncomment if you want to use the Model component
// const App = () => {
//   return (
// <div>
//   <EmployeeTable />
// <IPLTeams/>
// <RenderingMap/>
// <ComponentHolder/>
// <Model/>
// <ProgressBar/>
// <Spinner/>
// <Carousel/>
// <Table/>
// </div>
//   );
// };

// export default App;









// import React from 'react';
// import EmployeeTable from './components/employee';
// import IPLTeams from './iplteam';
// import RenderingMap from './renderingmap';
// import ComponentHolder from './ComponentHolder';
// import { ProgressBar, Spinner, Carousel, Table } from './model';

// const App = () => {
//   return (
//     <div className="space-y-6 p-4">
//       <EmployeeTable />
//       <IPLTeams />
//       <RenderingMap />
//       <ComponentHolder />
      
//       {/* Optional usage of custom components */}
//       <ProgressBar value={80} />
//       <Spinner />
//       <Carousel images={[
//         'https://placekitten.com/400/200',
//         'https://placekitten.com/401/200',
//         'https://placekitten.com/402/200'
//       ]} />
//       <Table data={[
//         { Name: 'Rohit Sharma', Role: 'Batsman' },
//         { Name: 'Jasprit Bumrah', Role: 'Bowler' },
//         { Name: 'Virat Kohli', Role: 'Batsman' },
//   { Name: 'MS Dhoni', Role: 'Wicket-Keeper' },
//   { Name: 'KL Rahul', Role: 'Wicket-Keeper' },
//   { Name: 'Hardik Pandya', Role: 'All-Rounder' },
//   { Name: 'Ravindra Jadeja', Role: 'All-Rounder' },
//   { Name: 'Shubman Gill', Role: 'Batsman' },
//   { Name: 'Ruturaj Gaikwad', Role: 'Batsman' },
//   { Name: 'Mohammed Shami', Role: 'Bowler' },
//   { Name: 'Suryakumar Yadav', Role: 'Batsman' },
//   { Name: 'Sanju Samson', Role: 'Wicket-Keeper' },
//   { Name: 'Ishan Kishan', Role: 'Wicket-Keeper' },
//   { Name: 'Yuzvendra Chahal', Role: 'Bowler' },
//   { Name: 'Axar Patel', Role: 'All-Rounder' },
//   { Name: 'David Warner', Role: 'Batsman' },
//   { Name: 'Kane Williamson', Role: 'Batsman' },
//   { Name: 'Ben Stokes', Role: 'All-Rounder' },
//   { Name: 'Mitchell Starc', Role: 'Bowler' },
//   { Name: 'Andre Russell', Role: 'All-Rounder' },
//   { Name: 'Pat Cummins', Role: 'Bowler' },
//   { Name: 'Shreyas Iyer', Role: 'Batsman' },
//   { Name: 'Rahul Tripathi', Role: 'Batsman' },
//   { Name: 'Deepak Chahar', Role: 'Bowler' },
//   { Name: 'Umesh Yadav', Role: 'Bowler' },
//   { Name: 'Prithvi Shaw', Role: 'Batsman' },
//   { Name: 'Mayank Agarwal', Role: 'Batsman' },
//   { Name: 'Bhuvneshwar Kumar', Role: 'Bowler' },
//   { Name: 'Mohit Sharma', Role: 'Bowler' },
//   { Name: 'Dinesh Karthik', Role: 'Wicket-Keeper' },
//   { Name: 'Sam Curran', Role: 'All-Rounder' },
//   { Name: 'Liam Livingstone', Role: 'All-Rounder' },
//   { Name: 'Arshdeep Singh', Role: 'Bowler' },
//   { Name: 'T Natarajan', Role: 'Bowler' },
//   { Name: 'Rahul Chahar', Role: 'Bowler' },
//   { Name: 'Kuldeep Yadav', Role: 'Bowler' },
//   { Name: 'Rashid Khan', Role: 'Bowler' },
//   { Name: 'Aiden Markram', Role: 'Batsman' },
//   { Name: 'Heinrich Klaasen', Role: 'Wicket-Keeper' },
//   { Name: 'Glenn Maxwell', Role: 'All-Rounder' },
//   { Name: 'Faf du Plessis', Role: 'Batsman' },
//   { Name: 'Anrich Nortje', Role: 'Bowler' },
//   { Name: 'Trent Boult', Role: 'Bowler' },
//   { Name: 'Shimron Hetmyer', Role: 'Batsman' },
//   { Name: 'Jason Holder', Role: 'All-Rounder' },
//   { Name: 'Tim David', Role: 'Batsman' },
//   { Name: 'Nicholas Pooran', Role: 'Wicket-Keeper' },
//   { Name: 'Harshal Patel', Role: 'Bowler' },
//   { Name: 'Varun Chakravarthy', Role: 'Bowler' }
//       ]} />
//     </div>
//   );
// };

// export default App;





// // import React from 'react';
// // import './styles.css';

// // const ExternalStyleExample = () => {
// //   return (
// //     <div>
// //       <button className="button">Click Me</button>
// //     </div>
// //   );
// // };

// // export default ExternalStyleExample;

// import React from "react";
// import TeamAccordion from "./TeamAccordion";

// function App() {
//   const iplTeams = [
//     "Mumbai Indians",
//     "Chennai Super Kings",
//     "Royal Challengers Bangalore",
//     "Kolkata Knight Riders",
//     "Delhi Capitals",
//     "Rajasthan Royals",
//     "Sunrisers Hyderabad",
//     "Punjab Kings",
//     "Lucknow Super Giants",
//     "Gujarat Titans"
//   ];

//   return (
//     <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
//       <h1>IPL Teams Accordion</h1>
//       <TeamAccordion teams={iplTeams} />
//     </div>
//   );
// }

// export default App;



// // src/App.js
// import React from 'react';
// import FunctionalStateExample from './Tasks/FunctionalStateExample';
// import ClassStateExample from './Tasks/ClassStateExample';
// import AddCircle from "./components/AddCircle";
// import ImageCarousel from './components/Carousel';
// import ProductListing from './components/ProductList';
// import SkeletonLoader from "./components/SkeletonLoader";
// import ProductWithSpinner from "./components/ProductWithSpinner";
// import './App.css';



// function App() {
//   return (
//     <div>
//       <h1>React State Examples</h1>
//       <FunctionalStateExample />
//       <ClassStateExample />
//       <AddCircle/>
//       <ImageCarousel /> 
//       <ProductListing />
//       <SkeletonLoader />
//       <ProductWithSpinner />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import UserList from './components/UserList';

// function App() {
//   return (
//     <div className="App">
//       <h1>Axios in React Example</h1>
//       <UserList />
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import ErrorBoundary from "./components/ErrorBoundary";
// import BuggyComponent from "./components/BuggyComponent";

// function App() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>React Error Handling Example</h1>

//       <ErrorBoundary>
//         <BuggyComponent />
//       </ErrorBoundary>

//       <p>This line will still render even if the component fails above.</p>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import Spinner from './components/Spinner/Spinner';

// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading time
//     const timer = setTimeout(() => setLoading(false), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div style={{ textAlign: 'center', marginTop: '100px' }}>
//           <h1>Welcome to the App!</h1>
//             <h1>Welcome to the App!</h1>
//               <h1>Welcome to the App!</h1>
//                 <h1>Welcome to the App!</h1>
//                   <h1>Welcome to the App!</h1>
//             <h1>Welcome to the App!</h1>
//         </div>
//       )}
//     </>
//   );
// };

// export default App;














// import React from 'react';
// import Button from './components/button'; 

// function App() {
//   const handleClick = () => {
//     alert('Button clicked!');
//   };

//   return (
//     <div>
//       <h1>Welcome to the App</h1>
//       <Button label="Click Me" onClick={handleClick} className="my-button" />
//     </div>
//   );
// }

// export default App;




// import React from 'react';
// import LifecycleDemo from './components/LifecycleDemo';

// function App() {
//   return (
//     <div className="App">
//       <LifecycleDemo />
//     </div>
//   );
// }

// export default App;


// 




// // src/App.jsx
// import LoginForm from "./components/organisms/LoginForm";

// function App() {
//   return <LoginForm/>
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AdminPanel from "./components/AdminPanel";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute role="admin">
                <AdminPanel />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
