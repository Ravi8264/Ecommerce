import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white shadow-md">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            MyApp
          </Link>
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/signIn"
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              signIn
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
