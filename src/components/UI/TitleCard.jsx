import "./TitleCard.scss";

export function TitleCardContainer(props) {
  return <div className="TitleCardContainer"> {props.children} </div>;
}

export function TitleCard(props) {
  return <div className="TitleCard">{props.children}</div>;
}
