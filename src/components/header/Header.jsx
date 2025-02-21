import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto px-6 md:px-8 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-500">
        {/* Logo Section */}
        <Link to={"/"} className="ml-5">
          <h1 className="text-red-900 font-extrabold text-2xl sm:text-3xl md:text-4xl cursor-pointer tracking-wider transform hover:scale-105 transition-all duration-300 ease-in-out">
            REACT REDUX SHOPPING CART
          </h1>
        </Link>

        {/* Navigation Links */}
        <ul className="flex list-none items-center space-x-8 text-gray-900 font-medium">
          <Link to={"/"}>
            <li className="cursor-pointer text-lg hover:text-red-700 hover:underline underline-offset-4 transition-all duration-300">
              Home
            </li>
          </Link>
          <Link to={"/cart"}>
            <li className="cursor-pointer text-lg hover:text-red-700 hover:underline underline-offset-4 transition-all duration-300">
              Cart
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
