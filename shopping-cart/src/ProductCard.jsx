import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux-toolkit/cartSlice";

const ProductCard = ({ prod }) => {
  const dispatch = useDispatch();

  const addItemHandler = (prod) => {
    //dispatch add action
    dispatch(addToCart(prod));
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={prod.thumbnail}
        alt={prod.title}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{prod.title}</h2>
        <p className="text-gray-600 mb-2">{prod.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${prod.price}</span>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => addItemHandler(prod)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
