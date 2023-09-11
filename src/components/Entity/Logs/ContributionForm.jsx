import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Action from '../../UI/Actions.jsx';
import './ContributionForm.scss';

const initialLog = {
   ContributionID: "",
   ContributionLogID:"",
   ContributionUserID: "",
   ContributionAttendanceID:"",
   ContributionCompletionID:"",
   ContributionFutureTasks:"",
   ContributionAttendanceName:"",
   ContributionCompletionName:"",
   ContributionLogName:"",
   ContributionLogGroupID: null,
   ContributionLogGroupName:"",
   ContributionLogUserName:"",

};

function ContributionForm({ onCancel, onSuccess }) {
  // Initialisation ------------------------------
  const conformance = {
    html2js: {

      ContributionID: (value) => (value === '' ? null : value),
      ContributionLogID: (value) => (value === '' ? null : value),
      ContributionUserID: (value) => (value === '' ? null : value),
      ContributionAttendanceID: (value) => (value === '' ? null : value),
      ContributionCompletionID: (value) => (value === '' ? null : value),
      ContributionFutureTasks: (value) => (value === '' ? '  ' : value),
      ContributionAttendanceName: (value) => (value === '' ? null : value),
      ContributionCompletionName: (value) => (value === '' ? null : value),
      ContributionLogName: (value) => (value === '' ? '  ' : value),
      ContributionLogGroupID: (value) => (value === '' ? null : value),
      ContributionLogGroupName: (value) => (value === '' ? '  ' : value),
      ContributionLogUserName: (value) => (value === '' ? '  ' : value),


    },
    js2html: {

       ContributionID: (value) => (value === '' ? null : value),
       ContributionLogID: (value) => (value === '' ? null : value),
       ContributionUserID: (value) => (value === '' ? null : value),
       ContributionAttendanceID: (value) => (value === '' ? null : value),
       ContributionCompletionID: (value) => (value === '' ? null : value),
       ContributionFutureTasks: (value) => (value === '' ? '  ' : value),
       ContributionAttendanceName: (value) => (value === '' ? null : value),
       ContributionCompletionName: (value) => (value === '' ? null : value),
       ContributionLogName: (value) => (value === '' ? '  ' : value),
       ContributionLogGroupID: (value) => (value === '' ? null : value),
       ContributionLogGroupName: (value) => (value === '' ? '  ' : value),
       ContributionLogUserName: (value) => (value === '' ? '  ' : value),  

    },
  };
  const apiURL = 'http://softwarehub.uk/unibase/api';

  const postLogEndpointExample = `${apiURL}/contributionlogs`;
  const postLogEndpointGraeme = `${apiURL}/logs/1`;
  const attendanceEndpoint = `${apiURL}/attendance`;
  const completionEndpoint = `${apiURL}/completion`;
  const contributionsEndpoint =`${apiURL}/contributions/1`;


  // State ---------------------------------------
  const [log, setLog] = useState(initialLog);

  const [attendanceOptions, setAttendanceOptions] = useState([]);
  const [completionOptions, setCompletionOptions] = useState([]);
  const [contribution, setContribution] = useState([initialLog]);



  const apiGet = async (endpoint, setState) => {
    const response = await fetch(endpoint);
    const result = await response.json();
    setState(result);
  };

  const apiPost = async (endpoint, record) => {
    // Build request object
    const request = {
      method: 'POST',
      body: JSON.stringify(record),
      headers: { 'Content-type': 'application/json' },
    };

    // Call the Fetch
    const response = await fetch(endpoint, request);
    const result = await response.json();
    return response.status >= 200 && response.status < 300
      ? { isSuccess: true }
      : { isSuccess: false, message: result.message };
  };


  useEffect(() => {
    apiGet(attendanceEndpoint, setAttendanceOptions);
  }, [attendanceEndpoint]);

  useEffect(() => {
    apiGet(completionEndpoint, setCompletionOptions);
  }, [completionEndpoint]);

  useEffect(() => {
    apiGet(contributionsEndpoint, setContribution);
  }, [contributionsEndpoint]);  

  // Handlers ------------------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLog({ ...log, [name]: [name](value) });
  };

  const handleSubmit = async () => {
    console.log(`Log=[${JSON.stringify(log)}]`);

    const logData = {
        ContributionID: log.ContributionID,
        ContributionLogID: log.ContributionLogID,
        ContributionUserID: log.ContributionUserID ,
        ContributionAttendanceID: log.ContributionAttendanceID,
        ContributionCompletionID: log.ContributionCompletionID,
        ContributionFutureTasks: log.ContributionFutureTasks,
        ContributionAttendanceName: log.ContributionAttendanceName,
        ContributionCompletionName: log.ContributionCompletionName,
        ContributionLogName: log.ContributionLogName,
        ContributionLogGroupID: log.ContributionLogGroupID,
        ContributionLogGroupName: log.ContributionLogGroupName,
        ContributionLogUserName: log.ContributionLogUserName,

    };


    const result = await apiPost(postLogEndpointGraeme, logData);
    if (result.isSuccess) onSuccess();
    else alert(result.message);
  };

  // View ----------------------------------------
  return (
    <div className="ContributionForm">
      <div className="FormTray">

        <label className="formLabel">
          Contribution Attendance:
            <select
              name="Attendance"
              value={log.ContributionAttendance}
              onChange={handleChange}
            >
              {attendanceOptions.map(option => (
                <option key={option.AttendanceID} value={option.AttendanceName}>
                  {option.AttendanceName}
                </option>
              ))}
              </select>
        </label>

        <label className="formLabel">
          Contribution Completion:
            <select
              name="ContributionCompletion"
              value={log.ContributionCompletion}
              onChange={handleChange}
            >
              {completionOptions.map(option => (
                <option key={option.CompletionID} value={option.CompletionName}>
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
              value={log.ContributionFutureTasks}
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
