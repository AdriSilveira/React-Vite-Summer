import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Action from '../../UI/Actions.jsx';
import './CoLoForm.scss';

const initialLog = {
  //ModuleName: 'New Module',
  //ModuleCode: 'XY0000',
  //ModuleLevel: 3,
  //ModuleYearID: null,
  //  LogName: '',
  //  LogGroupID: null,
  //  LogSubmissionDate: new Date().toISOString(),
  ContributionLogName: '',
  ContributionLogUserName: '',
  ContributionLogGroupName:'',
  ContributionLogGroupID: null,
  ContributionAttendance: '',
  ContributionCompletion: '',
  ContributionFutureTasks: '',
  //ModuleImageURL:
   // 'https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg',
};

function CoLoForm({ onCancel, onSuccess }) {
  // Initialisation ------------------------------
  const conformance = {
    html2js: {
     // ModuleName: (value) => (value === '' ? null : value),
     // ModuleCode: (value) => (value === '' ? null : value),
     // ModuleLevel: (value) => parseInt(value),
     // ModuleYearID: (value) => (value == 0 ? null : parseInt(value)),
     ContributionLogName: (value) => (value === '' ? ' ' : value),
     ContributionLogUserName: (value) => (value === '' ? ' ' : value),
     ContributionLogGroupName: (value) => (value === '' ? ' ' : value),
     ContributionAttendance: (value) => (value === '' ? null : value),
     ContributionCompletion: (value) => (value === '' ? null : value),
     ContributionFutureTasks: (value) => (value === '' ? '  ' : value),
     // ModuleImageURL: (value) => (value === '' ? null : value),
    },
    js2html: {
     // ModuleName: (value) => (value === null ? '' : value),
     // ModuleCode: (value) => (value === null ? '' : value),
     // ModuleLevel: (value) => value,
     // ModuleYearID: (value) => (value === null ? 0 : value),
     ContributionLogName: (value) => (value === '' ? ' ' : value),
     ContributionLogUserName: (value) => (value === '' ? ' ' : value),
     ContributionLogGroupName: (value) => (value === '' ? ' ' : value),
     ContributionAttendance: (value) => (value === '' ? null : value),
     ContributionCompletion: (value) => (value === '' ? null : value),
     ContributionFutureTasks: (value) => (value === '' ? '' : value),
     // ModuleImageURL: (value) => (value === null ? '' : value),
    },
  };
  const apiURL = 'http://softwarehub.uk/unibase/api';
 // const yearsEndpoint = `${apiURL}/years`;
  //const staffEndpoint = `${apiURL}/users/staff`;
  //const postModuleEndpoint = `${apiURL}/modules`;
  const postLogEndpointExample = `${apiURL}/contributionlogs`;
  const postLogEndpointGraeme = `${apiURL}/logs/1`;
  const attendanceEndpoint = `${apiURL}/attendance`;
  const completionEndpoint = `${apiURL}/completion`;
  const contributionsEndpoint =`${apiURL}/contributions/1`;

  // State ---------------------------------------
  const [log, setLog] = useState(initialLog);
  //const [years, setYears] = useState(null);
  //const [staff, setStaff] = useState(null);
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

 // useEffect(() => {
  //  apiGet(yearsEndpoint, setYears);
 // }, [yearsEndpoint]);

  /*useEffect(() => {
    apiGet(staffEndpoint, setStaff);
  }, [staffEndpoint]);*/

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
    setLog({ ...log, [name]: conformance.html2js[name](value) });
  };

  const handleSubmit = async () => {
    console.log(`Log=[${JSON.stringify(log)}]`);
    const result = await apiPost(contributionsEndpoint, log);
    if (result.isSuccess) onSuccess();
    else alert(result.message);
  };

  // View ----------------------------------------
  return (
    <div className="CoLoForm">
      <div className="FormTray">

      <label className="formLabel">
          Contribution Log Name:
            <input
              type="text"
              name="ContributionLogName"
              value={log.ContributionLogName}
              onChange={handleChange}
            />
      </label>

      <label className="formLabel">
        Contribution Log User Name:
            <input
              type="text"
              name="ContributionLogUserName"
              value={log.ContributionLogUserName}
              onChange={handleChange}
            />
      </label>  

      <label className="formLabel">
        Contribution Log Group Name:
            <input
              type="text"
              name="ContributionLogGroupName"
              value={log.ContributionLogGroupName}
              onChange={handleChange}
            />
      </label>  

      <label className="formLabel">
        Contribution Log Group ID:
            <input
              type="number"
              name="ContributionLogGroupID"
              value={log.ContributionLogGroupID}
              onChange={handleChange}
            />
      </label>

      <label className="formLabel">
          Log Submission Date:
            <input
              type="datetime-local"
              name="LogSubmissionDate"
              value={log.LogSubmissionDate}
              onChange={handleChange}
            />
      </label>             

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
        <Action.Cancel showText buttonText="Cancel Form" onClick={onCancel} />
      </Action.Tray>
    </div>
  );
}

CoLoForm.propTypes = {
  onCancel: PropTypes.func,
  onSuccess: PropTypes.func,
};

export default CoLoForm;
