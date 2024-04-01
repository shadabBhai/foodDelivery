import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { removeItem } from "../utils/CartSlice";

const CartList = ({ data }) => {
  const dispatch = useDispatch();
  const removeHandler = (data) => {
    dispatch(removeItem(data));
  };
  return (
    <div className="p-4 m-4  border-b-2 flex justify-between">
      <div className="">
        <div className="font-bold text-lg">{data?.name}</div>
        <div>
          ₹ {data?.price ? data?.price / 100 : data?.defaultPrice / 100}
        </div>
      </div>
      <div>
        <img src={CDN_URL + data?.imageId} alt="" className="w-36" />
      </div>
      <button
        className=" text-center m-2 p-2  rounded "
        onClick={() => removeHandler(data)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartList;
