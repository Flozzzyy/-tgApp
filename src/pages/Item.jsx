import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import WishButton from "./components/WishButton";
const Item = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const { items, formatDate, sellers } = useContext(ItemsContext);

  // Локальные данные для демонстрации
  const reviews = [
    {
      id: 1,
      user: "Алексей М.",
      avatar:
        "https://ui-avatars.com/api/?name=Алексей+М&background=059669&color=fff&size=40",
      rating: 5,
      date: "2 дня назад",
      text: "Отличный товар! Всё работает как надо, доставка быстрая.",
    },
    {
      id: 2,
      user: "Мария К.",
      avatar:
        "https://ui-avatars.com/api/?name=Мария+К&background=dc2626&color=fff&size=40",
      rating: 4,
      date: "5 дней назад",
      text: "Хорошее качество, рекомендую!",
    },
  ];

  // Дополнительные изображения (можно добавить в данные товара)

  const item = items.find((i) => i.id === Number(id));
  const additionalImages = [item.image, item.image, item.image];
  if (!item) {
    return (
      <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg"
          >
            Вернуться в магазин
          </button>
        </div>
      </div>
    );
  }

  const seller = sellers[Math.floor(Math.random() * sellers.length)] || {
    avatar: "https://via.placeholder.com/50",
    name: "Продавец",
    rating: 4.5,
    reviews: 12,
    items: 42,
    joined: "2023",
  };

  return (
    <>
      {/* Верхняя панель статуса */}
      <div className="h-6 bg-zinc-900"></div>

      {/* Хедер */}
      <header className="bg-zinc-900 px-4 py-3 flex items-center justify-between border-b border-zinc-800 sticky top-0 z-50">
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
            <span className="text-white font-semibold text-sm">Айден</span>
            <span className="text-cyan-400 text-xs">Маркет</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="w-8 h-8 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button className="w-8 h-8 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center">
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className="pb-24">
        {/* Галерея изображений */}
        <div className="relative">
          <div className="h-[400px] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/500x500?text=No+Image";
              }}
            />
          </div>

          {/* Индикатор изображений */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {additionalImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedImage === index ? "bg-white w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Кнопка избранного */}
          <WishButton item={item} />

          {/* Миниатюры */}
          <div className="absolute bottom-20 left-4 right-4 flex gap-2 overflow-x-auto pb-2">
            {additionalImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                  selectedImage === index
                    ? "border-cyan-400"
                    : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={`Изображение ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Информация о товаре */}
        <div className="p-4">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs rounded">
                {item.category}
              </span>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                {item.type || "new"}
              </span>
              <span className="text-zinc-500 text-sm ml-auto">
                {formatDate ? formatDate(item.createdAt) : item.createdAt}
              </span>
            </div>

            <h1 className="text-2xl font-bold text-white mb-2">{item.title}</h1>

            <div className="flex items-center gap-1 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-zinc-700"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-zinc-400 text-sm">4.0 (12 отзывов)</span>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-white">
                {item.price.toLocaleString("ru-RU")} ₽
              </span>
              {item.oldPrice && (
                <span className="text-lg text-zinc-500 line-through ml-2">
                  {item.oldPrice.toLocaleString("ru-RU")} ₽
                </span>
              )}
            </div>
          </div>

          {/* Описание */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white mb-3">Описание</h2>
            <p className="text-zinc-300 leading-relaxed">
              {item.description ||
                "Отличный товар в хорошем состоянии. Полностью рабочий, без видимых повреждений. Комплектация стандартная. Товар проверен перед отправкой."}
            </p>
          </div>

          {/* Характеристики */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white mb-3">
              Характеристики
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b border-zinc-800">
                <span className="text-zinc-400">Состояние</span>
                <span className="text-white">Отличное</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-800">
                <span className="text-zinc-400">Гарантия</span>
                <span className="text-white">14 дней</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-800">
                <span className="text-zinc-400">Доставка</span>
                <span className="text-white">1-3 дня</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-zinc-400">В наличии</span>
                <span className="text-green-400">2 шт</span>
              </div>
            </div>
          </div>

          {/* Информация о продавце */}
          <div className="bg-zinc-800 rounded-xl p-4 mb-6">
            <h2 className="text-lg font-semibold text-white mb-4">Продавец</h2>
            <div className="flex items-start gap-3">
              <img
                src={seller.avatar}
                alt={seller.name}
                className="w-14 h-14 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white">{seller.name}</h3>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="text-white font-medium">
                      {seller.rating}
                    </span>
                    <span className="text-zinc-400 text-sm">
                      ({seller.reviews})
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-zinc-400">Товары:</div>
                  <div className="text-white">{seller.items}</div>
                  <div className="text-zinc-400">На сайте:</div>
                  <div className="text-white">с {seller.joined}</div>
                </div>
                <button className="mt-4 w-full bg-zinc-700 hover:bg-zinc-600 text-white py-2 rounded-lg text-sm transition-colors">
                  Перейти в магазин
                </button>
              </div>
            </div>
          </div>

          {/* Отзывы */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Отзывы</h2>
              <button className="text-cyan-400 text-sm">Все отзывы</button>
            </div>

            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="bg-zinc-800 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={review.avatar}
                      alt={review.user}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-white">
                          {review.user}
                        </h3>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-zinc-700"
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-zinc-400 text-sm">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-zinc-300">{review.text}</p>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 border border-zinc-700 text-zinc-300 hover:bg-zinc-800 py-3 rounded-lg text-sm transition-colors">
              Оставить отзыв
            </button>
          </div>
        </div>
      </div>

      {/* Нижняя панель покупки */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[500px] mx-auto bg-zinc-900/95 backdrop-blur-lg border-t border-zinc-800">
        <div className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center border border-zinc-700 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 text-zinc-400 hover:text-white"
              >
                −
              </button>
              <span className="w-10 text-center text-white">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 text-zinc-400 hover:text-white"
              >
                +
              </button>
            </div>
            <div className="flex-1">
              <div className="text-lg font-bold text-white">
                {(item.price * quantity).toLocaleString("ru-RU")} ₽
              </div>
              <div className="text-zinc-400 text-sm">
                {quantity} × {item.price.toLocaleString("ru-RU")} ₽
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-lg font-medium transition-colors">
              В корзину
            </button>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-medium transition-colors">
              Купить сейчас
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
