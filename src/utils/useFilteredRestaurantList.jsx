import { useEffect, useState } from "react";
import { HOME_API } from "./constants";

const useFilteredRestaurantList = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(HOME_API);
    const jsonData = await data?.json();
    setFilteredRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return filteredRestaurants;
};

export default useFilteredRestaurantList;
