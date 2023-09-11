import React, { useState, useEffect } from "react";
import { CardContainer, Card } from "../UI/Card.jsx";
import UserCard from "../Entity/User/UserCard.jsx";
import LogForm from "../Entity/Logs/LogForm.jsx";
import "./Modules.scss";
import "./GroupInfo.scss";

function GroupInfo({ selectedGroupID }) {
  const SelectedGroup = selectedGroupID;
  const apiURL = "http://softwarehub.uk/unibase/api";
  const myGroupEndpoint = `${apiURL}/users/groups/${SelectedGroup}`;
  const logsEndpoint = `${apiURL}/logs`; // API endpoint for fetching logs

  const [GroupStudents, setGroupStudents] = useState(null);
  const [showLogForm, setShowLogForm] = useState(false);
  const [logsrec, setLogsrec] = useState([]);

  const fetchGroupStudents = async () => {
    try {
      const response = await fetch(myGroupEndpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch group students");
      }
      const data = await response.json();
      setGroupStudents(data);
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
      setLogsrec(data);
    } catch (error) {
      console.error("Error fetching logs: ", error);
    }
  };

  useEffect(() => {
    fetchGroupStudents();
    fetchLogs();
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
            <h2>Logs</h2>
            <ul>
              {logsrec.map((log) => (
                <li key={log.id}>{log.message}</li>
              ))}
            </ul>
          </CardContainer>

          <CardContainer>
            <div className="button-CoLo">
              <button onClick={() => setShowLogForm(true)}>
                Add Contribution Log
              </button>
            </div>
            {showLogForm && (
              <LogForm
                groupID={selectedGroupID}
                onCancel={() => setShowLogForm(false)}
                onSuccess={() => setShowLogForm(false)}
              />
            )}
          </CardContainer>
        </>
      )}
    </>
  );
}

export default GroupInfo;
