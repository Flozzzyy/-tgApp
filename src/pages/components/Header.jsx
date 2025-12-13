import React from "react";

const Header = () => {
  return (
    <header className="bg-zinc-900 px-4 py-3 flex items-center justify-between border-b border-zinc-800">
      <button className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-full flex items-center gap-2 text-sm">
        <span className="text-xl">×</span>
        <span>Закрыть</span>
      </button>

      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-cyan-400">Λ</span>
        <div className="flex flex-col">
          <span className="text-white font-semibold text-sm">Айден</span>
          <span className="text-cyan-400 text-xs">Маркет</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="w-8 h-8 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <button className="w-8 h-8 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
