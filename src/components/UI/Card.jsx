import "./Card.scss";
import propTypes from "prop-types";

export function CardContainer(props) {
  return <div className="cardContainer"> {props.children} </div>;
}

CardContainer.propTypes = {
  children: propTypes.element,
};

export function Card(props) {
  return <div className="card">{props.children}</div>;
}

Card.propTypes = {
  moduleData: propTypes.object.isRequired,
  student: propTypes.object.isRequired,
};
