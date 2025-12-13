import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Categories from "./components/Categories";
import Filters from "./components/Filters";
import BottomNav from "./components/BottomNav";
import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import Map from "./components/Map";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { items, search, sellers, activeFilter, activeCategory } =
    useContext(ItemsContext);

  // Фильтрация товаров
  const visible = items
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter((item) =>
      activeFilter === "Все" ? true : item.type === activeFilter
    )
    .filter((item) =>
      activeCategory === "Все" ? true : item.category === activeCategory
    );

  // Симуляция загрузки товаров
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [search, activeFilter, activeCategory]);

  return (
    <>
      {/* Верхняя панель статуса */}
      <div className="h-6 bg-zinc-900"></div>

      <section>
        <div className="pb-20">
          <Search />

          <div className="flex flex-col gap-2">
            <Filters />
            <Categories />
          </div>
          {/* Заголовок секции */}
          <div className="px-4 py-3">
            <h2 className="text-xl font-semibold text-white">
              Специально для тебя {visible.length}
            </h2>
          </div>

          {/* Сетка товаров */}
          <div className="grid grid-cols-2 gap-3 px-4 pb-4">
            {isLoading
              ? // Skeleton загрузка
                Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={`skeleton-${index}`}
                    className="bg-zinc-800 rounded-xl overflow-hidden flex flex-col h-full skeleton"
                    style={{ minHeight: "320px" }}
                  >
                    <div className="relative shrink-0 h-48 w-full bg-zinc-700"></div>
                    <div className="p-3 flex flex-col flex-1 min-h-0 space-y-2">
                      <div className="h-4 bg-zinc-700 rounded w-3/4"></div>
                      <div className="h-6 bg-zinc-700 rounded w-1/2"></div>
                      <div className="h-3 bg-zinc-700 rounded w-2/3"></div>
                    </div>
                  </div>
                ))
              : visible.map((item, index) => {
                  const seller = sellers[index % sellers.length];

                  return (
                    <Map
                      key={item.id}
                      item={item}
                      index={index}
                      seller={seller}
                    />
                  );
                })}
          </div>
        </div>
      </section>
      <BottomNav />
    </>
  );
};

export default Home;
