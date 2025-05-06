import Button from './components/button';
import Table from './components/table';
 import List from './components/list';
 import Form from './components/form';
 import  Heading1,{Heading2,Heading3,Heading4,Heading5} from './components/headings/headings';
function App() {
  // const employee={
  //   name:"sony",
  //   secondName:"pandikunta" 
  //  }
  //  const {name,secondName}=employee
  // return (
  //   <div className="hello">
  //     <h1>hi what is your name {employee.name}</h1>
  //     <h1>hi what is your secondname {employee.secondName}</h1>
  //     <Button />
  //     <Table/> 
  //     <List/>
  //     <Form/> 
  //   </div>
//   );
// }


// const isSubscried=false
// if(isSubscried){
//   // return<h1>Thanks for Subscried</h1><Table/>
// }
//     else {
//       return<h1>please Subscribe</h1>
//     }
//   }


// return (
//   <div>
//     isSubscried
//     ?
//     <List/>
//     :
// <h1>please Subscribe</h1>
//   </div>
// )
// }

const isSubscried=false
return(
  <div>
    <Heading1/>
    <Heading2/>
    <Heading3/>
    <Heading4/>
    <Heading5/>
  </div>
)
}
export default App