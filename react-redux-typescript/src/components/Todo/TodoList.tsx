import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../../modules/todos";

interface TodoListProps {
  input: string;
  todos: Todo[];
  onCreate(): void;
  onRemove(id: number): void;
  onToggle(id: number): void;
  onChange(e: any): void;
}

function TodoList({
  input,
  todos,
  onCreate,
  onChange,
  onRemove,
  onToggle,
}: TodoListProps) {
  const todoItemList = todos.map((todo) =>
    todo ? (
      <TodoItem
        key={todo.id}
        text={todo.text}
        done={todo.done}
        onToggle={() => {
          onToggle(todo.id);
        }}
        onRemove={() => {
          onRemove(todo.id);
        }}
      />
    ) : null
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate();
  };

  return (
    <div>
      <h1>TODO</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={onChange} value={input} />
        <button type="submit">add</button>
      </form>
      <ul>{todoItemList}</ul>
    </div>
  );
}

export default TodoList;
