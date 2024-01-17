import React from "react";
import { Col, Row } from "antd";
import { Button, Form, Input, notification } from "antd";
import { LockOutlined, UserOutlined, BlockOutlined } from "@ant-design/icons";
import axios from "axios";
import "../css/sign_in.css";
import { BASE_PATH_OAUTH } from "../utils/config";

function SignIn() {
  const onFinish = async (values) => {
    const { email, password } = values;

    const loginObject = {};
    loginObject.correo_admin = email;
    loginObject.contrasena_admin = password;

    try {
      const response = await axios.post(
        `${BASE_PATH_OAUTH}/loginauth`,
        loginObject,
      );

      if (response.data) {
        const { data } = await axios.post(
          `${BASE_PATH_OAUTH}/login`,
          response.data,
        );
        localStorage.setItem("token", data.access_token);
        window.location.href = "/user";
      } else {
        notification.success({
          message: "Crecenciales incorrectas",
          description: `Intente nuevamente`,
          icon: <BlockOutlined style={{ color: "#ED6019" }} />,
        });
      }
      //setLoggedIn(true);
    } catch (error) {
      notification.success({
        message: "Sistema en mantenimiento",
        description: `Contacte con los administradores del servidor`,
        icon: <BlockOutlined style={{ color: "#ED6019" }} />,
      });
      // Manejo de errores de inicio de sesión
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="sign-page">
      <Row className="sign-r1"></Row>
      <Row className="sign-container">
        <Col span={2}> </Col>
        <Col span={10} className="sign-image-box"></Col>
        <Col span={10} className="sign-in-form">
          <Form
            name="basic"
            labelCol={{
              span: 16,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 800,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="only-form"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese su email!",
                },
                {
                  type: "email",
                  message: "Ingrese un correo valido",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Correo"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: false,
                  message: "Por favor ingrese su contraseña!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Contraseña"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Ingresar
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={2}> </Col>
      </Row>
      <Row className="sign-r2"></Row>
    </div>
  );
}
export default SignIn;
