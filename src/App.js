import Nav from "./navbar"
import './App.css';
import Card from "./cards"
import React from "react"
function App() {
  const[darkMode,setDarkMode]=React.useState(true);
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
}
  return (
    <div className="App">
      <Nav 
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      />
      <div className="cont">
      <Card 
      darkMode={darkMode}
      img= "https://i.pinimg.com/736x/b0/27/3f/b0273f8150831465b809fa7c59872d20.jpg"
      text="Props (Properties):

      Definition: Props are immutable data passed from a parent component to a child component in React."
      />
      <Card 
      darkMode={darkMode}
      img= "https://www.scaler.com/topics/images/react-js-component-state.webp"
      text="State:

      Definition: State is a mutable data object managed within a component."
      />
      <Card
      darkMode={darkMode}
      img= "https://i.stack.imgur.com/wqvF2.png"
      text="Immutable Nature of Props and Mutable Nature of State"
      />
      </div>
      
    </div>
  );
}

export default App;
