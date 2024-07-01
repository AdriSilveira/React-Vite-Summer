import PropTypes from "prop-types";
import { Card } from "../../UI/Card.jsx";
import { Grid as Grid } from "../../UI/Grid.jsx";
import { Link } from "react-router-dom";
import "./LogCard.scss";
//import EmptyContribution from "../data/EmptyContribution.js";
// import EmptyContribution from "../../data/EmptyContribution.jsx";
import { useEffect, useState } from "react";

function LogCard({ log, contributions, students }) {
  // Initialisation --------------------------------------
  // State -----------------------------------------------
  //const [sortedContribution, setSortedContribuion] = useState([]);

  const [completeContribution, setCompleteContribution] = useState([]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    sortContributions(contributions, students);
  }, [contributions, students]);

  useEffect(() => {
    console.log("completeContribution");
    console.log(completeContribution);
  }, [completeContribution]);

  const sortContributions = (contributions, students) => {
    const sortedContribution = contributions.sort(function (a, b) {
      return a.ContributionUserID - b.ContributionUserID;
    });
    console.log("--------");
    console.log(contributions);
    console.log(sortedContribution);

    const tempCont = [];

    students.forEach((student) => {
      console.log(student.UserID);
      //console.log(sortedContribution[count].ContributionUserID);
      if (sortedContribution[count] == undefined) {
        tempCont.push(EmptyContribution[0]);
        setCompleteContribution(tempCont);
        // if (sortedContribution[count] === undefined) {
        //   const tempContA = completeContribution.concat(EmptyContribution[0]);
        //   setCompleteContribution(tempContA);
        //   console.log("a");
        //   console.log(tempCont);
      } else if (
        student.UserID == sortedContribution[count].ContributionUserID
      ) {
        tempCont.push(sortedContribution[count]);
        setCompleteContribution(tempCont);
        setCount(count + 1);
        console.log(sortedContribution[count]);
        console.log("b");
        console.log(tempCont);
      } else {
        tempCont.push(EmptyContribution[0]);
        setCompleteContribution(tempCont);
        console.log("c");
      }
      console.log(completeContribution);
    });
    setCompleteContribution(tempCont);
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
