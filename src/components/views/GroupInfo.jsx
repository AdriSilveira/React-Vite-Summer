import React, { useState, useEffect } from "react";
import { CardContainer, Card } from "../UI/Card.jsx";
import UserCard from "../Entity/User/UserCard.jsx";
import LogForm from "../Entity/Logs/LogForm.jsx";
import LogCard from "../Entity/Logs/LogCard.jsx";
import API from "../api/API.jsx";
import "./Modules.scss";
import "./GroupInfo.scss";

function GroupInfo({ selectedGroupID }) {
  const SelectedGroup = selectedGroupID;
  const apiURL = "http://softwarehub.uk/unibase/api";
  const myGroupEndpoint = `${apiURL}/users/groups/${SelectedGroup}`;
  const logsEndpoint = `${apiURL}/logs`; // API endpoint for fetching logs
  const logEndpoint = `/logs/`;
  const contibutionEndpoint = `/contributions/log/`;

  const [GroupStudents, setGroupStudents] = useState(null);
  const [contribution, setContribuion] = useState([]);
  const [logs, setLogs] = useState([]);
  const [showLogForm, setShowLogForm] = useState(false);
  const [logsrec, setLogsrec] = useState([]);

  const fetchGroupStudents = async () => {
    try {
      const response = await fetch(myGroupEndpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch group students");
      }
      const data = await response.json();
      setGroupStudents(
        data.sort(function (a, b) {
          return a.UserId - b.UserId;
        })
      );
    } catch (error) {
      console.error("Error fetching group students: ", error);
    }
  };

  const fetchLogs = async () => {
    try {
      const response = await fetch(logsEndpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch logs");
      }
      const data = await response.json();
      console.log(data);
      setLogsrec(data);
    } catch (error) {
      console.error("Error fetching logs: ", error);
    }
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
    setLogs(logs);
    for (const log of logs) {
      const tempContribution = await apiGetContribution(
        log,
        contibutionEndpoint
      );
      if (tempContribution != undefined) {
        setContribuion(contribution.concat(tempContribution));
      }
    }
  };

  useEffect(() => {
    fetchGroupStudents();
    fetchLogs();
    getLogs();
  }, [selectedGroupID]);

  const [isGroupView, setIsGroupView] = useState(false);

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
                <UserCard key={students.UserID} user={students} />
              ))}
            </CardContainer>
          </Card>
          <CardContainer>
            <div className="button-CoLo">
              <button onClick={() => setShowLogForm(true)}>Add Log</button>
            </div>
            {showLogForm && (
              <LogForm
                groupID={selectedGroupID}
                onCancel={() => setShowLogForm(false)}
                onSuccess={() => setShowLogForm(false)}
              />
            )}
          </CardContainer>
          <CardContainer>
            <Card>
              <div className="userGrid">
                <div classname="userGridItem">test</div>
                {GroupStudents.map((students) => (
                  <div classname="userGridItem">{students.UserLastname}</div>
                ))}
              </div>
            </Card>
            {logs.map((log) => (
              <LogCard
                key={log.LogID}
                students={GroupStudents}
                log={log}
                contributions={contribution.filter(
                  (contribution) => contribution.ContributionLogID == log.LogID
                )}
              />
            ))}
          </CardContainer>
        </>
      )}
    </>
  );
}

export default GroupInfo;
