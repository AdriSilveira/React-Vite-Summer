import { useState, useEffect } from "react";
import { CardContainer, Card } from "../UI/Card.jsx";
import API from "../api/API.jsx";

function Login({ loginToApp }) {
  // Initiliasation -----------------------------

  // Initialise with an empty String
  const [kNumber, setKNumber] = useState(""); // Returns the current state value and a function to update the state
  // kNumber stores the state variable
  // setKNumber updates the state value
  // '' is the initial value of the variable

  const [email, setEmail] = useState("Ku06696@kingston.ac.uk");

  const endpoint = `/users?UserEmail=${email}`;

  //States-----------------------------------------------------------
  const [user, setUser] = useState([]);
  const [loadingMessage, setLoadingMessage] = useState("Loading Reacords");
  const RoundButton = () => {
    return <button className="actions"></button>;
  };

  // Handlers -----------------------------------

  const apiCall = async (endpoint) => {
    const response = await API.get(endpoint);
    response.isSuccess
      ? setUser(response.result)
      : setLoadingMessage(response.message);
  };
  console.log(user);

  useEffect(() => {
    apiCall(endpoint);
  }, [endpoint]);

  //Handle going back to the Modules view
  const selectModule = () => {
    setIsModulesView(true);
  };

  const selectGroup = (groupId) => {
    setIsGroupView(false);
    setSelectedGroupID(groupId);
  };

  const handleInputChange = (event) => {
    setKNumber(event.target.value); // Updates the state variable with the current value in the input field
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission
    setEmail(kNumber);
    loginToApp(user[0]);
  };

  // View ------------------------
  return (
    <>
      <CardContainer>
        <h1>Login</h1>

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
      </CardContainer>
    </>
  );
}
export default Login;
