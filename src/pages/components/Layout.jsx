const Layout = ({ children }) => (
  <div className="min-h-screen bg-zinc-900 text-white">
    <div className="max-w-[500px] mx-auto bg-zinc-900">
      <header className="bg-zinc-900 px-4 py-3 flex items-center justify-center border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-cyan-400">Λ</span>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-sm">Айден</span>
            <span className="text-cyan-400 text-xs">Маркет</span>
          </div>
        </div>
      </header>
      {children}
    </div>
  </div>
);
export default Layout;
