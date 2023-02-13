import { DeleteOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Input, Row, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  editTodoByName,
  editTodoByPriority,
  toggleTodo,
} from "../TodoList/todoListSlice";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, priority, completed, id }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTodoName, setEditTodoName] = useState(name);
  const [checked, setChecked] = useState(completed);
  const [editTodoPrority, setEditTodoPriority] = useState(priority);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setEditTodoName(e.target.value);
  };
  const HandleSave = () => {
    if (editTodoName) {
      dispatch(editTodoByName({ id: id, name: editTodoName }));
    }
    dispatch(editTodoByPriority({ id: id, priority: editTodoPrority }));

    setIsEdit(false);
  };

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleTodo(id));
  };
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };
  const HandleEdit = () => {
    setIsEdit(true);
  };
  const handleSelectChange = (value) => {
    setEditTodoPriority(value);
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.7, textDecoration: "line-through" } : {}),
      }}
    >
      <Col offse={12}>
        <Checkbox
          checked={checked}
          onChange={toggleCheckbox}
          style={{ minWidth: 200 }}
        >
          {isEdit ? (
            <Input
              value={editTodoName}
              style={{
                outline: "none",
                border: "none",
                borderBottom: "1px solid green",
              }}
              onChange={handleInputChange}
            />
          ) : (
            editTodoName
          )}
        </Checkbox>
        {isEdit ? (
          <Select
            defaultValue="Medium"
            onChange={handleSelectChange}
            value={editTodoPrority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
        ) : (
          <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
            {priority}
          </Tag>
        )}
      </Col>
      <Col>
        {isEdit ? (
          <Button
            style={{ marginRight: "10px" }}
            type="primary"
            onClick={HandleSave}
          >
            {/* Save */}
            <SaveOutlined />
          </Button>
        ) : (
          <Button
            style={{ marginRight: "10px" }}
            type="primary"
            onClick={HandleEdit}
          >
            {/* Edit */}
            <EditOutlined />
          </Button>
        )}

        <Button danger onClick={handleDeleteTodo}>
          {/* Delete */}
          <DeleteOutlined />
        </Button>
      </Col>
    </Row>
  );
}
