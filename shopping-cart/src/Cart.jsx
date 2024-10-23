import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "./redux-toolkit/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItemHandler = (id) => {
    dispatch(removeCart(id));
  };

  return (
    <>
      <h1 className="font-mono text-3xl text-center">Cart Items:-</h1>
      <div className="flex flex-col items-center justify-center space-y-4">
        {cartItems.map((item) => {
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full h-48 object-cover"
                src={item.thumbnail}
                alt={item.title}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">${item.price}</span>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => removeItemHandler(item.id)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Cart;
