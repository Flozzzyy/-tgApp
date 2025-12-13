import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import Categories from "./components/Categories";
import Filters from "./components/Filters";
import BottomNav from "./components/BottomNav";
import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
const Home = () => {
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

  // Фильтрация товаров
  const visible = items
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter((item) =>
      activeFilter === "Все" ? true : item.type === activeFilter
    )
    .filter((item) =>
      activeCategory === "Все" ? true : item.category === activeCategory
    );

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="max-w-[500px] mx-auto bg-zinc-900">
        {/* Верхняя панель статуса */}
        <div className="h-6 bg-zinc-900"></div>

        <Header />

        <div className="pb-20">
          <Search />

          <Categories />
          <Filters />
          {/* Заголовок секции */}
          <div className="px-4 py-3">
            <h2 className="text-xl font-semibold text-white">
              Специально для тебя {visible.length}
            </h2>
          </div>

          {/* Сетка товаров */}
          <div className="grid grid-cols-2 gap-3 px-4 pb-4">
            {visible.map((item, index) => {
              const seller = sellers[index % sellers.length];

              return (
                <Link to={`/item/${item.id}`} key={item.id}>
                  <div className="bg-zinc-800 rounded-lg overflow-hidden flex flex-col">
                    {/* Изображение с иконкой сердца */}
                    <div className="relative shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/300x300?text=No+Image";
                        }}
                      />
                      <button className="absolute top-2 right-2 w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="p-3 flex flex-col flex-1">
                      <h3 className="text-sm font-medium text-white mb-2 line-clamp-2">
                        {item.title}
                      </h3>

                      <div className="mb-2">
                        <span className="text-lg font-bold text-white">
                          {item.price.toLocaleString("ru-RU")} ₽
                        </span>
                      </div>

                      {/* Информация о продавце */}

                      <div className="flex items-center gap-2 mb-1">
                        <img
                          src={seller.avatar}
                          alt={seller.name}
                          className="w-5 h-5 rounded-full"
                        />
                        <span className="text-xs text-zinc-300">
                          {seller.name}
                        </span>
                      </div>

                      {/* Рейтинг и дата */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-3 h-3 text-yellow-400 fill-yellow-400"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <span className="text-xs text-white font-medium">
                            {seller.rating}
                          </span>
                        </div>
                        <span className="text-xs text-zinc-500">
                          {formatDate(item.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <BottomNav />
      </div>
    </div>
  );
};

export default Home;
