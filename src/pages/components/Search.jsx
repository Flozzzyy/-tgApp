import React from "react";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
const Search = () => {
  const { search, setSearch } = useContext(ItemsContext);
  return (
    <div className="px-4 py-2">
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-5 h-5 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск"
          className="w-full bg-zinc-800 text-white placeholder-zinc-400 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>
    </div>
  );
};

export default Search;
