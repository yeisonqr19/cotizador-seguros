import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  obtenerDiferenciaYear,
  obtenerDiferenciaMarca,
  obtenerPlan,
} from "../helpers/helpers";

import PropTypes from "prop-types";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  border: none;
  width: 100%;
  padding: 1rem;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Form = ({ setResumen, setCargando }) => {
  const [formValues, setFormValues] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState(false);

  const { marca, year, plan } = formValues;

  const handleImputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      marca.trim() === "" ||
      year.trim() === "" ||
      plan.trim() === "" ||
      marca === "--Seleccione--" ||
      year === "--Seleccione--"
    ) {
      setError(true);
      return;
    }

    setError(false);

    //Voy a tener una Base del precio en 2000
    let resultado = 2000;

    //Obtener la diferencia del year, por cada year hay que restarle el 3%.
    const diferenciaYear = obtenerDiferenciaYear(year);

    resultado -= (diferenciaYear * 3 * resultado) / 100;

    //Cada marca va a aumentar el precio por un porcentaje definido: 15% Americano, 5% Asiatico, 30% Europeo.

    resultado = obtenerDiferenciaMarca(marca) * resultado;

    //los Planes editan el precio asi: basico 20%, completo 50%.

    const incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    console.log(resultado);

    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      setResumen({
        cotizacion: resultado,
        datos: {
          marca,
          year,
          plan,
        },
      });
    }, 2500);

    //Reset al form:
    setFormValues({
      marca: "",
      year: "",
      plan: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Error> Todos Los campos son obligatorios </Error>}

      <Campo>
        <Label>Marca </Label>
        <Select name="marca" value={marca} onChange={handleImputChange}>
          <option value="Seleccion">--Seleccione--</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      <Campo>
        <Label>año</Label>
        <Select name="year" value={year} onChange={handleImputChange}>
          <option value="">--Seleccione--</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Plan: </Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={handleImputChange}
        />
        Basico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={handleImputChange}
        />
        Completo
      </Campo>

      <Button type="submit">Cotizar</Button>
    </form>
  );
};

Form.propTypes = {
  setResumen: PropTypes.func.isRequired,
  setCargando: PropTypes.func.isRequired,
};
