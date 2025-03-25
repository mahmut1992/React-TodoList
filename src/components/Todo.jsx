import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, content } = todo;
  const [ediTable, setEdiTable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  };
  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    };
    onUpdateTodo(request);
    setEdiTable(false);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgray",
        padding: 10,
        marginTop: 10,
      }}
    >
      <div>
        {ediTable ? (
          <input
            style={{ width: 380 }}
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="todo-input"
            type="text"
          />
        ) : (
          content
        )}
      </div>
      <div>
        <IoIosRemoveCircle className="todo-icons" onClick={removeTodo} />
        {ediTable ? (
          <FaCheck onClick={updateTodo} className="todo-icons" />
        ) : (
          <FaEdit className="todo-icons" onClick={() => setEdiTable(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;
