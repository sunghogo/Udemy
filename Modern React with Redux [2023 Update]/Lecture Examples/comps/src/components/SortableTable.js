import Table from "./Table";

function SortableTable(props) {
  const { config } = props;

  const updatedConfig = config.map((column) => {
    return !column.sortValue
      ? column
      : { ...column, header: () => <th>{column.label} IS SORTABLE</th> };
  });

  return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;
