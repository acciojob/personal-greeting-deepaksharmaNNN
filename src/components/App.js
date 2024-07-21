import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const displayGreeting = () => {
    setGreeting(`Hello, ${name}! Welcome to our site.`);
  };

  return (
      <div>
        {/* Do not remove the main div */}
        <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
        />
        <button onClick={displayGreeting}>Greet Me</button>
        {greeting && <p>{greeting}</p>}
      </div>
  );
};

export default App;