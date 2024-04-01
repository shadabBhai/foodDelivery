import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/CartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handelAddItems = (item) => {
    dispatch(addItems(item?.card?.info));
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m2 border-b-2 flex  justify-between "
          >
            <div>
              <div className="text-lg font-semibold">
                {item?.card?.info?.name}
              </div>
              <div>
                ₹{" "}
                {"deafultPrice" in item?.card?.info
                  ? item?.card?.info?.defaultPrice / 100
                  : item?.card?.info.price / 100}{" "}
              </div>
              <p className="text-sm text-green-300">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-64">
              <img src={CDN_URL + item?.card?.info?.imageId} alt="" />

              <button
                className="bg-green-600 text-white items-center mx-20  w-16 rounded  "
                onClick={() => handelAddItems(item)}
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
