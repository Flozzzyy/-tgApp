import React from "react";
import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import BottomNav from "./components/BottomNav";
import { useWishlist } from "../hooks/useWishlist";
import Map from "./components/Map";

const WishList = () => {
  const { wishlist } = useWishlist();
  const { sellers } = useContext(ItemsContext);

  return (
    <div className="flex flex-col gap-3 pb-24 px-4">
      {wishlist.length === 0 ? (
        <div className="text-center text-zinc-400 text-lg py-8">
          Список желаемого пуст
        </div>
      ) : (
        <>
          <header className="text-center text-2xl font-semibold text-white py-4">
            Список желаемого
          </header>
          <div className="grid grid-cols-2 gap-4">
            {wishlist.map((item, index) => {
              // Фиксируем продавца на основе ID товара, чтобы он не менялся
              const seller = sellers[item.id % sellers.length] || sellers[0];
              return (
                <Map key={item.id} item={item} index={index} seller={seller} />
              );
            })}
          </div>
        </>
      )}

      <BottomNav />
    </div>
  );
};

export default WishList;
