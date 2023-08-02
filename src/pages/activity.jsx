import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_PATH_DB } from "../utils/config";
import { Form } from "antd";
import {
  onFinish,
  onFinishUpdate,
  onOkDelete,
} from "../components/activity/onFinishButtons";
import DataTable from "../components/table";
import InsertActivityForm from "../components/activity/insertActivityForm";
import UpdateActivityForm from "./../components/activity/updateActivityForm";
import ActivityColumn from "../data/activity_column";
import ModalOpen from "../components/modal";

const Activity = () => {
  const [activity, setactivity] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]);
  const [dataSearch, setDataSearch] = useState("");
  const [modalInsert, setModalInsert] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [disblableButton, setDisableButton] = useState(true);
  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  const resetValues = () => {
    setTimeout(form.resetFields(), 500);
    setTimeout(form2.resetFields(), 500);
  };

  const onSelectChange = (newSelectedRowKeys, data) => {
    setSelectedRow(data[0]);
    setDisableButton(false);
  };

  const rowSelection = {
    selectedRow,
    onChange: onSelectChange,
  };

  useEffect(() => {
    async function getAllRequest() {
      await axios.get(`${BASE_PATH_DB}/activity`).then((response) => {
        setactivity(response.data);
      });
    }
    getAllRequest();
  }, []);

  const setterDataSearch = (value) => setDataSearch(value);
  const setterModalInsert = (value) => setModalInsert(value);
  const setterModalUpdate = (value) => setModalUpdate(value);
  const setterModalDelete = (value) => setModalDelete(value);

  return (
    <div>
      <DataTable
        columns={ActivityColumn(dataSearch)}
        rowSelection={rowSelection}
        setterDataSearch={setterDataSearch}
        data={activity}
        resetValues={resetValues}
        setterModalInsert={setterModalInsert}
        disblableButton={disblableButton}
        setterModalUpdate={setterModalUpdate}
        setterModalDelete={setterModalDelete}
        SearchLabel={"Ingrese #, Nombre o cantidad de puntos"}
      />

      <ModalOpen
        modalBegin={modalInsert}
        titleModal={"Inserte un usuario"}
        resetValues={resetValues}
        running={setterModalInsert}
        isDelete={false}
        form={<InsertActivityForm form={form} onFinish={onFinish} />}
      />

      <ModalOpen
        modalBegin={modalUpdate}
        titleModal={"Editar"}
        resetValues={resetValues}
        running={setterModalUpdate}
        isDelete={false}
        form={
          <UpdateActivityForm
            onFinishUpdate={onFinishUpdate}
            selectedRow={selectedRow}
            form2={form2}
          />
        }
      />

      <ModalOpen
        modalBegin={modalDelete}
        titleModal={"Desactivar usuario"}
        resetValues={resetValues}
        running={setterModalDelete}
        design={{ danger: true }}
        okDelete={onOkDelete}
        selectedRow={selectedRow}
        isDelete={true}
        form={
          <p>
            Esta a punto de desactivar al usuario
            {` ${selectedRow.nombre_activity} `}
            {`${selectedRow.apellido_activity} `}
            con ID: {selectedRow.id_activity}{" "}
          </p>
        }
      />
    </div>
  );
};

export default Activity;

