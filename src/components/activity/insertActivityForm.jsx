import { Form, Input, InputNumber, TimePicker, Checkbox, Button } from "antd";
import { tailFormItemLayout, formItemLayout } from "../../utils/form_layout";
import { Select } from 'antd';
import React from "react";


const InsertActivityForm = (props) => {
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
      name="nombre_acti"
      label="Nombre"
      rules={[
        {
          required: true,
          message: "Ingrese un nombre!",
        },
      ]}
    >
      <Select>
        <Select.Option value="Caminata" >Caminata </Select.Option>
        <Select.Option value="Caminata Rapida" >Caminata Rapida</Select.Option>
        <Select.Option value="Trote" >Trote </Select.Option>
        <Select.Option value="Correr" >Correr </Select.Option>
      </Select>
    </Form.Item>

    <Form.Item
      name="descripcion_acti"
      label="Descripción"
      rules={[
        {
          type: "string",
          message: "Ingrese un nombre valido!",
        },
        {
          required: true,
          message: "Ingrese una descripción!",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name="tiempo_acti"
      label="Tiempo"
      rules={[
        {
          type: "time",
          message: "Ingrese un tiempo valido!",
          status: false,
        },
        {
          required: true,
          message: "Ingrese un tiempo de duracion!",
        }
      ]}
    >
      <TimePicker format={'HH:mm:ss'} />
    </Form.Item>

    <Form.Item
      name="cal_quemadas_acti"
      label="Calorias"
      rules={[
        {
          type: "double",
          message: "Ingrese un valor valido!",
        },
        {
          required: true,
          message: "Ingrese un valor calorico!",
        },
      ]}
    >
      <InputNumber min={1} max={1000} defaultValue={50} />
    </Form.Item>

    <Form.Item
      name="puntos_ot_acti"
      label="Puntos"
      rules={[
        {
          type: "integer",
          message: "Solo numeros enteros",
        },
        {
          required: true,
          message: "Ingrese una cantidad de puntos!",
        },
      ]}
    >
      <InputNumber min={1} max={100} defaultValue={5} />
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

export default InsertActivityForm;
