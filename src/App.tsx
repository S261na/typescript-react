import React, { useState } from "react";
import AddTodo from "./components/Addtodo/AddTodo.tsx";
import TodoList from "./components/Todolist/TodoList.tsx";
import EditTodo from "./components/Edit/EditTodo.tsx";

interface ITodo {
  task: string;
  status: boolean;
  id: number;
}

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [editedObj, setEditedObj] = useState<ITodo | null | any>(null); // Updated type here

  function handleTask(newObj: ITodo) {
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
  }

  function deleteTask(id: number) {
    let delTodos = todos.filter((task) => task.id !== id);
    setTodos(delTodos);
  }

  function getEditedObj(id: number) {
    let oneObj = todos.find((item) => item.id === id);
    setEditedObj(oneObj);
  }

  function saveChanges(newObj: ITodo | null) {
    let newTodos = [...todos];
    newTodos = newTodos.map((item) => {
      if (item.id === newObj!.id) {
        return newObj!;
      } else {
        return item;
      }
    });
    setTodos(newTodos);
    setEditedObj(null);
  }

  return (
    <div>
      <AddTodo handleTask={handleTask} />
      <TodoList
        deleteTask={deleteTask}
        todos={todos}
        getEditedObj={getEditedObj}
      />
      {editedObj ? (
        <EditTodo editedObj={editedObj} saveChanges={saveChanges} />
      ) : null}
    </div>
  );
};

export default App;
