import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div
        className="  bg-green-100 shadow-lg my-4  p-4 w-[100%] 
      "
      >
        <div className="flex justify-between">
          <span
            className="text-lg font-bold cursor-pointer "
            onClick={handleClick}
          >
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
