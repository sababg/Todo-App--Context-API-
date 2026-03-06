import { useTheme } from "../hook/useTheme";

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded font-bold border transition
        ${
          theme === "light"
            ? "bg-yellow-400 text-gray-900 border-yellow-500"
            : "bg-gray-800 text-white border-gray-700"
        }`}
    >
      {theme === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"}
    </button>
  );
};
