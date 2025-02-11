
// import './App.css';
// import React from "react";

// function App() {
//   // let x = React.createElement("div" , {className:"App"} ,
//   //   React.createElement("h1" , null , "Welcome to React")
//   // )

//   let username = "Praharsha";
//   return (
//     <div className = 'App'>
//     {/* //   <h1>Welcome to React</h1>
//     //   <img/>
//     // x */}
    

    
//       <h1>Harsha</h1>
//       <p>Pra</p>
//       {username}
//       {50-50}
//     </div>
    
//   );
// }

// export default App;



// ! Using Class Component
// import React from "react";
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Class Component</h1>
//       </div>
//     )
//   }
// }
// export default App;




// !Using Function Component
// function App(){
//   return(
//     <div>
//       <h1>Function Component</h1>
//     </div>
//   )
// }
// export default App;


// !Arrow Function
// const App=()=>{
//   return(
//   <div className='App'>
//     <h1>Arrow Function Component</h1>
//   </div>
// )
// }
// export default App;



// ! props


// !child component
// import React, { Component } from 'react'
// import CBCPropEx1 from './propexample/CBCPropEx1';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         App
//         <CBCPropEx1 username="John" age={25}
//         hobbies = {["playing","Eating", "Sleeping"]}
//         address = {{city:"Hyd", area:"Habsiguda"}}
//         isMarried={false} 
//         sendFun={function(){alert("Hi Ram")}}
//         />

//       </div>
//     )
//   }
// }


// !functional component
// import React from 'react'

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }


// !props.children

// import React from 'react'
// // import PropsChildrenex from './propexample/PropsChildrenex'
// // import SubChildProps from './propexample/SubChildProps'
// import CBCStateEx from './stateexamples/CBCStateEx'
// const App = () =>{
//   return(
//   <div>
//     <CBCStateEx></CBCStateEx>
//     {/* <PropsChildrenex username = "Praharsha" company = "Google">
//       <h1>This data is passing a props children to child component</h1>
//       <SubChildProps/>
//     </PropsChildrenex> */}
//     </div>
    
//   )
// }
// export default App

// import React from 'react'
// import CBCStateEx from './stateexamples/CBCStateEx'
// import FBCStateEx from './stateexamples/FBCStateEx'

// const App = () => {
//   return (
//     <div>
//       {/* <CBCStateEx/> */}
//       <FBCStateEx/>
//     </div>
//   )
// }

// export default App;


//import FuctionalComponent from './components/FuctionalComponent';
// import ClassComponent from './components/ClassComponent';
// import MyForm from './components/MyForm';
// import UseEffectEx from './hookexample/useEffectEx';
import RefExample from './hookexample/RefExample';
const App = () => {
  return (
    <div className='App'>
      {/* <h1>Welocme this is App.js</h1>
    <FuctionalComponent 
      clg='MRU' city="Hyderabad"
    />   */}
    {/* <ClassComponent/>
    <MyForm/> */}
    <RefExample/>

    </div>
  );
};

export default App;