import { createContext } from "react";
import products from "../pages/components/data/data";
import { useState, useRef, useEffect } from "react";
export const ItemsContext = createContext();

export const ContextProvider = ({ children }) => {
  const [items, setItems] = useState(products);
  const [search, setSearch] = useState("");
  const categoriesRef = useRef(null);
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
  const filters = ["Все", "new", "by"];
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
  const [activeFilter, setActiveFilter] = useState("Все");
  const [activeCategory, setActiveCategory] = useState("Все");
  const [wish, setWish] = useState([]);

  return (
    <ItemsContext.Provider
      value={{
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
        wish,
        setWish,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
