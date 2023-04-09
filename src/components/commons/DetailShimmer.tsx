const DetailShimmer = () => {
  return (
    <>
      <div className="w-full">
        <div className="mx-2 my-2" data-testid="image-shimmer">
          <div className="w-full h-96 lg:40 xl:h-96 bg-gray-300 rounded-lg animate-pulse "></div>
        </div>
        <div className="mx-2 my-2" data-testid="stat-shimmer">
          <div className="w-full h-36 lg:40 xl:h-36 bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </>
  );
};

export default DetailShimmer;
