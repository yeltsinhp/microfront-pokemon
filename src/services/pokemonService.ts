import api from "./api";

// 📌 Función para obtener los datos de un Pokémon
export const getPokemonData = async (pokemonName: string) => {
  try {
    const response = await api.get(`pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return null;
  }
};
