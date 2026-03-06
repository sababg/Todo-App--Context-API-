import { useFilter } from "../hook/useFilter";

export const FilterButtons = () => {
  const { filter, setFilter } = useFilter();

  const filters = ["all", "active", "completed"] as const;

  return (
    <div className="flex justify-center gap-2 mb-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 border rounded cursor-pointer
            ${
              filter === f
                ? "bg-blue-500 text-white font-bold"
                : "bg-gray-100 text-black"
            }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};
