import React, { useState } from "react";
import InputField from "./components/InputField";
import "./App.css";
import { Todo } from "./models/Todo";
import TodoList from "./components/TodoList";

// declaring a functional component
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todoDesc: string) => {
    setTodos((currTodos) => {
      const newTodo: Todo = {
        id: Date.now(), // curr Date will be unique.
        description: todoDesc,
        isCompleted: false,
      };

      const newTodos = [...currTodos, newTodo];

      return newTodos;
    });
  };

  const deleteTodo = (todoId: number): void => {
    setTodos((currTodos) => {
      return currTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const modifyTodo = (todoId: number, todoDesc: string): void => {
    setTodos((currTodos) => {
      return currTodos.map((todo) => {
        const currTodo = { ...todo };
        if (currTodo.id === todoId) {
          currTodo.description = todoDesc;
        }
        return currTodo;
      });
    });
  };

  const markTodoCompleted = (todoId: number): void => {
    setTodos((currTodos) => {
      return currTodos.map((todo) => {
        const currTodo = { ...todo };
        if (currTodo.id === todoId) {
          currTodo.isCompleted = true;
        }
        return currTodo;
      });
    });
  };

  return (
    <div className="App">
      <header className="heading">Task Manager</header>
      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        modifyTodo={modifyTodo}
        markTodoCompleted={markTodoCompleted}
      />
    </div>
  );
};

export default App;
