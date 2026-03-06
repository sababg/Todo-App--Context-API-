import { useFilter } from "../hook/useFilter";
import { useTheme } from "../hook/useTheme";
import { useTodos } from "../hook/useTodos";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useTodos();
  const { filter } = useFilter();
  const { theme } = useTheme();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    return (
      <p className="text-center text-gray-500 italic p-6">No todos found</p>
    );
  }

  return (
    <ul
      className={`rounded shadow mt-4 ${theme === "light" ? "bg-gray-800" : "bg-white"}`}
    >
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
