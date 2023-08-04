import { useState, useEffect } from "react";
import { CardContainer, Card } from "../UI/Card.jsx";
import API from "../api/API.jsx";

function Login({ loginToApp }) {
  // Initiliasation -----------------------------

  // Initialise with an empty String
  const [kNumber, setKNumber] = useState(""); // Returns the current state value and a function to update the state

  const endpoint = `/users?UserEmail=${kNumber}`;

  //States-----------------------------------------------------------
  const [loadingMessage, setLoadingMessage] = useState("Loading Reacords");
  const RoundButton = () => {
    return <button className="actions"></button>;
  };

  // Handlers -----------------------------------

  const apiCall = async (endpoint) => {
    console.log(endpoint);
    const response = await API.get(endpoint);
    response.isSuccess
      ? loginToApp(response.result)
      : setLoadingMessage(response.message);
  };

  const handleInputChange = (event) => {
    setKNumber(event.target.value); // Updates the state variable with the current value in the input field
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission
    apiCall(endpoint);
  };

  // View ------------------------
  return (
    <>
      <CardContainer>
        <h1>Login</h1>
      </CardContainer>
      <CardContainer>
        <div className="inputContainer">
          <label htmlFor="kNumberInput" className="labelHover">
            Enter your K Number:
          </label>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="kNumberInput"
              placeholder="Enter your Kingston University Email"
              value={kNumber}
              onChange={handleInputChange}
            />
            <button type="submit">-Submit-</button>
          </form>
        </div>
      </CardContainer>
    </>
  );
}
export default Login;
