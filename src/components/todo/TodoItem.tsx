import React from "react";
import { useTheme } from "../hook/useTheme";
import { useTodos } from "../hook/useTodos";
import type { Todo } from "../types/types";

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const { theme } = useTheme();

  const [isEditing, setIsEditing] = React.useState(false);
  const [newText, setNewText] = React.useState(todo.text);

  const handleEdit = () => {
    if (!newText.trim()) return;
    editTodo(todo.id, newText);
    setIsEditing((prev) => !prev);
  };

  return (
    <li className="flex items-center p-3 border-b gap-3">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
          className={`grow border p-1 rounded ${theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-700 text-gray-300"}`}
        />
      ) : (
        <span
          className={`grow cursor-pointer text-black ${
            todo.completed ? "line-through text-gray-500" : ""
          } ${theme === "light" ? "text-gray-300" : "text-gray-900"}`}
          onDoubleClick={() => setIsEditing((prev) => !prev)}
        >
          {todo.text}
        </span>
      )}

      <button
        onClick={() => setIsEditing((prev) => !prev)}
        className={`text-gray-500 hover:text-blue-500 ${theme === "light" ? "text-gray-500" : "text-gray-300"}`}
      >
        ✏️
      </button>

      <button
        onClick={() => deleteTodo(todo.id)}
        className={`text-gray-500 hover:text-red-500 ${theme === "light" ? "text-gray-500" : "text-gray-300"}`}
      >
        🗑️
      </button>
    </li>
  );
};
