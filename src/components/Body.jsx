import ResturentCard from "./ResturentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useState } from "react";

import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import useFilteredRestaurantList from "../utils/useFilteredRestaurantList";

const Body = () => {
  const restaurantsList = useRestaurantList();
  const filteredRestaurants = useFilteredRestaurantList([]);
  const [searchText, SetSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Check your InterNet Connection</h1>;
  if (restaurantsList?.length === 0 || filteredRestaurants?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search p-4  ">
          <input
            type="text"
            className="border border-solid black mr-3"
            value={searchText}
            onChange={(e) => {
              SetSearchText(e.target.value);
            }}
          />
          <button
            className="px-4  bg-green-200  rounded "
            onClick={() => {
              const filteredList = restaurantsList?.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              useFilteredRestaurantList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="bg-green-200 m-4 px-4 rounded"
            onClick={() => {
              const filteredList = filteredRestaurants?.filter(
                (res) => res.info.avgRating > 4
              );

              useFilteredRestaurantList(filteredList);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants?.map((resturant) => (
          <Link
            key={resturant?.info?.id}
            to={"/restaurant/" + resturant?.info?.id}
          >
            {" "}
            <ResturentCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
