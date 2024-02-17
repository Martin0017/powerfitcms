import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { create, update, remove } from "../../services/crud";
import { notification } from "antd";

const onFinish = (values) => {
  const updateUserObject = {};
  const month = values.nacimiento.$M + 1;

  updateUserObject.nombre_user = values.nombre;
  updateUserObject.apellido_user = values.apellido;
  updateUserObject.correo_user = values.correo;
  updateUserObject.contrasena_user = `${values.apellido}${values.nacimiento.$y}`;
  updateUserObject.fecha_nacimiento_user = `${values.nacimiento.$y}-${month}-${values.nacimiento.$D}`;
  updateUserObject.genero_user = values.genero;
  updateUserObject.id_emp = 2;
  updateUserObject.id_admin = 2;
  console.log(updateUserObject);
  create(updateUserObject, "user");
  notification.success({
    message: "Usuario creado",
    description: `Notifique al usuario`,
    icon: <SmileOutlined style={{ color: "#108ee9" }} />,
  });
  setTimeout(function() {
    window.location.reload();
}, 2000);
  
};

const onFinishUpdate = (values, selectedRow) => {
  const updateUserObject = {};
  const month = values.nacimiento.$M + 1;

  updateUserObject.nombre_user = values.nombre;
  updateUserObject.apellido_user = values.apellido;
  updateUserObject.correo_user = values.correo;
  updateUserObject.contrasena_user = `${values.apellido}${values.nacimiento.$y}`;
  updateUserObject.fecha_nacimiento_user = `${values.nacimiento.$y}-${month}-${values.nacimiento.$D}`;
  updateUserObject.genero_user = values.genero;
  updateUserObject.id_emp = 1;
  updateUserObject.id_admin = 1;

  update(updateUserObject, selectedRow.id_user, "user");

  notification.success({
    message: "Usuario actualizado",
    description: `Los datos han sido actualizados`,
    icon: <SmileOutlined style={{ color: "#108ee9" }} />,
  });

  window.location.reload();
};

const onOkDelete = (selectedRow) => {
  remove(selectedRow.id_user, "user");
  notification.warning({
    message: "Usuario desactivado",
    description: `Los datos han sido eliminados`,
  });
  window.location.reload();
};

export { onFinish, onFinishUpdate, onOkDelete };
