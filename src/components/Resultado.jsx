import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const TextoTotal = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

export const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje>Llena todos los Campos para realizar el proceso</Mensaje>
  ) : (
    <ResultadoCotizacion>
      <TransitionGroup className="resultado">
        <CSSTransition
          classNames="resultado"
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextoTotal>El total a Pagar es de: ${cotizacion}</TextoTotal>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoCotizacion>
  );
};
