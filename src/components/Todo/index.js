import { Row, Tag, Checkbox, Button, Col, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../TodoList/todoListSlice";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, priority, completed, id, index }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTodoName, setEditTodoName] = useState(name);
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setEditTodoName(e.target.value);
  };
  const HandleSave = () => {
    if (editTodoName) {
      dispatch(editTodo(editTodoName, id));
    }
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

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Col offse={12}>
        <Checkbox checked={checked} onChange={toggleCheckbox}>
          {isEdit ? (
            <Input value={editTodoName} onChange={handleInputChange} />
          ) : (
            editTodoName
          )}
        </Checkbox>
        <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
          {priority}
        </Tag>
      </Col>
      <Col>
        {isEdit ? (
          <Button
            style={{ marginRight: "10px" }}
            type="primary"
            onClick={HandleSave}
          >
            Save
          </Button>
        ) : (
          <Button
            style={{ marginRight: "10px" }}
            type="primary"
            onClick={HandleEdit}
          >
            Edit
          </Button>
        )}

        <Button danger onClick={handleDeleteTodo}>
          Delete
        </Button>
      </Col>
    </Row>
  );
}
