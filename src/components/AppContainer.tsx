import { useTheme } from "./hook/useTheme";

export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen w-full p-6 transition-colors
        ${
          theme === "light"
            ? "bg-gray-900 text-gray-100"
            : "bg-gray-100 text-gray-900"
        }`}
    >
      {children}
    </div>
  );
};
