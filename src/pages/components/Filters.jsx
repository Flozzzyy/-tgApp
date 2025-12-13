import React from "react";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
const Filters = () => {
  const {
    items,
    search,
    setSearch,
    categoriesRef,
    filters,
    formatDate,
    sellers,
    categories,
    activeFilter,
    setActiveFilter,
    activeCategory,
    setActiveCategory,
  } = useContext(ItemsContext);
  return (
    <div className="px-4 pt-4 pb-2">
      <div className="flex">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 flex-1 py-2 text-sm font-medium transition-colors ${
              activeFilter === filter
                ? "bg-zinc-700 text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-750"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
