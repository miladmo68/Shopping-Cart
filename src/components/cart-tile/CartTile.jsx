import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <div className="flex items-center justify-between p-6 bg-white shadow-lg rounded-lg mt-6 mb-6 hover:shadow-xl transition-all duration-300 ease-in-out">
      {/* Product Image */}
      <div className="flex items-center">
        <img
          src={cartItem?.image}
          alt={cartItem?.title}
          className="h-32 w-32 rounded-lg object-cover shadow-md transform hover:scale-105 transition-transform duration-300"
        />
        {/* Product Details */}
        <div className="ml-8 space-y-3">
          <h1 className="text-2xl font-medium text-gray-800 hover:text-gray-900 transition-colors duration-300">
            {cartItem?.title}
          </h1>
          <p className="text-lg font-semibold text-gray-600">
            ${cartItem?.price}
          </p>
        </div>
      </div>

      {/* Remove Button */}
      <div>
        <button
          onClick={handleRemoveFromCart}
          className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
