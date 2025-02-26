import styled from "styled-components";

export const PokemonDetailContainer = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.6); /* Fondo con transparencia */
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  margin: 50px auto;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

export const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 10px;
  border-radius: 50%;
  border: 3px solid white;
`;

export const BackButton = styled.button`
  background-color: #ff6347; /* Color rojo tipo Pokémon */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background-color: #d43f00; /* Oscurece el color al pasar el mouse */
  }
`;
