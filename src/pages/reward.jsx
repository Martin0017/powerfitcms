import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_PATH_DB } from "../utils/config";
import {
  onFinish,
  onFinishUpdate,
  onOkDelete,
} from "../components/reward/onFinishButtons";
import { Form } from "antd";
import RewardColumn from "../data/reward_column";
import DataTable from "../components/table";
import ModalOpen from "../components/modal";
import InsertRewardForm from "../components/reward/insertRewardForm";
import UpdateRewardForm from "../components/reward/updateRewardForm";

const Reward = () => {
  const [rewards, setRewards] = useState([]);
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

  const setterDataSearch = (value) => setDataSearch(value);
  const setterModalInsert = (value) => setModalInsert(value);
  const setterModalUpdate = (value) => setModalUpdate(value);
  const setterModalDelete = (value) => setModalDelete(value);

  useEffect(() => {
    async function getAllRequest() {
      await axios.get(`${BASE_PATH_DB}/reward`).then((response) => {
        setRewards(response.data);
      });
    }
    getAllRequest();
  }, []);

  return (
    <div>
      <DataTable
        columns={RewardColumn(dataSearch)}
        rowSelection={rowSelection}
        setterDataSearch={setterDataSearch}
        data={rewards}
        resetValues={resetValues}
        setterModalInsert={setterModalInsert}
        disblableButton={disblableButton}
        setterModalUpdate={setterModalUpdate}
        setterModalDelete={setterModalDelete}
        SearchLabel={"Ingrese #, Apellido o Correo"}
      />

      <ModalOpen
        modalBegin={modalInsert}
        titleModal={"Inserte un Premio"}
        resetValues={resetValues}
        running={setterModalInsert}
        isDelete={false}
        form={<InsertRewardForm form={form} onFinish={onFinish} />}
      />

      <ModalOpen
        modalBegin={modalUpdate}
        titleModal={"Editar"}
        resetValues={resetValues}
        running={setterModalUpdate}
        isDelete={false}
        form={
          <UpdateRewardForm
            onFinishUpdate={onFinishUpdate}
            selectedRow={selectedRow}
            form2={form2}
          />
        }
      />

      <ModalOpen
        modalBegin={modalDelete}
        titleModal={"Desactivar Premio"}
        resetValues={resetValues}
        running={setterModalDelete}
        design={{ danger: true }}
        okDelete={onOkDelete}
        selectedRow={selectedRow}
        isDelete={true}
        form={
          <p>
            Esta a punto de desactivar el premio
            {` ${selectedRow.nombre_pre} `}
            con ID: {selectedRow.id_pre}{" "}
          </p>
        }
      />
    </div>
  );
};

export default Reward;
