import Image from "next/image";
import accountIcon from "../public/icons8-user.png";
import shoppingCartIcon from "../public/icons8-shopping-cart.png";

const Navbar = () => {
  return (
    <div className="w-screen bg-gray-700	">
      <nav class="flex items-center justify-between p-1 flex-wrap max-w-screen-xl mx-auto">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <a href="/" class="font-semibold text-xl tracking-tight ">
            EC Store
          </a>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="lg:flex-grow">
            <a
              href="/"
              class="block mt-4 lg:inline-block lg:mt-0 p-4 border border-gray-700 text-white hover:border-white rounded mr-6 "
            >
              Shop
            </a>
            <a
              href="/"
              class="block mt-4 lg:inline-block lg:mt-0 p-4 border border-gray-700 text-white hover:border-white rounded mr-4 "
            >
              Brands
            </a>
          </div>
          <div className="flex">
            <a
              href="/"
              class="block mt-4 lg:flex lg:mt-0 p-4 border border-gray-700 text-white hover:border-white rounded mr-6"
            >
              <Image
                className="mr-1"
                alt="User account icon"
                src={accountIcon}
                height={23}
                width={23}
              />
              Account
            </a>
            <a
              href="/"
              class="block mt-4 lg:flex lg:mt-0 p-4 border border-gray-700 text-white hover:border-white rounded rounded mr-4"
            >
              <Image
                className="mr-1"
                alt="User account icon"
                src={shoppingCartIcon}
                height={23}
                width={23}
              />
              Cart
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
