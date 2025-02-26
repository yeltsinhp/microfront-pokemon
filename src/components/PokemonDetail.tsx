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
    savePokemonToHistory(pokemon); // 📌 Guardamos el Pokémon en el historial
  }, [pokemon]);

  // 📌 Función para guardar el Pokémon en el historial y eliminar duplicados
  const savePokemonToHistory = (pokemonName: string) => {
    let history = JSON.parse(localStorage.getItem("pokemonHistory") || "[]");

    // 🔹 Eliminamos el Pokémon si ya está en la lista
    history = history.filter((name: string) => name !== pokemonName);

    // 🔹 Agregamos el nuevo Pokémon al inicio de la lista
    history.unshift(pokemonName);

    // 🔹 Guardamos la lista actualizada en `localStorage`
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
