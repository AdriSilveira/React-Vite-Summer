import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CardContainer, Card } from "../UI/Card.jsx";
import "./Modules.scss";

function GroupInfo({ selectedGroupID }) {
  // Initialisation --------------------------------------
  //adding a button
  const RoundButton = () => {
    return <button classname="actions"></button>;
  };
  const SelectedGroup = selectedGroupID;
  const apiURL = "http://softwarehub.uk/unibase/api";
  const myGroupEndpoint = `${apiURL}/users/groups/${SelectedGroup}`;

  // State ---------------------------------------
  const [GroupStudents, setGroupStudents] = useState(null);

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
              {GroupStudents.map((students) => {
                return (
                  <div className="moduleCard" key={students.UserID}>

                      <Card>
                        <div className="moduleImage">
                          <img src={students.UserImageURL} />
                        </div>
                        <div className="moduleCardItems">
                          <h3>{students.UserFirstname}</h3>
                          <h4>{students.UserLastname}</h4>
                        </div>

                        {/*<div className="actions">
                          <button></button>
                          <button>Groups</button>
                          <button></button>
                </div>*/}
                      </Card>
                    </div>

                );
              })}
            </CardContainer>
          </Card>
        </>
      )}
    </>
  );
}

export default GroupInfo;
