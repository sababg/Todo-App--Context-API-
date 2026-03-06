import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AppContainer } from "./components/AppContainer.tsx";
import { FilterProvider } from "./components/context/FilterContextProvider.tsx";
import { ThemeProvider } from "./components/context/ThemeProvider.tsx";
import { TodoProvider } from "./components/context/TodoContextProvider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <TodoProvider>
        <FilterProvider>
          <AppContainer>
            <App />
          </AppContainer>
        </FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  </StrictMode>,
);
