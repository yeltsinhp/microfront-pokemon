import { useEffect, useState } from "react";
import { getPokemonData } from "../services/pokemonService";
import {
  PokemonDetailContainer,
  PokemonImage,
  BackButton,
} from "./styles/PokemonDetailStyles";

const getPokemonFromURL = () => {
  const urlParts = window.location.href.split("/");
  return urlParts[urlParts.length - 1] || "Desconocido";
};

const PokemonDetail = () => {
  const pokemon = getPokemonFromURL();
  const [pokemonData, setPokemonData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonData(pokemon);
      setPokemonData(data);
    };

    fetchData();
    savePokemonToHistory(pokemon); 
  }, [pokemon]);

  const savePokemonToHistory = (pokemonName: string) => {
    let history = JSON.parse(localStorage.getItem("pokemonHistory") || "[]");

    history = history.filter((name: string) => name !== pokemonName);

    history.unshift(pokemonName);

    localStorage.setItem("pokemonHistory", JSON.stringify(history));
  };

  return (
    <PokemonDetailContainer>
      <h1>Microfront Detalle Pokémon {pokemon}</h1>
      {pokemonData ? (
        <>
          <PokemonImage
            src={pokemonData.sprites.other["official-artwork"].front_default}
            alt={pokemon}
          />
          <p>Tipo: {pokemonData.types.map((t: any) => t.type.name).join(", ")}</p>
          <p>Altura: {pokemonData.height}</p>
          <p>Peso: {pokemonData.weight}</p>
        </>
      ) : (
        <p>Cargando información...</p>
      )}
      <BackButton onClick={() => (window.location.href = "http://localhost:3000/home")}>
        Volver a la lista
      </BackButton>
    </PokemonDetailContainer>
  );
};

export default PokemonDetail;
