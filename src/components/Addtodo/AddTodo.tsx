import React, { useState, ChangeEvent, MouseEvent } from "react";

interface IAddTodo {
  handleTask: (newTask: ITodo) => void;
}

interface ITodo {
  task: string;
  status: boolean;
  id: number;
}

const AddTodo: React.FC<IAddTodo> = ({ handleTask }) => {
  const [task, setTask] = useState<string>("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!task.trim()) {
      alert("Input is empty");
      return;
    }
    const newTask: ITodo = {
      task: task,
      status: false,
      id: Date.now(),
    };
    setTask("");
    handleTask(newTask);
  };

  return (
    <div>
      <h2>ADD TODO Component</h2>
      <input type="text" id="" onChange={handleInput} value={task} />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default AddTodo;
