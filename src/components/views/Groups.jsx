import React, { useState, useEffect, render } from "react";
import { CardContainer, Card } from "../UI/Card.jsx";
import "./Groups.scss";
import API from "../api/API.jsx";
import Accordion from "../UI/Accordion.jsx";
import Modules from "./Modules.jsx";

function Groups({
  setIsModulesView,
  setIsGroupView,
  setSelectedGroupID,
  selectedModuleID,
}) {
  //Initializing-----------------------------------------------------
  const endpoint = `/groups`;
  const selectedModule = selectedModuleID;

  const assEndpoint = `/assessments/module/${selectedModule}`;
  const groupsEndpoint = `/groups/assessment/`;

  // const apiURL2 = "https://my.api.mockaroo.com";
  // const endpoint2 = `/users/groups/${groupid}?key=bb6adbc0`;

  //States-----------------------------------------------------------
  const [groups, setGroups] = useState([]);
  const [tempGroups, setTempGroups] = useState([]);
  const [assessments, setAssessments] = useState([]);
  const [count, setCount] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState("Loading Records");
  const RoundButton = () => {
    return <button className="actions"></button>;
  };

  //Handlers---------------------------------------------------------
  const apiCallGroups = async (assessment, endpoint) => {
    const response = await API.get(endpoint.concat(assessment.AssessmentID));
    if (response.isSuccess) {
      setTempGroups(response.result);
      //setGroups(tempGroups.concat(groups));
      // console.log("temp ");
      // console.log(tempGroups);
      // console.log("final ");
      // console.log(groups);
    }
  };

  const apiCallAss = async (endpoint) => {
    const response = await API.get(endpoint);
    if (response.isSuccess) {
      setAssessments(response.result);
      console.log("ass");
      console.log(assessments);
      // assessments.forEach((assessment) => {
      //   apiCallGroups(assessment);
      //setGroups(tempGroups + Groups);
      // });
    } else setLoadingMessage("test 123");
    // response.isSuccess
    //   ? setAssessments(response.result)
    //   : setLoadingMessage(response.message);
  };

  useEffect(() => {
    apiCallAss(assEndpoint);
    assessments.forEach((assessment) => {
      apiCallGroups(assessments[count], groupsEndpoint);
      setGroups(tempGroups.concat(groups));
      setCount((c) => c + 1);
    });
  }, [assEndpoint, groupsEndpoint]);

  //Handle going back to the Modules view
  const selectModule = () => {
    setIsModulesView(true);
  };

  const selectGroup = (groupId) => {
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
              <div className="group-info">
                <p>{group.GroupsName}</p>
                <p>{group.GroupProjectModuleName}</p>
              </div>
              <div className="button-selectGroup">
                <button onClick={() => selectGroup(group.GroupID)}>
                  Select Group
                </button>
              </div>
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
