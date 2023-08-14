import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { create, update, remove } from "../../services/crud";
import { notification } from "antd";

const onFinish = (values) => {
  const updateActivityObject = {};
  const time = new Date(values.tiempo_acti.$d);
  updateActivityObject.nombre_acti = values.nombre_acti;
  updateActivityObject.descripcion_acti = values.descripcion_acti;
  updateActivityObject.tiempo_acti = time.toLocaleTimeString("it-IT");
  updateActivityObject.cal_quemadas_acti = values.cal_quemadas_acti;
  updateActivityObject.puntos_ot_acti = values.puntos_ot_acti;
  create(updateActivityObject, "activity");
  notification.success({
    message: "Actividad creada",
    description: ``,
    icon: <SmileOutlined style={{ color: "#108ee9" }} />,
  });
  window.location.reload();
};

const onFinishUpdate = (values, selectedRow) => {
  const updateActivityObject = {};
  const month = values.nacimiento.$M + 1;

  updateActivityObject.nombre_activity = values.nombre;
  updateActivityObject.apellido_activity = values.apellido;
  updateActivityObject.correo_activity = values.correo;
  updateActivityObject.contrasena_activity = `${values.apellido}${values.nacimiento.$y}`;
  updateActivityObject.fecha_nacimiento_activity = `${values.nacimiento.$y}-${month}-${values.nacimiento.$D}`;
  updateActivityObject.genero_activity = values.genero;
  updateActivityObject.id_emp = 1;
  updateActivityObject.id_admin = 1;

  update(updateActivityObject, selectedRow.id_acti, "activity");

  notification.success({
    message: "Actividad actualizada",
    description: `Los datos han sido actualizados`,
    icon: <SmileOutlined style={{ color: "#108ee9" }} />,
  });

  window.location.reload();
};

const onOkDelete = (selectedRow) => {
  remove(selectedRow.id_acti, "activity");
  notification.warning({
    message: "Actividad desactivada",
    description: `Los datos han sido eliminados`,
  });
  window.location.reload();
};

export { onFinish, onFinishUpdate, onOkDelete };
