import { useState } from "react";
import { CardContainer, Card } from "../UI/Card.jsx";

function Login({ loginToApp }) {
  // Initiliasation -----------------------------

  // Initialise with an empty String
  const [kNumber, setKNumber] = useState(""); // Returns the current state value and a function to update the state
  // kNumber stores the state variable
  // setKNumber updates the state value
  // '' is the initial value of the variable

  // Handlers -----------------------------------

  // Event handler for input change
  const handleInputChange = (event) => {
    setKNumber(event.target.value); // Updates the state variable with the current value in the input field
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission
    loginToApp(kNumber);
  };

  // View ------------------------
  return (
    <>
      <CardContainer>
        <h1>Login</h1>
        <Card>
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
        </Card>
      </CardContainer>
    </>
  );
}
export default Login;
