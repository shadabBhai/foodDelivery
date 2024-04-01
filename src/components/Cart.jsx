import { useState, useEffect } from "react";

import CartList from "./CartList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculate = () => {
      let total = 0;
      cartItems.forEach((element) => {
        total += element?.price || item?.defaultPrice || 0;
      });
      setTotalAmount(total / 100);
    };
    calculate();
  }, [cartItems]);

  return (
    <div>
      {totalAmount ? (
        <>
          <div className="text-center text-lg font-bold ">
            Your cart ₹ {totalAmount}
          </div>
          <div>
            <div className="w-6/12 m-auto">
              {cartItems.map((item) => {
                return <CartList key={item?.id} data={item} />;
              })}
            </div>
            <button
              className="m-4 p-4  rounded bg-cyan-500 w-6/12 "
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </button>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

const EmptyCart = () => {
  return (
    <>
      <div className="text-center  text-lg font-bold m-10 ">
        <h1> Add items to your card</h1>
      </div>
    </>
  );
};
export default Cart;
