const Pagination = (props: {
  page: number;
  onNext: () => void;
  onPrev: () => void;
}) => {
  return (
    <div className="flex space-x-2 justify-center mt-4">
      <button
        className="bg-blue-200 px-2 rounded-md text-center disabled:bg-gray-200"
        onClick={props.onPrev}
        disabled={props.page <= 1}
        data-testid="prev-button"
      >
        Prev
      </button>
      <span data-testid="page-number">{props.page}</span>
      <button
        className="bg-blue-200 px-2 rounded-md text-center"
        onClick={props.onNext}
        data-testid="next-button"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
