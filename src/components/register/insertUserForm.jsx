import { Select, Form, Input, DatePicker, Checkbox, Button } from "antd";
import { tailFormItemLayout, formItemLayout } from "../../utils/form_layout";
import React from "react";
const { Option } = Select;

const InsertUserForm = (props) => {
  const { form, onFinish } = props;

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="nombre"
        label="Nombre"
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
              if (
                getFieldValue("nacimiento").year() < 2004 &&
                getFieldValue("nacimiento").year() > 1940
              ) {
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

      <Form.Item
        name="terminos"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Debe aceptar")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          Acepto los <a>terminos y condiciones </a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InsertUserForm;
