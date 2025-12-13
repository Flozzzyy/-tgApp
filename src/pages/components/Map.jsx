import React, { useState } from "react";
import { Link } from "react-router-dom";
import WishButton from "./WishButton";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";

const Map = ({ item, seller, index }) => {
  const [loaded, setLoaded] = useState(false);
  const { formatDate } = useContext(ItemsContext);

  // функция обработки загрузки
  const handleImageLoad = () => setLoaded(true);

  // обработка ошибки загрузки изображения
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
    setLoaded(true);
  };
  return (
    <Link
      to={`/items/${item.id}`}
      className="h-full"
      style={{
        animationDelay: `${index * 0.05}s`,
      }}
    >
      <div
        className={`bg-zinc-800 rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1 hover:bg-zinc-700/50 border border-zinc-700/50 hover:border-cyan-500/30 card-enter`}
        style={{
          animationDelay: `${index * 0.05}s`,
        }}
      >
        {/* Изображение с иконкой сердца */}
        <div className="relative shrink-0 h-48 w-full overflow-hidden bg-zinc-900">
          {!loaded && <div className="absolute inset-0 skeleton"></div>}
          <img
            src={item.image}
            alt={item.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              loaded ? "image-loaded" : "image-load"
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          <div className="absolute top-2 right-2">
            <WishButton item={item} />
          </div>
          {/* Градиентный overlay для лучшей читаемости */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent pointer-events-none"></div>
        </div>

        <div className="p-3 flex flex-col flex-1 min-h-0">
          <h3 className="text-sm font-medium text-white mb-2 line-clamp-2 leading-snug">
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
              className="w-5 h-5 rounded-full ring-1 ring-zinc-600"
            />
            <span className="text-xs text-zinc-300 truncate">
              {seller.name}
            </span>
          </div>

          {/* Рейтинг и дата */}
          <div className="flex items-center justify-between mt-auto pt-2">
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
};

export default Map;
