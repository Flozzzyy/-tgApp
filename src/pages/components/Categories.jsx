import React from "react";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
const Categories = () => {
  const { categoriesRef, categories, activeCategory, setActiveCategory } =
    useContext(ItemsContext);
  return (
    <div className="px-4 py-2 relative">
      <button
        onClick={() =>
          categoriesRef.current?.scrollBy({
            left: -200,
            behavior: "smooth",
          })
        }
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-zinc-800 hover:bg-zinc-700 w-8 h-8 rounded-full flex items-center justify-center shrink-0"
      >
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div
        ref={categoriesRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 scroll-smooth px-10"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
              activeCategory === category
                ? "bg-white text-zinc-900 shadow-md"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <button
        onClick={() =>
          categoriesRef.current?.scrollBy({
            left: 200,
            behavior: "smooth",
          })
        }
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-zinc-800 hover:bg-zinc-700 w-8 h-8 rounded-full flex items-center justify-center shrink-0"
      >
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Categories;
