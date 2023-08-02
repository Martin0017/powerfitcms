import { sharedOnCell } from "../utils/table_settings";

const UserColumn = (dataSearch) => {
  const columns = [
    {
      title: "#",
      dataIndex: `id_user`,
      rowScope: "id",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.id_user - b.id_user,
    },
    {
      title: "Nombre",
      dataIndex: "nombre_user",
      key: "name",
      onCell: sharedOnCell,
      filteredValue: [dataSearch],
      onFilter: (value, record) => {
        return (
          String(record.nombre_user)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.id_user).toLowerCase().includes(value.toLowerCase()) ||
          String(record.correo_user).toLowerCase().includes(value.toLowerCase())
        );
      },
    },
    {
      title: "Apellido",
      dataIndex: "apellido_user",
      key: "lastname",
      onCell: sharedOnCell,
    },
    {
      title: "Correo",
      dataIndex: "correo_user",
      key: "email",
      onCell: sharedOnCell,
    },
    {
      title: "Fecha de Nacimiento",
      dataIndex: "fecha_nacimiento_user",
      key: "birthday",
      onCell: sharedOnCell,
    },
    {
      title: "Genero",
      dataIndex: "genero_user",
      key: "gender",
      onCell: sharedOnCell,
    },
  ];

  return columns;
};

export default UserColumn;
