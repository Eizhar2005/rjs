import React from "react";
import Card from './components/card'
import Nav from './components/nav'
const App = () => {
const user = 'Me'
  return (
 
    <div>
      <h1>Hi! {user}</h1>
      <Card/>
      <Card/>
      <Nav/>
    </div>
  )
};

export default App;
