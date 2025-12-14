import React from "react";
import { useWishlist } from "../../hooks/useWishlist";
const WishButton = ({ item }) => {
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } =
    useWishlist();
  const toggleWish = () => {
    if (isInWishlist(item.id)) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  };
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWish();
      }}
      className="absolute top-2 right-2 w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm"
    >
      <svg
        className={`w-5 h-5 transition-colors duration-200 ${
          isInWishlist(item.id)
            ? "text-red-500 fill-red-500"
            : "text-white hover:text-red-300"
        }`}
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
  );
};

export default WishButton;
