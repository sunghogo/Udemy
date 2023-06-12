import Table from "./Table";

function SortableTable(props) {
  const { config } = props;

  const handleClick = (label) => {
    console.log(label);
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
