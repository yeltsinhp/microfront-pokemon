import api from "./api";

export const getPokemonData = async (pokemonName: string) => {
  try {
    const response = await api.get(`pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return null;
  }
};
