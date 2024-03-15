import { CDN_URL } from "../utils/constants";

const ResturentCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="m-4 p-4 w-[250px] bg-green-200 rounded ">
      <img
        className="ml-5   size-44 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />

      <h3 className="font-medium py-3 text-xl truncate">{name}</h3>
      <h4 className="truncate">{cuisines.join(" , ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default ResturentCard;
