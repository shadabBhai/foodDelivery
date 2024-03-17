import { ITEM_IMAGE_URL } from "../utils/constants";

const ItemList = ({ items }) => {
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
            <div className="">
              <img src={ITEM_IMAGE_URL + item?.card?.info?.imageId} alt="" />

              <button
                className="bg-green-600 text-white items-center mx-20  w-16 rounded  "
                onClick={() => console.log("add")}
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
