import React, { useState, useRef, useEffect } from "react";
import { Todo } from "../models/Todo";

type SingleTodoProps = {
  todo: Todo;
  deleteTodo: (todoId: number) => void;
  modifyTodo: (todoId: number, todoDesc: string) => void;
  markTodoCompleted: (todoId: number) => void;
};

const SingleTodo: React.FC<SingleTodoProps> = ({
  todo,
  deleteTodo,
  modifyTodo,
  markTodoCompleted,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.description);

  useEffect(() => {
    if (edit) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    modifyTodo(id, editTodo);
    setEdit(false);
  };

  return (
    <li>
      <form
        className={"todos__single"}
        onSubmit={(e) => handleEdit(e, todo.id)}
      >
        {edit ? (
          <input
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todos__single--text"
            ref={inputRef}
          />
        ) : todo.isCompleted ? (
          <s className="todos__single--text">{todo.description}</s>
        ) : (
          <span className="todos__single--text">{todo.description}</span>
        )}
        <div>
          <span
            className="icon"
            onClick={() => {
              if (!edit && !todo.isCompleted) {
                setEdit(true);
              }
            }}
          >
            Edit
          </span>
          <span className="icon" onClick={() => deleteTodo(todo.id)}>
            Delete
          </span>
          <span className="icon" onClick={() => markTodoCompleted(todo.id)}>
            Done
          </span>
        </div>
      </form>
    </li>
  );
};

export default SingleTodo;
