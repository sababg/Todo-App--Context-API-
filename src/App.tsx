import "./App.css";
import { FilterButtons } from "./components/filter/FilterButtons";
import { useTheme } from "./components/hook/useTheme";
import { ThemeToggleButton } from "./components/ThemeToggleButton/ThemeToggleButton";
import { TodoInput } from "./components/todo/TodoInput";
import { TodoList } from "./components/todo/TodoList";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`min-h-[50vh] flex flex-col max-w-150 mx-auto my-5 px-4 py-8 ${theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-gray-100"}`}
      >
        <header className="flex justify-between items-center mb-8 pb-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold">Todo App (Context API)</h1>
          <ThemeToggleButton />
        </header>

        <div className="max-w-xl mx-auto p-6">
          <TodoInput />
          <TodoList />
        </div>

        <div className="flex justify-center gap-2 mb-4">
          <FilterButtons />
        </div>
      </div>
    </>
  );
}

export default App;
