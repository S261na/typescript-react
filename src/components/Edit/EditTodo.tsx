import React, { useState, ChangeEvent, MouseEvent } from "react";

interface IEditTodo {
  editedObj: { task: string; status: boolean; id: number } | null;
  saveChanges: (
    newObj: { task: string; status: boolean; id: number } | null
  ) => void;
}

const EditTodo: React.FC<IEditTodo> = ({ editedObj, saveChanges }) => {
  const [editedTodo, setEditedTodo] = useState<{
    task: string;
    status: boolean;
    id: number;
  } | null>(editedObj);

  function editTodo(e: ChangeEvent<HTMLInputElement>) {
    if (editedTodo) {
      setEditedTodo({
        ...editedTodo,
        task: e.target.value,
      });
    }
  }

  function handleSaveChanges(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    saveChanges(editedTodo);
  }

  return (
    <div>
      <h2>Edit todo</h2>
      <input type="text" onChange={editTodo} value={editedTodo?.task || ""} />
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
};

export default EditTodo;
