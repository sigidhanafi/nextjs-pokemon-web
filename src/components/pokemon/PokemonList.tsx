import { useRouter } from "next/router";

import usePokemonApiList from "../../hooks/usePokemonApiList";

import Pagination from "../commons/Pagination";
import PokemonCard from "./PokemonCard";
import CardShimmer from "../commons/CardShimmer";

const PokemonList = () => {
  const router = useRouter();
  const {
    query: { page: queryPage },
  } = router;

  let initialPage = 0;
  if (
    queryPage &&
    queryPage != "" &&
    queryPage != undefined &&
    !Array.isArray(queryPage)
  ) {
    initialPage = parseInt(queryPage);
  }

  const {
    data,
    isLoading,
    isFetching,
    error,
    isSuccess,
    isPreviousData,
    page,
    setPage,
  } = usePokemonApiList(initialPage);

  if (isLoading || isFetching) {
    return (
      <div className="flex w-full flex-wrap">
        <CardShimmer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-96">
        <span className="text-gray-500">
          Error when fetch the pokemon data.
        </span>
        <span className="text-gray-500">Please try again.</span>
      </div>
    );
  }

  // success but result is empty
  // case: user input higer pagination ex: 10000
  if (isSuccess && data && data.results && data.results.length <= 0) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-96">
        <span className="text-gray-500">Empty result</span>
        <span className="text-gray-500">Please try again.</span>
      </div>
    );
  }

  // success
  if (isSuccess && data) {
    return (
      <div>
        <div className="flex w-full flex-wrap">
          {data &&
            data.results &&
            data.results.map((pokemon) => {
              return (
                <PokemonCard
                  key={pokemon.name}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                />
              );
            })}
        </div>
        <Pagination
          page={page}
          onNext={() => {
            setPage((page) => {
              const nextPage = page + 1;
              router.push("/?page=" + nextPage);
              return nextPage;
            });
          }}
          onPrev={() => {
            setPage((page) => {
              const prevPage = page - 1;
              router.push("/?page=" + prevPage);
              return prevPage;
            });
          }}
        />
      </div>
    );
  }

  return <></>;
};

export default PokemonList;
