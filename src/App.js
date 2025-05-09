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


import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import EmployeeTable from './components/employee'; // Uncomment if you want to use the EmployeeTable component
import IPLTeams from './iplteam';
import RenderingMap from './renderingmap';
const App = () => {
  return (
<div>
  <EmployeeTable />
<IPLTeams/>
<RenderingMap/>
</div>
  );
};

export default App;
