import React from "react";
import styled from "@emotion/styled";

const ContenedorHeader = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #fff;
`;

const TextoHeader = styled.h1`
  font-size: 2rem;
  font-family: "Slabo 27px", serif;
  margin: 0;
  text-align: center;
`;

export const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  );
};
