import React, { useState } from 'react'; // Built in hook that allows functional components to have a state
import './FauxLogin.scss';

function Home() {

    // Initiliasation -----------------------------

    // Initialise with an empty String
    const [kNumber, setKNumber] = useState(''); // Returns the current state value and a function to update the state
                                                // kNumber stores the state variable
                                                // setKNumber updates the state value
                                                // '' is the initial value of the variable


    // Handlers -----------------------------------

    // Event handler for input change
    const handleInputChange = (event) => { 
        setKNumber(event.target.value);  // Updates the state variable with the current value in the input field
    };

    // Event handler for form submission
    const handleSubmit = (event) => { 
        event.preventDefault(); // Prevents the default form submission
        console.log("Submitted Value: ", kNumber); // Test the entered value to console        
    };

    // View --------------------------------------

    return (
        <>
            <h1>Faux Login</h1>
            <div className="inputContainer">
                <label htmlFor="kNumberInput" className="labelHover">
                    Enter your K Number: 
                </label>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="kNumberInput"
                        placeholder="Enter your K number"
                        value={kNumber}
                        onChange={handleInputChange}
                    />
                    <button type="submit">-Submit-</button>
                </form> 
            </div>  
        </>
    );
}

export default Home;