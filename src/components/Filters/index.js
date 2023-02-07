import { Col, Input, Radio, Row, Select, Tag, Typography } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  priorityFilterChange,
  searchFilterChang,
  statusFilterChange
} from "./filterSlice";

const { Search } = Input;

export default function Filters() {
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState([]);
  const dispatch = useDispatch();
  const handleFilterStatus = (e) => {
    setStatus(e.target.value);
    dispatch(statusFilterChange(e.target.value));
  };
  const [search, setSearch] = useState("");
  const searchFilterChange = (e) => {
    setSearch(e.target.value);
    dispatch(searchFilterChang(e.target.value));
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
    dispatch(priorityFilterChange(value));
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph style={{ marginBottom: 3 }}>
          Search By name Todo
        </Typography.Paragraph>
        <Search
          placeholder="Enter your search text ..."
          value={search}
          onChange={searchFilterChange}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ marginBottom: 3, marginTop: 8 }}>
          Filter By Status Todo
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleFilterStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ marginBottom: 3, marginTop: 8 }}>
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please multiple select"
          style={{ width: "100%" }}
          value={priority}
          onChange={handlePriorityChange}
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
      </Col>
    </Row>
  );
}
