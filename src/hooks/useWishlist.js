import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";

export function useWishlist() {
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } =
    useContext(ItemsContext);

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };
}
