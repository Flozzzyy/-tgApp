import React, { useState, useRef } from "react";
import products from "../data";
import { Link } from "react-router-dom";
const Home = () => {
  const [items, setItems] = useState(products);
  const [activeFilter, setActiveFilter] = useState("Все");
  const [activeCategory, setActiveCategory] = useState("Все");
  const [search, setSearch] = useState("");
  const categoriesRef = useRef(null);

  // Фильтрация товаров
  const visible = items
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter((item) =>
      activeFilter === "Все" ? true : item.type === activeFilter
    )
    .filter((item) =>
      activeCategory === "Все" ? true : item.category === activeCategory
    );

  // Моковые данные для продавцов
  const sellers = [
    {
      name: "Эльшан А.",
      avatar:
        "https://ui-avatars.com/api/?name=Эльшан+А&background=4f46e5&color=fff&size=32",
      rating: 4.9,
    },
    {
      name: "Алексей М.",
      avatar:
        "https://ui-avatars.com/api/?name=Алексей+М&background=059669&color=fff&size=32",
      rating: 4.8,
    },
    {
      name: "Мария К.",
      avatar:
        "https://ui-avatars.com/api/?name=Мария+К&background=dc2626&color=fff&size=32",
      rating: 5.0,
    },
  ];

  // Форматирование даты
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day} ${month} в ${hours}:${minutes}`;
  };

  // Категории для фильтрации
  const categories = [
    "Все",
    "Телефоны",
    "Наушники",
    "Часы",
    "Планшеты",
    "Ноутбуки",
    "Компьютеры",
    "Аксессуары",
  ];

  // Фильтры состояния
  const filters = ["Все", "new", "by"];

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="max-w-[500px] mx-auto bg-zinc-900">
        {/* Верхняя панель статуса */}
        <div className="h-6 bg-zinc-900"></div>

        {/* Хедер */}
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

        <div className="pb-20">
          {/* Фильтры состояния товаров */}
          <div className="px-4 pt-4 pb-2">
            <div className="flex">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 flex-1 py-2 text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-zinc-700 text-white"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-750"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Поиск */}
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

          {/* Категории */}
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
                <Link to={`/item/${item.id}`}>
                  <div
                    key={item.id}
                    className="bg-zinc-800 rounded-lg overflow-hidden flex flex-col"
                  >
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

                    {/* Информация о товаре */}
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
      </div>

      {/* Нижняя навигация */}
      <nav className="fixed bottom-0 left-0 right-0 bg-zinc-900/80 backdrop-blur-lg border-t border-zinc-800">
        <div className="max-w-[500px] mx-auto flex items-center justify-around py-2">
          <button className="flex flex-col items-center gap-1 py-2 px-4">
            <svg
              className="w-6 h-6 text-cyan-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span className="text-xs text-cyan-400 font-medium">Маркет</span>
          </button>

          <button className="flex flex-col items-center gap-1 py-2 px-4">
            <svg
              className="w-6 h-6 text-zinc-400"
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
            <span className="text-xs text-zinc-400">Избранное</span>
          </button>

          <button className="flex flex-col items-center gap-1 py-2 px-4">
            <svg
              className="w-6 h-6 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-xs text-zinc-400">Профиль</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Home;
