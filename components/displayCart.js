import { useSelector, useDispatch } from "react-redux";

const DisplayCart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const dispatch = useDispatch();

  return (
    <div>
      {cart.length === 0 ? <h1>CART IS EMPTY</h1> : <div>CART ITEMS</div>}
    </div>
  );
};

export default DisplayCart;
