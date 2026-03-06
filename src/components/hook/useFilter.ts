import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used inside FilterProvider");
  }
  return context;
};
