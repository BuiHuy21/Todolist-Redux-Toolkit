import { Button, Col, Input, Row, Select, Tag, Typography } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { todoRemaining } from "../../redux/selector";
import Todo from "../Todo";
import { addTodo } from "./todoListSlice";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();
  const todoList = useSelector(todoRemaining);

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleSelectChange = (value) => {
    setPriority(value);
  };
  const handleAddTodo = () => {
    todoName
      ? dispatch(
          addTodo({
            id: v4(),
            name: todoName,
            completed: false,
            priority: priority,
          })
        )
      : alert("Please type your todoname");
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Typography.Paragraph
        style={{
          fontSize: 20,
          margin: " auto",
        }}
      >
        List Todo
      </Typography.Paragraph>
      <Col span={24} style={{ height: "calc(100% - 70px)", overflowY: "auto" }}>
        {todoList.length > 0 &&
          todoList.map((todo, index) => (
            <Todo
              key={todo.id}
              index={index}
              id={todo.id}
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
            />
          ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            onChange={handleSelectChange}
            value={priority}
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
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
