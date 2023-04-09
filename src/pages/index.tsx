import Head from "next/head";
import { useRouter } from "next/router";

import usePokemonApiList from "@/hooks/usePokemonApiList";

import PokemonList from "@/components/pokemon/PokemonList";
import CardShimmer from "@/components/commons/CardShimmer";
import Pagination from "@/components/commons/Pagination";

export default function HomePage() {
  const router = useRouter();
  const {
    query: { page: queryPage },
  } = router;

  // initial page / get from query
  let initialPage = 0;
  if (
    queryPage &&
    queryPage != "" &&
    queryPage != undefined &&
    !Array.isArray(queryPage)
  ) {
    initialPage = parseInt(queryPage);
  }

  const { data, isFetching, error, isSuccess, page, setPage } =
    usePokemonApiList(initialPage);

  return (
    <>
      <Head>
        <title>Poke Monster</title>
        <meta name="description" content="Poke monster! Take home test." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full flex-wrap justify-center">
        <>
          {/* shimmer */}
          {isFetching && <CardShimmer />}

          {/* error */}
          {error && (
            <div className="flex flex-col justify-center items-center w-full h-96">
              <span className="text-gray-500">
                Error when fetch the pokemon data.
              </span>
              <span className="text-gray-500">Please try again.</span>
            </div>
          )}

          {/* success */}
          {!isFetching && isSuccess && data && (
            <PokemonList data={data.results} />
          )}

          {/* pagination */}
          {isSuccess && (
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
          )}
        </>
      </div>
    </>
  );
}
