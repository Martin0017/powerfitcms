import { sharedOnCell } from "../utils/table_settings";

const ActivityColumn = (dataSearch) => {
  const columns = [
    {
      title: "#",
      dataIndex: `id_acti`,
      rowScope: "id",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.id_activity - b.id_activity,
    },
    {
      title: "Nombre",
      dataIndex: "nombre_acti",
      key: "name",
      onCell: sharedOnCell,
      filteredValue: [dataSearch],
      onFilter: (value, record) => {
        return (
          String(record.nombre_acti)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.id_activity)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.puntos_ot_acti)
            .toLowerCase()
            .includes(value.toLowerCase())
        );
      },
    },
    {
      title: "Descripción",
      dataIndex: "descripcion_acti",
      key: "lastname",
      onCell: sharedOnCell,
    },
    {
      title: "Tiempo",
      dataIndex: "tiempo_acti",
      key: "email",
      onCell: sharedOnCell,
    },
    {
      title: "Calorias",
      dataIndex: "cal_quemadas_acti",
      key: "birthday",
      onCell: sharedOnCell,
    },
    {
      title: "Puntos",
      dataIndex: "puntos_ot_acti",
      key: "gender",
      onCell: sharedOnCell,
    },
  ];

  return columns;
};

export default ActivityColumn;
