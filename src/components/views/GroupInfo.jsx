import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CardContainer, Card } from "../UI/Card.jsx";
import UserCard from "../Entity/User/UserCard.jsx";
import LogForm from "../Entity/Logs/LogForm.jsx";
import "./Modules.scss";
import CoLoForm from "../Entity/Logs/CoLoForm.jsx";
import "./GroupInfo.scss";

function GroupInfo({ selectedGroupID }) {
  // Initialisation --------------------------------------
  //adding a button
  const RoundButton = () => {
    return <button classname="actions"></button>;
  };
  console.log(selectedGroupID);
  const SelectedGroup = selectedGroupID;
  const apiURL = "http://softwarehub.uk/unibase/api";
  const myGroupEndpoint = `${apiURL}/users/groups/${SelectedGroup}`;

  // State ---------------------------------------
  const [GroupStudents, setGroupStudents] = useState(null);

  const [showCoLoForm, setShowCoLoForm] = useState(false);

  const apiGet = async (endpoint) => {
    const response = await fetch(endpoint);
    const result = await response.json();
    setGroupStudents(result);
  };

  useEffect(() => {
    apiGet(myGroupEndpoint);
  }, [myGroupEndpoint]);

  // Handlers ------------------------------------
  // Function to handle going back to the Modules view
  const selectGroup = () => {
    setIsGroupView(true);
  };
  
  // View --------------------------------------
  return (
    <>
      {!GroupStudents ? (
        <p>Loading records ...</p>
      ) : GroupStudents.length === 0 ? (
        <p>No records found.</p>
      ) : (
        <>
          <CardContainer>
            <h1>Group {SelectedGroup}</h1>
          </CardContainer>
          <Card>
            <CardContainer>
              {GroupStudents.map((students) => (
                <UserCard
                  user={students}
                  //key={students.UserID}
                />
              ))}
            </CardContainer>
          </Card>
          <CardContainer>
            <div className="button-CoLo">
              <button onClick={() => setShowCoLoForm(true)}> Add Contribution Log </button>
            </div>
              {showCoLoForm && (
                <CoLoForm
                onCancel={() => setShowCoLoForm(false)}
                onSuccess={() => setShowCoLoForm(false)}
                />
              )}           
          </CardContainer>
        </>
      )}
    </>
  );
}

export default GroupInfo;
