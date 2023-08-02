import { Form, Input, InputNumber, Checkbox, Button } from "antd";
import { tailFormItemLayout, formItemLayout } from "../../utils/form_layout";
import React from "react";

const InsertRewardForm = (props) => {
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
        name="descripcion"
        label="Descripcion"
        rules={[
          {
            type: "string",
            message: "Ingrese una descripcion valida!",
          },
          {
            required: true,
            message: "Ingrese una descripcion!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="puntos"
        label="Puntos"
        rules={[
          {
            required: true,
            message: "Ingrrese una cantidad de puntos(50-10000)!",
          },
        ]}
      >
        <InputNumber min={50} max={10000} defaultValue={50} />
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

export default InsertRewardForm;
