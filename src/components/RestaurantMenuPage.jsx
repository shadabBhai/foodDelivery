import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenuPage = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="m-5 p-5">
      <h1 className=" flex align-middle justify-center font-bold text-3xl">
        {name}
      </h1>
      <p className="flex align-middle justify-center font-bold text-xl mt-6">
        {cuisines.join(", ")} - {costForTwoMessage}
        cuisines and cost for two
      </p>
      <div className=" ">
        <div className="">
          {categories.map((category, index) => {
            return (
              <RestaurantCategory
                data={category?.card?.card}
                key={category?.card?.card?.title}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => {
                  setShowIndex(index);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuPage;
