import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Button, List, Checkbox, Form, Modal, Input, Select } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
const { confirm } = Modal;

function TodoListPage() {
  const [todos, setTodos] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [form] = Form.useForm();

  const showDeleteConfirm = (id) => {
    confirm({
      title: id
        ? "Are you sure delete this task?"
        : "Are you sure delete all these selected task?",
      icon: <ExclamationCircleFilled />,
      content: "",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        if (id) setTodos([...todos.filter((todo) => todo.id !== id)]);
        else setTodos([...todos.filter((todo) => todo.selected === false)]);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
    setEditMode(false);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (editMode) {
        const updatedTodo = [...todos];
        const idx = todos.findIndex((todo) => todo.id === values.id);
        updatedTodo[idx]["progress"] = values.progress;
        updatedTodo[idx]["name"] = values.name;
        setTodos(updatedTodo);
      } else {
        setTodos([
          ...todos,
          {
            id: Date.now(),
            name: values.name,
            selected: false,
            progress: values.progress,
          },
        ]);
      }
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleEdit = (id, name, progress) => {
    form.setFieldsValue({ id, name, progress });
    setIsModalVisible(true);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    showDeleteConfirm(id);
  };

  const handleDeleteAll = () => {
    showDeleteConfirm();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleProgressChange = (value, id) => {
    if (id) {
      const updatedTodo = [...todos];
      updatedTodo[todos.findIndex((todo) => todo.id === id)]["progress"] =
        value;
      setTodos(updatedTodo);
    }
  };
  const { t } = useTranslation();

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Button
          style={{ marginRight: "20px" }}
          danger
          onClick={() => handleDeleteAll()}
        >
          {t("deleteAll")}
        </Button>
        <Button
          style={{ marginTop: "20px" }}
          type="primary"
          onClick={showModal}
        >
          {t("addNew")}
        </Button>
      </div>
      <Modal
        title={editMode ? `${t("editTodo")}` : `${t("addTodo")}`}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            progress: "TO DO",
            selected: false,
          }}
        >
          {editMode && (
            <Form.Item name="id" hidden>
              <Input />
            </Form.Item>
          )}
          <Form.Item
            name="name"
            label="name"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="progress"
            label="progress"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Select
              style={{ width: 120 }}
              options={[
                { value: "TO DO", label: "TO DO" },
                { value: "IN PROGRESS", label: "IN PROGRESS" },
                { value: "RESOLVED", label: "RESOLVED" },
                { value: "CLOSED", label: "CLOSED" },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
      <List
        bordered
        dataSource={todos}
        renderItem={(todo, index) => (
          <List.Item>
            <Checkbox
              checked={todo.selected}
              onChange={(e) => {
                const newTodos = [...todos];
                newTodos[index].selected = e.target.checked;
                setTodos(newTodos);
              }}
            >
              <div
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  width: "200px",
                }}
              >
                <label>{todo.name}</label>
              </div>
            </Checkbox>
            <Select
              value={todo.progress}
              style={{ width: 150, margin: "auto" }}
              onChange={(e) => handleProgressChange(e, todo.id)}
              options={[
                { value: "TO DO", label: "TO DO" },
                { value: "IN PROGRESS", label: "IN PROGRESS" },
                { value: "RESOLVED", label: "RESOLVED" },
                { value: "CLOSED", label: "CLOSED" },
              ]}
            />
            <div>
              <Button
                style={{ marginRight: "20px" }}
                type="primary"
                onClick={() => handleEdit(todo.id, todo.name, todo.progress)}
              >
                {t("edit")}
              </Button>
              <Button
                type="dashed"
                danger
                onClick={() => handleDelete(todo.id)}
              >
                {t("delete")}
              </Button>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}

export default TodoListPage;
