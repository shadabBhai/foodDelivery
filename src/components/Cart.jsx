import { useContext } from "react";
import UserContext from "../utils/userContext";
import CartList from "./CartList";

const Cart = () => {
  const { cart } = useContext(UserContext);

  return (
    <div>
      <div>Your cart : {cart} </div>
    </div>
  );
};
export default Cart;
