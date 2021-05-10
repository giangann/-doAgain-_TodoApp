import { Checkbox } from "antd";
import Title from "antd/lib/typography/Title";
import classes from "./TodoList.module.css";

function TodoList() {
  return (
    <div className = {classes.todoListContainer}>
      <Title level ={1}>Danh sách Task: </Title>
      <div className = {classes.todoContainer}>
        <Checkbox> Mission1</Checkbox>
      </div>
      <div className = {classes.todoContainer}>
        <Checkbox> Mission1</Checkbox>
      </div>
      <div className = {classes.todoContainer}>
        <Checkbox> Mission1</Checkbox>
      </div>

    </div>
  );
}

export default TodoList;