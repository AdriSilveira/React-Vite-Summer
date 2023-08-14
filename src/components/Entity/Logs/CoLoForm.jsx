import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Action from '../../UI/Actions.jsx';
import './CoLoForm.scss';

const initialLog = {
  //ModuleName: 'New Module',
  //ModuleCode: 'XY0000',
  //ModuleLevel: 3,
  //ModuleYearID: null,
    Attendance: 'Not Present',
    HomeworkCompleted: 'Not Completed',
    TasksForNextWeek: '',
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
      Attendance: (value) => (value === '' ? null : value),
      HomeworkCompleted: (value) => (value === '' ? null : value),
      TasksForNextWeek: (value) => (value === '' ? '  ' : value),
    //  ModuleImageURL: (value) => (value === '' ? null : value),
    },
    js2html: {
     // ModuleName: (value) => (value === null ? '' : value),
     // ModuleCode: (value) => (value === null ? '' : value),
     // ModuleLevel: (value) => value,
     // ModuleYearID: (value) => (value === null ? 0 : value),
      Attendance: (value) => (value === '' ? null : value),
      HomeworkCompleted: (value) => (value === '' ? null : value),
      TasksForNextWeek: (value) => (value === '' ? '' : value),
     // ModuleImageURL: (value) => (value === null ? '' : value),
    },
  };
  const apiURL = 'http://softwarehub.uk/unibase/api';
 // const yearsEndpoint = `${apiURL}/years`;
  //const staffEndpoint = `${apiURL}/users/staff`;
  //const postModuleEndpoint = `${apiURL}/modules`;
  const postLogEndpoint = `${apiURL}/contributionlogs`;

  // State ---------------------------------------
  const [log, setLog] = useState(initialLog);
 // const [years, setYears] = useState(null);
  //const [staff, setStaff] = useState(null);

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

  // Handlers ------------------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLog({ ...log, [name]: conformance.html2js[name](value) });
  };

  const handleSubmit = async () => {
    console.log(`Log=[${JSON.stringify(log)}]`);
    const result = await apiPost(postLogEndpoint, log);
    if (result.isSuccess) onSuccess();
    else alert(result.message);
  };

  // View ----------------------------------------
  return (
    <div className="CoLoForm">
      <div className="FormTray">

        <label className="formLabel">
          Attendance:
            <select
              name="Attendance"
              value={conformance.js2html['Attendance'](log.Attendance)}
              onChange={handleChange}
            >
              <option value="Present">Present</option>
              <option value="Late">Late</option>
              <option value='Apologies'>Apologies</option>
              <option value='Not Present'>Not Present</option>
            </select>
        </label>

        <label className="formLabel">
          Homework Completed:
            <select
              name="HomeworkCompleted"
              value={conformance.js2html['HomeworkCompleted'](log.HomeworkCompleted)}
              onChange={handleChange}
            >
              <option value="Completed">Completed</option>
              <option value="Partially Completed">Partially Completed</option>
              <option value='Not Completed'>Not Completed</option>
            </select>
        </label>

        <label className="formLabel">
          Tasks For Next Week:
            <textarea
              className="formTextArea"
              name="TasksForNextWeek"
              value={conformance.js2html['TasksForNextWeek'](log.TasksForNextWeek)}
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
