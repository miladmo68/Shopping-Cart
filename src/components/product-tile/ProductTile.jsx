import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  return (
    <div className="group flex flex-col items-center border-2 border-gray-300 shadow-lg hover:shadow-2xl rounded-xl p-4 h-[360px] mt-10 ml-5 transition-all duration-300">
      <div className="h-[180px] overflow-hidden rounded-lg">
        <img
          src={product?.image}
          alt={product?.title}
          className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h1 className="w-40 truncate text-gray-700 font-semibold text-lg text-center">
          {product?.title}
        </h1>
      </div>
      <div className="flex items-center justify-center w-full mt-4">
        <button
          onClick={
            cart.some((item) => item.id === product.id)
              ? handleRemoveFromCart
              : handleAddToCart
          }
          className="bg-red-950 text-white border-2 rounded-lg font-bold p-3 transition-all duration-300 hover:bg-white hover:text-red-950 hover:border-red-950"
        >
          {cart.some((item) => item.id === product.id)
            ? "Remove from cart"
            : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
