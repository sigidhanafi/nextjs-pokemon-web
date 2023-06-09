const CardShimmer = () => {
  const shimmers = [];
  for (let i = 0; i < 9; i++) {
    shimmers.push(
      <div className="w-1/3 flex-shrink-0" key={i} data-testid="shimmer-div">
        <div className="mx-2 my-2">
          <div className="w-full h-36 lg:40 xl:h-52 bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
      </div>
    );
  }
  return <>{shimmers}</>;
};

export default CardShimmer;
