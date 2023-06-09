import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState("");

  const handleClick = (isExpanded, index) =>
    isExpanded ? setExpandedIndex("") : setExpandedIndex(index);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = <span>{isExpanded ? "DOWN" : "LEFT"}</span>;

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(isExpanded, index)}>
          {item.label} {icon}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
