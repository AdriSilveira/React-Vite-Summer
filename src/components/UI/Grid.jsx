import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Grid.scss";

export function Grid({ top, middle, bottom }) {
  return (
    <div className="gridItem">
      <div className="gridColum">
        <div className="gridRow">{top}</div>
        <div className="gridRow">{middle}</div>
        <div className="gridRow">{bottom}</div>
      </div>
    </div>
  );
}
