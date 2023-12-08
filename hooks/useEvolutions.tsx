import { useEffect, useState } from "react";
import { getPokemon, getProperty } from "../utils/fetch";
import { getIdFromUrl } from "../utils/text";

const useEvolutions = (pokemonId: number) => {
  const [evolvesTo, setEvolvesTo] = useState<any[]>([]);
  const [evolvesFrom, setEvolvesFrom] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (pokemonId) {
        const evolutionData = await getProperty(`pokemon-species/${pokemonId}`);

        if (
          evolutionData &&
          evolutionData.evolution_chain &&
          evolutionData.evolution_chain.url
        ) {
          const evolutionChainData = await getProperty(
            evolutionData.evolution_chain.url,
          );

          if (evolutionChainData && evolutionChainData.chain) {
            // Fetch evolves_to
            const evolvesToData = evolutionChainData.chain.evolves_to || [];
            const evolvesToUrls = evolvesToData.map(
              (evolution: any) => evolution.species.url,
            );
            const evolvesToIds = evolvesToUrls.map((url: string) =>
              Number(getIdFromUrl(url)),
            );
            const evolvesToPokemons = await Promise.all(
              evolvesToIds.map((id: number) => getPokemon(id)),
            );
            setEvolvesTo(evolvesToPokemons);

            // Fetch evolves_from
            const evolvesFromUrl = evolutionChainData.chain.species.url || null;
            if (evolvesFromUrl) {
              const evolvesFromId = getIdFromUrl(evolvesFromUrl);
              const evolvesFromPokemon = await getPokemon(evolvesFromId);
              setEvolvesFrom([evolvesFromPokemon]);
            }
          }
        }
      }
    };

    fetchData();
  }, [pokemonId]);

  return { evolvesTo, evolvesFrom };
};

export default useEvolutions;
