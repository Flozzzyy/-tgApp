import React from "react";
import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import BottomNav from "./components/BottomNav";
import { Link } from "react-router-dom";
import Header from "./components/Header";
const WishList = () => {
  const { wish, setWish } = useContext(ItemsContext);
  return (
    <div className="p-4">
      {wish.length === 0 ? (
        <div className="text-center text-zinc-400 text-lg py-8">
          Список желаемого пуст
        </div>
      ) : (
        <>
          <Header />
          <div className="grid grid-cols-2 gap-4">
            {wish.map((item) => (
              <Link to={`/items/${item.id}`}>
                <div
                  key={item.id}
                  className="bg-zinc-800 rounded-lg overflow-hidden flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/300x300?text=No+Image";
                      }}
                    />
                  </div>
                  <div className="p-3 flex flex-col flex-1">
                    <h2 className="text-base font-semibold text-white mb-1 line-clamp-2">
                      {item.title}
                    </h2>
                    <div className="text-lg font-bold text-white mb-1">
                      {item.price.toLocaleString("ru-RU")} ₽
                    </div>
                    <button
                      className="mt-2 text-xs text-red-400 hover:underline self-start"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setWish((prev) => prev.filter((w) => w.id !== item.id));
                      }}
                    >
                      Удалить из списка
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      <BottomNav />
    </div>
  );
};

export default WishList;
