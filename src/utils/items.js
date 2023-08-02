import React from "react";
import { NavLink } from "react-router-dom";
import {
  UserOutlined,
  TrophyOutlined,
  SmileOutlined,
  DribbbleOutlined,
  BookOutlined,
  AntDesignOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

function getItem(label, key, icon) {
  return {
    icon,
    key,
    label,
  };
}

const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};

const items = [
  getItem(
    "Usuarios",
    "1",
    <NavLink to={"/user"}>
      {" "}
      <UserOutlined />{" "}
    </NavLink>,
  ),
  getItem(
    "Premios",
    "2",
    <NavLink to={"/reward"}>
      {" "}
      <TrophyOutlined />{" "}
    </NavLink>,
  ),
  getItem(
    "Ganadores",
    "3",
    <NavLink to={"/winner"}>
      {" "}
      <SmileOutlined />{" "}
    </NavLink>,
  ),
  getItem(
    "Actividades",
    "4",
    <NavLink to={"/activity"}>
      {" "}
      <DribbbleOutlined />{" "}
    </NavLink>,
  ),
  getItem(
    "Registros",
    "5",
    <NavLink to={"/register"}>
      {" "}
      <BookOutlined />{" "}
    </NavLink>,
  ),
  getItem(
    "Acceso",
    "6",
    <NavLink to={"/admin"}>
      {" "}
      <AntDesignOutlined />{" "}
    </NavLink>,
  ),
  getItem(
    "",
    "5",
    <Button onClick={logout} type="primary" icon={<LogoutOutlined />} danger>
      {" "}
      Salir
    </Button>,
  ),
];

export default items;
