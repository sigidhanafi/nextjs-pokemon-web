import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

interface PorkemonCardProps {
  name: string;
  id: number;
  image: string;
}

const PokemonCard = (props: PorkemonCardProps) => {
  return (
    <div className="relative w-1/3 flex-shrink-0" data-testid="pokemon-card">
      <Link href={"/" + props.name}>
        <div className="bg-blue-200 border border-blue-300 rounded-lg mx-2 my-2">
          <Image
            src={props.image}
            width={300}
            height={300}
            alt=""
            data-testid="pokemon-card-image"
          />
          <div className="flex justify-center p-2">
            <span
              className="text-blue-500 font-medium text-sm md:text-lg xl:text-xl capitalize"
              data-testid="pokemon-card-name"
            >
              {props.name}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
