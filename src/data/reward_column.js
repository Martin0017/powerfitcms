import { sharedOnCell } from "../utils/table_settings";

const RewardColumn = (dataSearch) => {
  const columns = [
    {
      title: "#",
      dataIndex: `id_pre`,
      rowScope: "id",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.id_pre - b.id_pre,
    },
    {
      title: "Nombre del Premio",
      dataIndex: "nombre_pre",
      key: "name",
      onCell: sharedOnCell,
      filteredValue: [dataSearch],
      onFilter: (value, record) => {
        return (
          String(record.nombre_pre)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.id_pre).toLowerCase().includes(value.toLowerCase()) ||
          String(record.puntos_rq_pre)
            .toLowerCase()
            .includes(value.toLowerCase())
        );
      },
    },
    {
      title: "Descripción",
      dataIndex: "descripcion_pre",
      key: "description",
      onCell: sharedOnCell,
    },
    {
      title: "Puntos Necesarios",
      dataIndex: "puntos_rq_pre",
      key: "points",
      onCell: sharedOnCell,
    },
  ];
  return columns;
};

export default RewardColumn;
