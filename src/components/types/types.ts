export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string | number) => void;
  deleteTodo: (id: string | number) => void;
  editTodo: (id: string | number, newText: string) => void;
  clearCompleted: () => void;
};

export type Filter = "all" | "active" | "completed";

export type FilterContextType = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
