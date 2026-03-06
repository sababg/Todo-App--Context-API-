import React from "react";
import { useTheme } from "../hook/useTheme";
import { useTodos } from "../hook/useTodos";

export const TodoInput = () => {
  const { addTodo } = useTodos();
  const { theme } = useTheme();

  const [text, setText] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) return;

    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4 gap-2">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={`grow p-3 border rounded text-base ${theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-700 text-gray-300"}`}
      />

      <button
        type="submit"
        className={`px-6 py-3 rounded hover:bg-blue-700 ${theme === "light" ? "bg-blue-500 text-white" : "bg-blue-700 text-white"}`}
      >
        Add Todo
      </button>
    </form>
  );
};
