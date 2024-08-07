import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Action from "../../UI/Actions.jsx";
import "./ContributionForm.scss";

const initialLog = {
  ContributionID: "",
  ContributionLogID: "1",
  ContributionUserID: "",
  ContributionAttendanceID: "",
  ContributionCompletionID: "",
  ContributionFutureTasks: "",
  ContributionAttendanceName: "",
  ContributionCompletionName: "",
  ContributionLogName: "",
  ContributionLogGroupID: null,
  ContributionLogGroupName: "",
  ContributionLogUserName: "",
};

function ContributionForm({ onCancel, onSuccess }) {
  // Initialisation ------------------------------
  const apiURL = "https://softwarehub.uk/unibase/api";

  // const conformance = {
  //   html2js: {
  //     ContributionID: (value) => (value === "" ? null : value),
  //     ContributionLogID: (value) => (value === "" ? null : value),
  //     ContributionUserID: (value) => (value === "" ? null : value),
  //     ContributionAttendanceID: (value) => (value === "" ? null : value),
  //     ContributionCompletionID: (value) => (value === "" ? null : value),
  //     ContributionFutureTasks: (value) => (value === "" ? "  " : value),
  //     ContributionAttendanceName: (value) => (value === "" ? null : value),
  //     ContributionCompletionName: (value) => (value === "" ? null : value),
  //     ContributionLogName: (value) => (value === "" ? "  " : value),
  //     ContributionLogGroupID: (value) => (value === "" ? null : value),
  //     ContributionLogGroupName: (value) => (value === "" ? "  " : value),
  //     ContributionLogUserName: (value) => (value === "" ? "  " : value),
  //   },
  //   js2html: {
  //     ContributionID: (value) => (value === "" ? null : value),
  //     ContributionLogID: (value) => (value === "" ? null : value),
  //     ContributionUserID: (value) => (value === "" ? null : value),
  //     ContributionAttendanceID: (value) => (value === "" ? null : value),
  //     ContributionCompletionID: (value) => (value === "" ? null : value),
  //     ContributionFutureTasks: (value) => (value === "" ? "  " : value),
  //     ContributionAttendanceName: (value) => (value === "" ? null : value),
  //     ContributionCompletionName: (value) => (value === "" ? null : value),
  //     ContributionLogName: (value) => (value === "" ? "  " : value),
  //     ContributionLogGroupID: (value) => (value === "" ? null : value),
  //     ContributionLogGroupName: (value) => (value === "" ? "  " : value),
  //     ContributionLogUserName: (value) => (value === "" ? "  " : value),
  //   },
  // };

  // const postLogEndpointExample = `${apiURL}/contributionlogs`;
  const postLogEndpointGraeme = `${apiURL}/logs`;
  const attendanceEndpoint = `${apiURL}/attendance`;
  const completionEndpoint = `${apiURL}/completion`;
  const contributionsEndpoint = `${apiURL}/contributions`;

  // State ---------------------------------------
  const [ContributionRec, setContributionRec] = useState(initialLog);
  const [attendanceOptions, setAttendanceOptions] = useState([]);
  const [completionOptions, setCompletionOptions] = useState([]);

  const apiGet = async (endpoint, setState) => {
    try {
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setState(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error here, e.g., display an error message to the user
    }
  };

  const apiPost = async (endpoint, record) => {
    // Build request object
    console.log(record);
    const request = {
      method: "POST",
      body: JSON.stringify(record),
      headers: { "Content-type": "application/json" },
    };
    try {
      // Call the Fetch
      console.log(endpoint);
      const response = await fetch(endpoint, request);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      return { isSuccess: true, result };
    } catch (error) {
      console.error("Error:", error);
      return { isSuccess: false, message: "An error occurred." };
    }
  };
  useEffect(() => {
    apiGet(attendanceEndpoint, setAttendanceOptions);
    apiGet(completionEndpoint, setCompletionOptions);
    //apiGet(contributionsEndpoint, setContributionRec);
  }, [attendanceEndpoint, completionEndpoint, contributionsEndpoint]);

  // Handlers ------------------------------------
  const handleChange = (event) => {
    console.log(ContributionRec);
    const { name, value } = event.target;
    console.log();
    setContributionRec({ ...ContributionRec, [name]: value });
  };

  const handleSubmit = async () => {
    // console.log(`Contribution=[${JSON.stringify(ContributionRec)}]`);

    const logData = {
      ContributionLogID: ContributionRec.ContributionLogID,
      ContributionUserID: ContributionRec.ContributionUserID,
      ContributionAttendanceID: ContributionRec.ContributionAttendanceID,
      ContributionCompletionID: ContributionRec.ContributionCompletionID,
      ContributionFuturetasks: ContributionRec.ContributionFutureTasks,
    };
    console.log(logData);
    const result = await apiPost(contributionsEndpoint, logData);
    if (result.isSuccess) onSuccess();
    else alert(result.message);
  };

  // View ----------------------------------------
  return (
    <div className="ContributionForm">
      <div className="FormTray">
        ContributionAttendanceID
        <label className="formLabel">
          User ID:
          <textarea
            className="formTextArea"
            name="ContributionUserID"
            value={ContributionRec.ContributionUserID}
            onChange={handleChange}
          />
        </label>
        <label className="formLabel">
          Contribution Attendance:
          <select
            name="ContributionAttendanceID"
            value={ContributionRec.ContributionAttendanceID}
            onChange={handleChange}
          >
            {attendanceOptions.map((option) => (
              <option key={option.AttendanceID} value={option.AttendanceID}>
                {option.AttendanceName}
              </option>
            ))}
          </select>
        </label>
        <label className="formLabel">
          Contribution Completion:
          <select
            name="ContributionCompletionID"
            value={ContributionRec.ContributionCompletionID}
            onChange={handleChange}
          >
            {completionOptions.map((option) => (
              <option key={option.CompletionID} value={option.CompletionID}>
                {option.CompletionName}
              </option>
            ))}
          </select>
        </label>
        <label className="formLabel">
          Contribution Future Tasks:
          <textarea
            className="formTextArea"
            name="ContributionFutureTasks"
            value={ContributionRec.ContributionFutureTasks}
            onChange={handleChange}
          />
        </label>
      </div>

      <Action.Tray>
        <Action.Submit showText onClick={handleSubmit} />
        <Action.Cancel showText buttonText="Cancel" onClick={onCancel} />
      </Action.Tray>
    </div>
  );
}

ContributionForm.propTypes = {
  onCancel: PropTypes.func,
  onSuccess: PropTypes.func,
};

export default ContributionForm;
