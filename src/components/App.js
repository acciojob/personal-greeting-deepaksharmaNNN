import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
    const [input, setInput] = useState("");
    function showGreeting(e){
        setInput(e.target.value);
    }
    return (
        <div className="container">
            {/* Do not remove the main div */}
            <p>Enter your name:</p>
            <input type="text"  onChange={showGreeting}></input>
            <div>
                {
                    input && <p>Hello {input}!</p>
                }
            </div>

        </div>
    )
}

export default App