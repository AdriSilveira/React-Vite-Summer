import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Action from "../../UI/Actions.jsx";
import "./LogForm.scss";
import API from "../../api/API.jsx";

const initialLog = {
  LogID: 1,
  LogName: "",
  // LogGroupID: 0,
  LogSubmissiondate: new Date(),
  LogGroupName: "",
};

function LogForm({ onCancel, onSuccess, groupID }) {
  // Initialisation ------------------------------
  const conformance = {
    html2js: {
      LogID: (value) => (value === "" ? null : value),
      LogName: (value) => (value === "" ? " " : value),
      LogGroupID: (value) => (value === "" ? null : value),
      LogSubmissiondate: (value) => new Date(value),
      LogGroupName: (value) => (value === "" ? " " : value),
    },

    js2html: {
      LogID: (value) => (value === null ? 0 : value),
      LogName: (value) => (value === "" ? " " : value),
      LogGroupID: (value) => (value === null ? 0 : value),
      LogSubmissiondate: (value) => value.toString().slice(0, 10), //.toISOString()
      LogGroupName: (value) => (value === "" ? " " : value),
    },
  };

  const apiURL = "http://softwarehub.uk/unibase/api";
  const LogEndpoint = `${apiURL}/logs/1`;
  const postLogEndpoint = `${apiURL}/logs`;

  // State ---------------------------------------
  const [log, setLog] = useState({ ...initialLog, LogGroupID: groupID });

  const apiGet = async (LogEndpoint, setState) => {
    console.log("Hi");
    const response = await fetch(LogEndpoint);
    const result = await response.json();
    console.log(result);
    setLog(result[0]);
  };

  const apiPost = async (LogEndpoint, record) => {
    record.LogSubmissiondate = new Date(record.LogSubmissiondate);
    const request = {
      method: "POST",
      body: JSON.stringify(record),
      headers: { "content-type": "application/json" },
    };

    //Call the fetch
    const response = await fetch(LogEndpoint, request);
    const result = await response.json();
    return response.status >= 200 && response.status < 300
      ? { isSuccess: true }
      : { isSuccess: false, message: result.message };
  };

  // useEffect(() => {
  //   console.log(groupID);
  //   if (groupID) {
  //     apiGet(LogEndpoint);
  //   }
  // }, []);

  // Handlers ------------------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLog({ ...log, [name]: value });
  };

  const handleSubmit = async () => {
    console.log(log);
    if (!log.LogName) {
      console.log("LogName cannot be empty.");
      return;
    }
    if (!log.LogGroupID) {
      console.log("LogGroupID is required.");
      return;
    }
    //log is now a int using parsenInt
    // const logWithNumberID = { ...log, LogID: parseInt(log.LogID, 2) };

    console.log(`log=[${JSON.stringify(log)}]`);

    const result = await apiPost(postLogEndpoint, log);
    result.isSuccess
      ? console.log(`Insert successful`)
      : console.log(`Insert NOT successful: ${result.message}`);
    apiGet(LogEndpoint);
  };

  // View ----------------------------------------
  return (
    <div className="LogForm">
      <div className="FormTray">
        <label className="formLabel">
          Log Name:
          <input
            type="text"
            name="LogName"
            value={conformance.js2html["LogName"](log.LogName)}
            onChange={handleChange}
          />
        </label>

        <label className="formLabel">
          <input
            type="hidden"
            name="LogGroupID"
            value={conformance.js2html["LogGroupID"](log.LogGroupID)}
            onChange={handleChange}
          />
        </label>
        <label className="formLabel">
          Log Submission Date:
          <input
            type="text"
            name="LogSubmissiondate"
            value={conformance.js2html["LogSubmissiondate"](
              log.LogSubmissiondate
            )}
            onChange={handleChange}
          />
        </label>
      </div>

      <Action.Tray>
        <Action.Submit showText onClick={handleSubmit} />
        <Action.Cancel showText buttonText="Cancel Form" onClick={onCancel} />
      </Action.Tray>
    </div>
  );
}

LogForm.propTypes = {
  onCancel: PropTypes.func,
  onSuccess: PropTypes.func,
  groupID: PropTypes.number,
};

export default LogForm;
