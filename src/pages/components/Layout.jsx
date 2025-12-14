import { useLocation, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isItemPage = location.pathname.startsWith("/items/");

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="max-w-[500px] mx-auto bg-zinc-900">
        <header className="bg-zinc-900 px-4 py-3 flex items-center justify-between border-b border-zinc-800 sticky top-0 z-50">
          {isItemPage ? (
            <>
              <button
                onClick={() => navigate("/")}
                className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-full flex items-center gap-2 text-sm"
              >
                <svg
                  className="w-5 h-5"
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
                <span>Назад</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-cyan-400">Λ</span>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm">
                    Айден
                  </span>
                  <span className="text-cyan-400 text-xs">Маркет</span>
                </div>
              </div>

              <div className="w-20"></div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-cyan-400">Λ</span>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm">Айден</span>
                <span className="text-cyan-400 text-xs">Маркет</span>
              </div>
            </div>
          )}
        </header>
        {children}
      </div>
    </div>
  );
};
export default Layout;
