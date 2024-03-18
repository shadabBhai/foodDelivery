import { CDN_URL } from "../utils/constants";

const CartList = ({ data }) => {
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
    </div>
  );
};

export default CartList;
