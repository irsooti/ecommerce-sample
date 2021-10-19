import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import useFruits from "./hook/useFruits";
import Card from "./components/Card";
import styled from "styled-components";
import { createContext } from "react";
function App() {
  const data = useFruits();

  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 100px 280px;
  `;

  const Add = styled.button`
    width: 300px;
    height: 100px;
    background: orangered;
    border: orangered;
    cursor: pointer;
    font-size: 2rem;
    border-radius: 8px;
  `;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Container>
        {data &&
          data.map((x) => {
            console.log(x);
            return <Card name={x.name} price={x.price} />;
          })}
      </Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Add>ADD TO CART</Add>
      </div>
    </div>
  );
}

export default App;
