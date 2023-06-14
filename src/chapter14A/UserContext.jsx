import React from 'react';
import { useContext } from 'react';
export const UserContext = React.createContext();
export default function App() {
 return (
   <UserContext.Provider value="Reed">
     <User />
   </UserContext.Provider>
 )
}

// function User() {
//  return (
//    <UserContext.Consumer>
//      {value => <h1>{value}</h1>} 
//    </UserContext.Consumer>
//  )
// }

// useContext 훅
function User() {
    const value = useContext(UserContext);  
      
    return <h1>{value}</h1>;
  }