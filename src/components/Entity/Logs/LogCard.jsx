import PropTypes from "prop-types";
import { Card } from "../../UI/Card.jsx";
import { Grid as Grid } from "../../UI/Grid.jsx";
import { Link } from "react-router-dom";
import "./LogCard.scss";
import EmptyContribution from "../../data/EmptyContribution.js";
import { useEffect, useState } from "react";

function LogCard({ log, contributions, students }) {
  // Initialisation --------------------------------------
  // State -----------------------------------------------
  const [sortedContribution, setSortedContribuion] = useState([]);

  const [completeContribution, setCompleteContribution] = useState([]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    sortContributions();
  }, []);

  const sortContributions = () => {
    if (contributions.length == 1) {
      setSortedContribuion(contributions);
    } else {
      setSortedContribuion(
        contributions.sort(function (a, b) {
          return a.ContributionUserID - b.ContributionUserID;
        })
      );
    }
    console.log("--------");
    console.log(contributions);
    console.log(sortedContribution);

    students.forEach((student) => {
      if (sortedContribution[count] == undefined) {
        setCompleteContribution(
          completeContribution.concat(EmptyContribution[0])
        );
      } else if (
        student.UserID == sortedContribution[count].ContributionUserID
      ) {
        setCompleteContribution(
          completeContribution.concat(sortedContribution[count])
        );
        setCount(count + 1);
      } else {
        setCompleteContribution(
          completeContribution.concat(EmptyContribution[0])
        );
      }
    });
  };
  // Handlers --------------------------------------------

  // View ------------------------------------------------
  return (
    <div className="logCard">
      <Card>
        <h1>{log.LogName}</h1>
        <div className="gridContainer">
          <Grid top="Atendance" middle="Last Task" bottom="Future Task" />
          {completeContribution.map((contrbution) => (
            <Grid
              top={contrbution.ContributionAttendanceName}
              middle={contrbution.ContributionCompletionName}
              bottom={contrbution.ContributionFuturetasks}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}

LogCard.propTypes = {
  log: PropTypes.shape({}),
};

export default LogCard;
