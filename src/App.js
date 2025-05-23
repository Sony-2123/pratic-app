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









import React from 'react';
import EmployeeTable from './components/employee';
import IPLTeams from './iplteam';
import RenderingMap from './renderingmap';
import ComponentHolder from './ComponentHolder';
import { ProgressBar, Spinner, Carousel, Table } from './model';

const App = () => {
  return (
    <div className="space-y-6 p-4">
      <EmployeeTable />
      <IPLTeams />
      <RenderingMap />
      <ComponentHolder />
      
      {/* Optional usage of custom components */}
      <ProgressBar value={80} />
      <Spinner />
      <Carousel images={[
        'https://placekitten.com/400/200',
        'https://placekitten.com/401/200',
        'https://placekitten.com/402/200'
      ]} />
      <Table data={[
        { Name: 'Rohit Sharma', Role: 'Batsman' },
        { Name: 'Jasprit Bumrah', Role: 'Bowler' },
        { Name: 'Virat Kohli', Role: 'Batsman' },
  { Name: 'MS Dhoni', Role: 'Wicket-Keeper' },
  { Name: 'KL Rahul', Role: 'Wicket-Keeper' },
  { Name: 'Hardik Pandya', Role: 'All-Rounder' },
  { Name: 'Ravindra Jadeja', Role: 'All-Rounder' },
  { Name: 'Shubman Gill', Role: 'Batsman' },
  { Name: 'Ruturaj Gaikwad', Role: 'Batsman' },
  { Name: 'Mohammed Shami', Role: 'Bowler' },
  { Name: 'Suryakumar Yadav', Role: 'Batsman' },
  { Name: 'Sanju Samson', Role: 'Wicket-Keeper' },
  { Name: 'Ishan Kishan', Role: 'Wicket-Keeper' },
  { Name: 'Yuzvendra Chahal', Role: 'Bowler' },
  { Name: 'Axar Patel', Role: 'All-Rounder' },
  { Name: 'David Warner', Role: 'Batsman' },
  { Name: 'Kane Williamson', Role: 'Batsman' },
  { Name: 'Ben Stokes', Role: 'All-Rounder' },
  { Name: 'Mitchell Starc', Role: 'Bowler' },
  { Name: 'Andre Russell', Role: 'All-Rounder' },
  { Name: 'Pat Cummins', Role: 'Bowler' },
  { Name: 'Shreyas Iyer', Role: 'Batsman' },
  { Name: 'Rahul Tripathi', Role: 'Batsman' },
  { Name: 'Deepak Chahar', Role: 'Bowler' },
  { Name: 'Umesh Yadav', Role: 'Bowler' },
  { Name: 'Prithvi Shaw', Role: 'Batsman' },
  { Name: 'Mayank Agarwal', Role: 'Batsman' },
  { Name: 'Bhuvneshwar Kumar', Role: 'Bowler' },
  { Name: 'Mohit Sharma', Role: 'Bowler' },
  { Name: 'Dinesh Karthik', Role: 'Wicket-Keeper' },
  { Name: 'Sam Curran', Role: 'All-Rounder' },
  { Name: 'Liam Livingstone', Role: 'All-Rounder' },
  { Name: 'Arshdeep Singh', Role: 'Bowler' },
  { Name: 'T Natarajan', Role: 'Bowler' },
  { Name: 'Rahul Chahar', Role: 'Bowler' },
  { Name: 'Kuldeep Yadav', Role: 'Bowler' },
  { Name: 'Rashid Khan', Role: 'Bowler' },
  { Name: 'Aiden Markram', Role: 'Batsman' },
  { Name: 'Heinrich Klaasen', Role: 'Wicket-Keeper' },
  { Name: 'Glenn Maxwell', Role: 'All-Rounder' },
  { Name: 'Faf du Plessis', Role: 'Batsman' },
  { Name: 'Anrich Nortje', Role: 'Bowler' },
  { Name: 'Trent Boult', Role: 'Bowler' },
  { Name: 'Shimron Hetmyer', Role: 'Batsman' },
  { Name: 'Jason Holder', Role: 'All-Rounder' },
  { Name: 'Tim David', Role: 'Batsman' },
  { Name: 'Nicholas Pooran', Role: 'Wicket-Keeper' },
  { Name: 'Harshal Patel', Role: 'Bowler' },
  { Name: 'Varun Chakravarthy', Role: 'Bowler' }
      ]} />
    </div>
  );
};

export default App;





// import React from 'react';
// import './styles.css';

// const ExternalStyleExample = () => {
//   return (
//     <div>
//       <button className="button">Click Me</button>
//     </div>
//   );
// };

// export default ExternalStyleExample;
