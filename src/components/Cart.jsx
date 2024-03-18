import { useContext, useState, useEffect } from "react";
import UserContext from "../utils/userContext";
import CartList from "./CartList";

const Cart = () => {
  const { cart } = useContext(UserContext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculate = () => {
      let total = 0;
      cart.forEach((element) => {
        total += element?.price || item?.defaultPrice || 0;
      });
      setTotalAmount(total / 100);
    };
    calculate();
  }, [cart]);

  return (
    <div>
      <div className="text-center text-lg font-bold">
        Your cart ₹ {totalAmount}
      </div>
      <div>
        <div>
          {cart.map((item) => {
            return <CartList key={item?.id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Cart;
