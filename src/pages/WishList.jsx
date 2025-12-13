import React from "react";
import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import BottomNav from "./components/BottomNav";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../hooks/useWishlist";
import Map from "./components/Map";
const WishList = () => {
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } =
    useWishlist();
  const [loadedImages, setLoadedImages] = useState({});

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
    <div className="flex flex-col gap-3 pb-30">
      {wishlist.length === 0 ? (
        <div className="text-center text-zinc-400 text-lg py-8">
          Список желаемого пуст
        </div>
      ) : (
        <>
        <header className="text-center text-2xl">
          Список желаемого
        </header>
          <div className="grid grid-cols-2 gap-4">
            {wishlist.map((item, index) => {
              const seller = sellers[index % sellers.length];
              const imageLoaded = loadedImages[item.id];
              return (
                <Map
                  item={item}
                  index={index}
                  seller={seller}
                  imageLoaded={imageLoaded}
                />
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
