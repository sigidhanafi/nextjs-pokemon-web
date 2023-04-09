import Image from "next/image";

import {
  PokemonDescriptionResponse,
  PokemonDetailResponse,
} from "@/models/pokemon";

const PokemonDetail = (props: {
  data: PokemonDetailResponse;
  description: PokemonDescriptionResponse;
}) => {
  const { data, description } = props;

  return (
    <div className="flex flex-col w-full">
      <div className="bg-blue-200 border border-blue-300 rounded-lg mx-2 my-2">
        <div className="w-full h-fit">
          <Image src={data.image} width={600} height={0} alt={"bulbasaur"} />
        </div>
        <div className="p-4">
          <span
            className="text-blue-500 font-medium text-xl capitalize"
            data-testid="pokemon-detail-name"
          >
            {data.name}
          </span>
          {description && (
            <p data-testid="pokemon-detail-description">
              {description.flavor_text_entries[0].flavor_text}
            </p>
          )}
        </div>
        <div className="flex justify-start space-x-2 bg-white p-2 rounded-br-lg rounded-bl-lg">
          {data.types.map((type) => {
            return (
              <div
                key={type.type.name}
                className="rounded-full border-blue-300 border px-3 py-1"
                data-testid="pokemon-detail-type"
              >
                {type.type.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="border border-blue-300 rounded-lg mx-2 my-2">
        <div className="p-4 bg-blue-300">
          <span className="text-white font-medium text-xl">Base Stat</span>
        </div>
        <div className="flex flex-col">
          {data.stats.map((stat) => {
            return (
              <div
                key={stat.stat.name}
                className="flex flex-row items-center justify-between border-b-blue-200 border-b p-4"
                data-testid="pokemon-detail-stat"
              >
                <span className="w-1/3 text-sm font-medium capitalize">
                  {stat.stat.name}
                </span>
                <div className="flex flex-row items-center w-2/3 space-x-2 pr-2">
                  <div className="bg-gray-200 w-full h-1">
                    <div
                      className={"bg-blue-300 h-1"}
                      style={{ width: stat.base_stat + "%" }}
                    ></div>
                  </div>
                  <span className="w-2 text-sm font-medium">
                    {stat.base_stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
