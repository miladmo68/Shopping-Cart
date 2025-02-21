import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile/CartTile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + parseFloat(curr.price), 0));
  }, [cart]);

  return (
    <div className="flex justify-center px-5 py-10">
      {cart.length ? (
        <>
          <div className="min-h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center space-y-6">
              {cart.map((cartItem) => (
                <CartTile key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>
          </div>

          <div className="w-[350px] bg-white shadow-xl rounded-lg p-6 mt-10 flex flex-col justify-between space-y-6">
            <h1 className="font-bold text-2xl text-red-800">
              Your Cart Summary
            </h1>
            <div className="flex justify-between">
              <span className="text-gray-800 font-semibold">Total Items</span>
              <span className="text-gray-800 font-semibold">{cart.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800 font-semibold">Total Amount</span>
              <span className="text-red-800 font-semibold text-lg">
                ${totalCart.toFixed(2)}
              </span>
            </div>
            <Link to="/">
              <button className="bg-red-950 text-white border-2 border-red-950 rounded-lg py-3 text-lg font-semibold hover:bg-white hover:text-red-950 transition-all">
                Continue Shopping
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center space-y-6">
          <h1 className="text-gray-800 font-bold text-2xl mb-4">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="bg-red-950 text-white border-2 border-red-950 rounded-lg py-3 px-8 text-lg font-semibold hover:bg-white hover:text-red-950 transition-all">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
