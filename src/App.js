import './App.css';
import { useState } from 'react';
import { WelcomeCard } from "./Welcome/WelcomeCard";
import { CalculatorOptions } from './Calculator Options/CalculatorOptions';

function App() {
  const [userName, setUserName] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  if (!isSignedIn) {
    return (
      <div className="App">
        <div className="welcomeDiv">
          <WelcomeCard setUserName={setUserName} setIsSignedIn={setIsSignedIn}/>
        </div>
      </div>
    )
  }
    <CalculatorOptions />
  
}

export default App;
