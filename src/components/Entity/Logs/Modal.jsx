import PropTypes from "prop-types";
import "./Modal.scss";
//import "./UserCard.scss";

function Modal({ setIsOpen, contribution, log }) {
  // Initialisation --------------------------------------
  // State -----------------------------------------------
  // Handlers --------------------------------------------

  // View ------------------------------------------------
  console.log(contribution);
  console.log(log.LogID);
  console.log(
    contribution.filter(
      (contribution) => contribution.ContributionLogID == log.LogID
    )
  );
  return (
    <>
      <div onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <button onClick={() => setIsOpen(false)}></button>
          <div className="modalContent">
            {contribution
              .filter(
                (contribution) => contribution.ContributionLogID == log.LogID
              )
              .map((contribution) => (
                <p1>{contribution.ContributionUserID}</p1>
              ))}
          </div>
          <button onClick={() => setIsOpen(false)}>Delete</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </div>
      </div>
    </>
  );
}

// LogCardCard.propTypes = {
//   user: PropTypes.shape({
//     UserFirstname: PropTypes.string.isRequired,
//     UserLastname: PropTypes.string.isRequired,
//     UserImageURL: PropTypes.string.isRequired,
//   }),
//};

export default Modal;
