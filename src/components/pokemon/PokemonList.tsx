import PokemonCard from "./PokemonCard";

import { PokemonListData } from "@/models/pokemon";

const PokemonList = (props: { data: PokemonListData[] }) => {
  return (
    <div className="flex w-full flex-wrap">
      {props.data.length <= 0 && (
        <div className="flex flex-col justify-center items-center w-full h-96">
          <span className="text-gray-500">Empty result</span>
          <span className="text-gray-500">Please try again.</span>
        </div>
      )}

      {props.data.length > 0 &&
        props.data.map((pokemon) => {
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
  );
};

export default PokemonList;
