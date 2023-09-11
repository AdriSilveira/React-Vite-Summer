import Action from "../../UI/Actions";
import "./LogContributions.scss";

const initialContribution = {
  ContributionID: "",
  ContributionLogID: "",
  ContributionUserID: "",
  ContributionAttendanceID: "",
  ContributionCompletionID: "",
  ContributionFuturetasks: "",
};

function LogContributions() {
  //Initialisation---------------------------------------------------------------------
  //State------------------------------------------------------------------------------
  //Handlers---------------------------------------------------------------------------
  const [contribution, setContribution] = useState(initialContribution);
  //View-------------------------------------------------------------------------------
  return (
    <div className="logContribution">
      <div className="FormTray">
        <label for="">
          Contribution ID
          <input
            type="text"
            name="ContributionID"
            value="{contribution.ContributionID}"
          ></input>
        </label>

        <label for="">
          ContributionLogID
          <input
            type="text"
            name="ContributionLogID"
            value="{contribution.ContributionLogID}"
          ></input>
        </label>

        <label for="">ContributionUserID</label>
        <input
          type="text"
          name="Contribution User ID"
          value="{contributionContributionUserID}"
        ></input>

        <label for="">
          ContributionAttendanceID
          <input
            type="text"
            name="Contribution Attendance ID"
            value="{contribution.ContributionAttendanceID}"
          ></input>
        </label>

        <label for="">
          ContributionCompletionID
          <input
            type="text"
            name="Contribution Completion ID"
            value="{contribution.ContributionCompletionID}"
          ></input>
        </label>

        <label for="">
          ContributionFuturetasks
          <input
            type="text"
            name="Contribution Future Tasks"
            value="{contribution.ContributionFuturetasks}"
          ></input>
        </label>
      </div>

      <Action.Tray>
        <Action.Cancel showText buttonText="Cancel form" onClick={oncancel} />
      </Action.Tray>
    </div>
  );
}
export default LogContributions;
