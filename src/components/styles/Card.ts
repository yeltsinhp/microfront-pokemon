import styled from "styled-components";

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.2); // 🎨 Fondo semitransparente
  border-radius: 15px;
  padding: 20px;
  width: 350px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px); // 🟢 Efecto de desenfoque en el fondo
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`;

export const PokemonName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-transform: capitalize;
  color: #fff;
`;
