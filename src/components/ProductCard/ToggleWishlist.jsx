import React from "react";
import axios from "axios";
import { useAuth, useCart } from "../../context";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../../reducer";

export const ToggleWishlist = ({ product }) => {
  const { user } = useAuth();
  const { wishlist, cartDispatch, checkProductInWishlist } = useCart();
  const isProductInWishlist = checkProductInWishlist(product._id, wishlist);

  const addToWishlist = async () => {
    try {
      const updatedWishlist = await axios.post("/api/user/wishlist", product, {
        headers: { authorization: localStorage.getItem("token") },
      });

      cartDispatch({
        type: ADD_TO_WISHLIST,
        payload: product,
      });

      console.log(updatedWishlist);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToWhishlist = () => {
    cartDispatch({
      type: ADD_TO_WISHLIST,
      payload: product,
    });
  };

  const handleRemoveFromWishlist = () => {
    cartDispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: product._id,
    });
  };

  return (
    <button
      key={product._id}
      onClick={!isProductInWishlist ? addToWishlist : removeFromWishlist}
      className="card-badge-bg wishlist-badge absolute text-base top-1 right-1 rounded-full flex-row flex-center pointer"
    >
      <span
        className={`${
          isProductInWishlist ? "wishlist-badge-active" : ""
        } material-icons-outlined rounded-full`}
      >
        favorite
      </span>
    </button>
  );
};

ToggleWishlist.defaultProps = {
  product: {
    _id: "",
    alt: "",
    image: "",
    price: 0,
    oldPrice: 0,
    inStock: false,
    productName: "",
    description: "",
    addedInYear: "",
  },
};
