import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";

const DisplayCart = () => {
  const cart = useSelector((state) => state.cart);
  let grandTotal = 0;

  const dispatch = useDispatch();

  return (
    <>
      <div className="text-center lg:m-8 p-8 hidden md:block">
        {cart.length === 0 ? (
          <h1 className="text-2xl">YOUR CART IS CURRENTLY EMPTY</h1>
        ) : (
          <>
            <div className="grid grid-cols-6 gap-4 pb-8 border-b">
              <div className="font-bold">Image</div>
              <div className="font-bold">Item</div>
              <div className="font-bold">Price</div>
              <div className="font-bold">Quantity</div>
              <div className="font-bold">Add/Remove Item</div>
              <div className="font-bold">Total</div>
            </div>
            {cart.map((item) => {
              const total = item.quantity * item.price;
              grandTotal += total;
              return (
                <div className="grid grid-cols-6 gap-4 py-8 border-b">
                  <div className="flex justify-center">
                    <Image
                      src={item.img}
                      width={100}
                      height={100}
                      priority={true}
                      alt={`${item.name} image`}
                    ></Image>
                  </div>
                  <div className="flex justify-center items-center">
                    {item.name}
                  </div>
                  <div className="flex justify-center items-center">
                    ${item.price}
                  </div>
                  <div className="flex justify-center items-center">
                    {item.quantity}
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      onClick={() => dispatch(incrementQuantity(item._id))}
                      className="mr-2 bg-turq hover:bg-lightTurq text-white py-2 px-3 rounded"
                    >
                      &#43;
                    </button>
                    <button
                      onClick={() => dispatch(decrementQuantity(item._id))}
                      className="mr-2 bg-turq hover:bg-lightTurq text-white py-2 px-3 rounded"
                    >
                      &#8722;
                    </button>
                    <button
                      onClick={() => dispatch(removeFromCart(item._id))}
                      className="bg-red-800 hover:bg-red-700 text-white py-2 px-3 rounded"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex justify-center items-center">
                    ${total}
                  </div>
                </div>
              );
            })}
            <div className="mt-8 text-xl">
              <span className="font-bold">GRAND TOTAL:</span> ${grandTotal}
            </div>
          </>
        )}
      </div>
      <div className="text-center lg:m-8 p-8 block md:hidden">
        {cart.length === 0 ? (
          <h1 className="text-xl">YOUR CART IS CURRENTLY EMPTY</h1>
        ) : (
          <>
            <div className="grid grid-cols-4 pb-8 border-b">
              <div className="font-bold text-xs">Item</div>
              <div className="font-bold text-xs">Price</div>
              <div className="font-bold text-xs">Quantity</div>
              <div className="font-bold text-xs">Add / Remove</div>
            </div>
            {cart.map((item) => {
              return (
                <div className="grid grid-cols-4 gap-2 py-8 border-b">
                  <div className="flex justify-center items-center">
                    {item.name}
                  </div>
                  <div className="flex justify-center items-center">
                    ${item.price}
                  </div>
                  <div className="flex justify-center items-center">
                    {item.quantity}
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-center">
                    <button
                      onClick={() => dispatch(incrementQuantity(item._id))}
                      className="bg-turq text-xs hover:bg-lightTurq text-white py-1 px-2 rounded"
                    >
                      &#43;
                    </button>
                    <button
                      onClick={() => dispatch(decrementQuantity(item._id))}
                      className="bg-turq text-xs hover:bg-lightTurq text-white py-1 px-2 rounded"
                    >
                      &#8722;
                    </button>
                    <button
                      onClick={() => dispatch(removeFromCart(item._id))}
                      className="bg-red-800 text-xs hover:bg-red-700 text-white py-1 px-1 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="mt-8 text-xl">
              <span className="font-bold">GRAND TOTAL:</span> ${grandTotal}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DisplayCart;
