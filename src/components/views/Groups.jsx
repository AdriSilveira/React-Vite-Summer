import React, { useState, useEffect } from "react";
import { CardContainer, Card } from "../UI/Card.jsx";
import "./Groups.scss";

function Groups({ setIsModulesView, setIsGroupView }) {
  // State for storing the groups
  const [groups, setGroups] = useState([]);

  const RoundButton = () => {
    return <button classname="actions"></button>;
  };

  // Function to handle going back to the Modules view
  const selectModule = () => {
    setIsModulesView(true);
  };

  // Funciton to toggle the dropdown of a group
  const toggleGroupDropdown = (groupId) => {
    setGroups((prevGroups) => {
      const updatedGroups = [...prevGroups];
      const groupIndex = updatedGroups.findIndex(
        (group) => group.id === groupId
      );
      updatedGroups[groupIndex].isOpen = !updatedGroups[groupIndex].isOpen;
      return updatedGroups;
    });
  };

  // Function to fetch the groups (manual for now until endpoints added)
  const fetchGroups = () => {
    const fetchedGroups = [
      {
        id: 1,
        name: "Group Name 1",
        members: ["Student 1", "Student 2", "Student 3"],
        isOpen: false,
      },
      {
        id: 2,
        name: "Group Name 2",
        members: ["Student 4", "Student 5"],
        isOpen: false,
      },
      {
        id: 3,
        name: "Group Name 3",
        members: ["Student 6", "Student 7", "Student 8", "Student 9"],
        isOpen: false,
      },
    ];

    setGroups(fetchedGroups);
  };

  // Fetch the groups on component mount
  useEffect(() => {
    fetchGroups();
  }, []);

  // View --------------------------------------
  const selectGroup = () => {
    setIsGroupView(false);
  };

  return (
    <>
      <CardContainer>
        <h1>Global Groups</h1>
      </CardContainer>
      <Card>
        <CardContainer>
          {groups.map((group) => (
            <div className="groupCard" key={group.id}>
              <div
                className="groupHeader"
                onClick={() => toggleGroupDropdown(group.id)}
              >
                <h3>{group.name}</h3>
              </div>
              {group.isOpen && (
                <div className="groupDropdown">
                  {group.members.map((member, index) => (
                    <p key={index}>{member}</p>
                  ))}
                  <div className="actions">
                    <div onClick={selectGroup}>
                      <button>More</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </CardContainer>
      </Card>
      <button onClick={selectModule}>Back to Modules</button>
    </>
  );
}

export default Groups;
