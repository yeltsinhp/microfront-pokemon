import axios from "axios";

// 📌 Instancia de Axios con la base URL de la PokeAPI
const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 5000, // Tiempo de espera máximo de 5 segundos
});

export default api;
