import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenuPage = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="m-5 p-5">
      <h1 className=" flex align-middle justify-center font-bold text-3xl">
        {name}
      </h1>
      <p className="flex align-middle justify-center font-bold text-xl mt-6">
        {cuisines.join(", ")} - {costForTwoMessage}
        cuisines and cost for two
      </p>
      <h1 className="font-bold text-xl mt-5">Menu </h1>

      <h2 className="mt-4">Recommended({itemCards?.length})</h2>

      <ul className="">
        {itemCards?.map((item) => {
          return (
            <li key={item?.card?.info?.id} className="m-2 p-3 bg-green-100">
              {item?.card?.info?.isVeg ? "Veg " : "Non-veg "}
              {item?.card?.info?.name} - {"Rs. "}
              {item?.card?.info?.defaultPrice / 100 ||
                item?.card?.info?.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenuPage;
