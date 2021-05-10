import { Input } from "antd";
import {useState} from "react";

function TaskInput() {
  const[status, setStatus] = useState(false)

  const handlePressEnter = () => {
    setStatus(!status)
    console.log(status)
  };

  return <Input placeholder = "Nhập để thêm danh sách" onPressEnter = {handlePressEnter}/>
}

export default TaskInput;