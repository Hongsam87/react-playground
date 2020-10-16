import React from "react";
import "./TodoItem.css";

interface TodoItemProps {
  text: string;
  done: boolean;
  onToggle(): void;
  onRemove(): void;
}

// React.SFC -> React.FC

function TodoItem({ text, done, onToggle, onRemove }: TodoItemProps) {
  return (
    <li className={`TodoItem ${done ? "done" : ""}`}>
      <b onClick={onToggle} className="text">
        {text}
      </b>
      <button className="remove" onClick={onRemove}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
