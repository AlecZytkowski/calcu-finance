import "./WelcomeCard.css";
import { useState } from 'react';
import { CalculatorOptions } from "./CalculatorOptions";

export const WelcomeCard = () => {
  const [userName, setUserName] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }

  function handleUserNameSubmit() {
    if (userName.length > 0) {
      setIsSignedIn(true);
      setUserName(userName);
    } else {
      alert("You must enter your name");
    }
  }

  if (isSignedIn) {
    return (
      <div className="welcomeOptionsDiv">
        <h1>Welcome, {userName}</h1>
        <h2>Please let us know what you are looking for:</h2>
        <CalculatorOptions />
      </div>
    );
  } else {
    return (
      <div className="introWelcomeDiv">
        <h1>Hello,</h1>
        <h2>Please tell us your name: </h2>
        <form>
          <input className="introInput" onChange={handleUserNameChange} />
          <button className="introButton" onClick={handleUserNameSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
};
