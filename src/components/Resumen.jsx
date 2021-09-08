import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { primeraMayuscula } from "../helpers/helpers";

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #46898f;
  color: #fff;
  margin-top: 1rem;
`;

export const Resumen = ({ datos: { marca, year, plan } }) => {
  if (marca === "" || year === "" || plan === "") {
    return null;
  }

  return (
    <ContenedorResumen>
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <li>Marca: {primeraMayuscula(marca)} </li>
        <li>Plan: {primeraMayuscula(plan)}</li>
        <li>Año del auto: {year}</li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.propTypes = {
  datos: PropTypes.object.isRequired,
};
