import { Form, Input, InputNumber, Button } from "antd";
import React from "react";
import { formItemLayout, tailFormItemLayout } from "../../utils/form_layout";
const UpdateRewardForm = (props) => {
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
        initialValue={selectedRow.nombre_pre}
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
        initialValue={selectedRow.descripcion_pre}
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
        initialValue={selectedRow.puntos_rq_pre}
        rules={[
          {
            required: true,
            message: "Ingrrese una cantidad de puntos(50-10000)!",
          },
        ]}
      >
        <InputNumber min={50} max={10000} defaultValue={50} />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Actualizar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateRewardForm;
