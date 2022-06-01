import React from "react";
import { useRef } from "react";

type InputFieldProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (todoDesc: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({ todo, setTodo, addTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const addEventHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (todo) {
      inputRef.current?.blur();
      addTodo(todo);
      setTodo("");
    }
  };
  return (
    <form onSubmit={addEventHandler} className="input">
      <input
        type="text"
        ref={inputRef}
        value={todo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTodo(e.target.value.trim());
        }}
        placeholder="Enter a Task"
        className="input__box"
      />
      <button className="input__submit"> Add Task</button>
    </form>
  );
};

export default InputField;
