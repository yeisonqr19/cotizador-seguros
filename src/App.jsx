import React, { useState } from "react";
import { Header } from "./components/Header";
import styled from "@emotion/styled";
import { Form } from "./components/Form";
import { Resumen } from "./components/Resumen";
import { Resultado } from "./components/Resultado";
import { Spinner } from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

const App = () => {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  const [cargando, setCargando] = useState(false);

  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />

      <ContenedorFormulario>
        <Form setResumen={setResumen} setCargando={setCargando} />

        {cargando ? (
          <Spinner />
        ) : (
          <>
            <Resumen datos={datos} />
            <Resultado cotizacion={cotizacion} />
          </>
        )}
      </ContenedorFormulario>
    </Contenedor>
  );
};

export default App;
