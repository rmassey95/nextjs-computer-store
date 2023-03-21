import Image from "next/image";
import accountIcon from "../public/icons8-user.png";
import shoppingCartIcon from "../public/icons8-shopping-cart.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-100 bg-turq">
      <nav className="p-1 flex-wrap max-w-screen mx-auto">
        <div className="w-full block flex-grow flex items-center w-auto">
          <div className="text-white mr-1 lg:mr-6 ml-4">
            <Link href="/" className="font-semibold md:text-xl tracking-tight">
              EC Store
            </Link>
          </div>
          <div className="flex flex-grow">
            <Link
              href="/"
              className="block inline-block mt-0 p-4 border border-turq text-white hover:border-white rounded mr-1 md:mr-4 "
            >
              Shop
            </Link>
            <Link
              href="/brands"
              className="block inline-block mt-0 p-4 border border-turq text-white hover:border-white rounded"
            >
              Brands
            </Link>
          </div>
          <div className="flex">
            <Link
              href="/cart"
              className="block flex mt-0 p-4 border border-turq text-white hover:border-white rounded rounded mr-1 md:mr-4"
            >
              <Image
                className="mr-1"
                alt="User account icon"
                src={shoppingCartIcon}
                height={24}
                width={23}
              />
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </div>
    // <div className="w-100 bg-turq">
    //   <nav className="flex items-center justify-between p-1 flex-wrap max-w-screen-xl mx-auto">
    //     <div className="flex items-center flex-shrink-0 text-white mr-6 ml-4">
    //       <Link href="/" className="font-semibold text-xl tracking-tight">
    //         EC Store
    //       </Link>
    //     </div>
    //     <div className="block lg:hidden">
    //       <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
    //         <svg
    //           className="fill-current h-3 w-3"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <title>Menu</title>
    //           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    //         </svg>
    //       </button>
    //     </div>
    //     <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    //       <div className="lg:flex-grow">
    //         <Link
    //           href="/"
    //           className="block mt-4 lg:inline-block lg:mt-0 p-4 border border-turq text-white hover:border-white rounded mr-4 "
    //         >
    //           Shop
    //         </Link>
    //         <Link
    //           href="/brands"
    //           className="block mt-4 lg:inline-block lg:mt-0 p-4 border border-turq text-white hover:border-white rounded"
    //         >
    //           Brands
    //         </Link>
    //       </div>
    //       <div className="flex">
    //         <Link
    //           href="/cart"
    //           className="block mt-4 lg:flex lg:mt-0 p-4 border border-turq text-white hover:border-white rounded rounded mr-4"
    //         >
    //           <Image
    //             className="mr-1"
    //             alt="User account icon"
    //             src={shoppingCartIcon}
    //             height={24}
    //             width={23}
    //           />
    //           Cart
    //         </Link>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default Navbar;
