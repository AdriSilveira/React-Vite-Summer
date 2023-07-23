import "./Card.scss";
import propTypes from "prop-types";

export function CardContainer(props) {
  //Initialisation---------------------------------
  //State------------------------------------------
  //Handlers---------------------------------------
  //View-------------------------------------------

  return <div className="cardContainer"> {props.children} </div>;
}

CardContainer.propTypes = {
  //Initialisation---------------------------------
  //State------------------------------------------
  //Handlers---------------------------------------
  //View-------------------------------------------

  children: propTypes.element,
};

export function Card(props) {
  return <div className="card">{props.children}</div>;
}

Card.propTypes = {
  moduleData: propTypes.object.isRequired,
  student: propTypes.object.isRequired,
};

