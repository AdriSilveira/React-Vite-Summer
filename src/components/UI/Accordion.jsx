import React, { useState } from "react";
import "./Accordion.scss";

//Initializing-----------------------------------------------
const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {React.Children.map(children, (child, index) => {
        const isActive = index === activeIndex;

        return (
          <div className="accordion-item">
            <button
              className={`accordion-header ${isActive ? "active" : ""}`}
              onClick={() => handleItemClick(index)}
            >
              {child.props.title}
            </button>
            {isActive && (
              <div className="accordion-content">{child.props.children}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const AccordionItem = ({ title, children }) => {
  // This is just a dummy component used for better code organization
  // You can directly use `Accordion.Item` in the `Groups` component.
  return <>{children}</>;
};

Accordion.Item = AccordionItem;

export default Accordion;
