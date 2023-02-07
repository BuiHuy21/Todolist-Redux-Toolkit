import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

const { Title } = Typography;

function App() {
  return (
    <div
      style={{
        width: 600,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Typography.Paragraph style={{ textAlign: "center", fontSize: 20 }}>
        Todo App with Redux-toolkit
      </Typography.Paragraph>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
