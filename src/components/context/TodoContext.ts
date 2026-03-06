import React from "react";
import type { TodoContextType } from "../types/types";

export const TodoContext = React.createContext<TodoContextType | undefined>(
  undefined,
);
