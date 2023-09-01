import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CardContainer, Card } from "../UI/Card.jsx";
import UserCard from "../Entity/User/UserCard.jsx";
import Modal from "../Entity/Logs/Modal.jsx";
import ContributionCard from "../Entity/Logs/ContributionCard.jsx";
import "./Modules.scss";
import CoLoForm from "../Entity/Logs/CoLoForm.jsx";
import API from "../api/API.jsx";
import "./GroupInfo.scss";

function GroupInfo({ selectedGroupID }) {
  // Initialisation --------------------------------------
  //adding a button
  const RoundButton = () => {
    return <button classname="actions"></button>;
  };
  //console.log(selectedGroupID);
  const SelectedGroup = selectedGroupID;
  const apiURL = "http://softwarehub.uk/unibase/api";
  const myGroupEndpoint = `${apiURL}/users/groups/${SelectedGroup}`;
  const logEndpoint = `/logs/`;
  const contibutionEndpoint = `/contributions/log/`;

  // State ---------------------------------------
  const [GroupStudents, setGroupStudents] = useState(null);

  const [showCoLoForm, setShowCoLoForm] = useState(false);

  const [contribution, setContribuion] = useState([]);

  const [logs, setLogs] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const apiGet = async (endpoint) => {
    const response = await fetch(endpoint);
    const result = await response.json();
    setGroupStudents(result);
  };
  const apiGetContribution = async (log, endpoint) => {
    const response = await API.get(endpoint.concat(log.LogID));
    if (response.isSuccess) {
      return response.result;
    } else setLoadingMessage("No groups found");
  };

  const apiGetLog = async (endpoint) => {
    const response = await API.get(endpoint);
    if (response.isSuccess) {
      return response.result;
    } else setLoadingMessage("No assessments found");
  };

  const getLogs = async () => {
    const logs = await apiGetLog(logEndpoint);
    console.log(logs);
    setLogs(logs);
    for (const log of logs) {
      const tempContribution = await apiGetContribution(
        log,
        contibutionEndpoint
      );
      console.log(tempContribution);
      if (tempContribution != undefined) {
        setContribuion(contribution.concat(tempContribution));
      }
    }
  };

  useEffect(() => {
    apiGet(myGroupEndpoint);
    getLogs();
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
              <button onClick={() => setShowCoLoForm(true)}>
                {" "}
                Add Contribution Log{" "}
              </button>
            </div>
            {showCoLoForm && (
              <CoLoForm
                onCancel={() => setShowCoLoForm(false)}
                onSuccess={() => setShowCoLoForm(false)}
              />
            )}
          </CardContainer>
          <CardContainer>
            {logs.map((log) => (
              <CardContainer>
                <button onClick={() => setIsOpen(true)}>{log.LogName}</button>
                {isOpen && (
                  <Modal
                    setIsOpen={setIsOpen}
                    contribution={contribution.filter(
                      (contribution) =>
                        contribution.ContributionLogID == log.LogID
                    )}
                    log={log}
                  />
                )}
              </CardContainer>
            ))}
          </CardContainer>
        </>
      )}
    </>
  );
}

export default GroupInfo;
