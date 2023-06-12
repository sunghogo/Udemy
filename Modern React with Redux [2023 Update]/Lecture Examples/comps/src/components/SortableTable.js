import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config } = props;

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    return !column.sortValue
      ? column
      : {
          ...column,
          header: () => (
            <th onClick={() => handleClick(column.label)}>
              {column.label} IS SORTABLE
            </th>
          ),
        };
  });

  return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;
