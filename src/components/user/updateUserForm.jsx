import { Form, Select, Input, DatePicker, Button } from "antd";
import React from "react";
import dayjs from "dayjs";
import { formItemLayout, tailFormItemLayout } from "../../utils/form_layout";
const { Option } = Select;
const UpdateUserForm = (props) => {
  const { onFinishUpdate, selectedRow, form2 } = props;

  return (
    <Form
      {...formItemLayout}
      form={form2}
      name="update"
      onFinish={(values) => {
        onFinishUpdate(values, selectedRow);
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="nombre"
        label="Nombre"
        initialValue={selectedRow.nombre_user}
        resetFields
        rules={[
          {
            type: "string",
            message: "Ingrese un nombre valido!",
          },
          {
            required: true,
            message: "Ingrese un nombre!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="apellido"
        label="Apellido"
        initialValue={selectedRow.apellido_user}
        rules={[
          {
            type: "string",
            message: "Ingrese un nombre valido!",
          },
          {
            required: true,
            message: "Ingrese un apellido!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="correo"
        label="Correo"
        initialValue={selectedRow.correo_user}
        rules={[
          {
            type: "email",
            message: "Ingrese un correo valido!",
          },
          {
            required: true,
            message: "Ingrese un correo valido!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="nacimiento"
        label="Fecha de Nacimiento"
        initialValue={dayjs(selectedRow.fecha_nacimiento_user, "YYYY-MM-DD")}
        rules={[
          {
            type: "date",
            message: "Ingrese una fecha valida!",
            status: false,
          },
          {
            required: true,
            message: "Ingrese una fecha de nacimiento!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (getFieldValue("nacimiento").year() < 2004) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("La fecha ingresada no es valida!"),
              );
            },
          }),
        ]}
      >
        <DatePicker format="YYYY-MM-DD" disabledTime={true} />
      </Form.Item>

      <Form.Item
        name="genero"
        label="Genero"
        initialValue={selectedRow.genero_user}
        rules={[
          {
            required: true,
            message: "Seleccione un genero!",
          },
        ]}
      >
        <Select placeholder="Seleccione su sexo">
          <Option value="Masculino">Masculino</Option>
          <Option value="Femenino">Femenino</Option>
          <Option value="No especificar">No especificar</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Actualizar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateUserForm;
