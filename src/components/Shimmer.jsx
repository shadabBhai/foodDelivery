const Shimmer = () => {
  const boxes = [];
  for (let i = 0; i < 10; i++) {
    boxes.push(
      <div key={i} className="mt-20 ml-10 p-4 h-64 w-56 bg-green-400 rounded ">
        <div className="bg-green-100 h-32 w-48 mb-4 rounded"></div>
        <div className="bg-green-100 h-4 w-48 mb-4 rounded"></div>
        <div className="bg-green-100 h-3 w-40 mb-4 rounded"></div>
        <div className="bg-green-100 h-2 w-36 mt-4 rounded"></div>
      </div>
    );
  }
  return <div className="flex flex-wrap">{boxes}</div>;
};

export default Shimmer;
