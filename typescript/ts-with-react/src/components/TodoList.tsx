import React from "react";
import { Todo } from "../models/Todo";
import SingleTodo from "./SingleTodo";

type TodoListProps = {
  todos: Todo[];
  deleteTodo: (todoId: number) => void;
  modifyTodo: (todoId: number, todoDesc: string) => void;
  markTodoCompleted: (todoId: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  todos,
  markTodoCompleted,
  deleteTodo,
  modifyTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          markTodoCompleted={markTodoCompleted}
          deleteTodo={deleteTodo}
          modifyTodo={modifyTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
