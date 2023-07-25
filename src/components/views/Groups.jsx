import React, { useState, useEffect } from "react";
import { CardContainer, Card } from "../UI/Card.jsx";
import "./Groups.scss";
import API from "../api/API.jsx";
import Accordion from "../UI/Accordion.jsx";
import Modules from "./Modules.jsx";

function Groups({ setIsModulesView, setIsGroupView, setSelectedGroupID }) {
  //Initializing-----------------------------------------------------
  const endpoint = `/groups`;

  // const apiURL2 = "https://my.api.mockaroo.com";
  // const endpoint2 = `/users/groups/${groupid}?key=bb6adbc0`;

  //States-----------------------------------------------------------
  const [groups, setGroups] = useState([]);
  const [loadingMessage, setLoadingMessage] = useState("Loading Reacords");
  const RoundButton = () => {
    return <button className="actions"></button>;
  };

  //Handlers---------------------------------------------------------
  const apiCall = async (endpoint) => {
    const response = await API.get(endpoint);
    response.isSuccess
      ? setGroups(response.result)
      : setLoadingMessage(response.message);
  };

  useEffect(() => {
    apiCall(endpoint);
  }, [endpoint]);

  //Handle going back to the Modules view
  const selectModule = () => {
    setIsModulesView(true);
  };

  const selectGroup = (groupId) => {
    setSelectedGroupID(groupId);
    setIsGroupView(false);
    setSelectedGroupID(groupId);
  };
  // View --------------------------------------

  return (
    <>
      <h1>Global Groups</h1>

      {!groups ? (
        <p>{loadingMessage}</p>
      ) : groups.length === 0 ? (
        <p>No groups found</p>
      ) : (
        <Accordion>
          {groups.map((group) => (
            <Accordion.Item
              key={group.GroupID}
              title={`${group.GroupName}`}
              level={3}
            >
              <p>{group.GroupsName}</p>
              <p>{group.GroupProjectModuleName}</p>
              <button onClick={() => selectGroup(group.GroupID)}>
                Select Group
              </button>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
      <div className="button-backModules">
        <button onClick={selectModule}>Back to Modules</button>
      </div>
    </>
  );
}

export default Groups;
