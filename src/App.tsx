import React, { createContext } from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import useFruits from "./hook/useFruits";
import Card from "./components/Card";
import styled from "styled-components";

interface contextInt {
  numApples: number;
  setNumApples: React.Dispatch<React.SetStateAction<number>>;
  numPears: number;
  setNumPears: React.Dispatch<React.SetStateAction<number>>;
  numBananas: number;
  setNumBananas: React.Dispatch<React.SetStateAction<number>>;
}

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

export const context = createContext<contextInt>({
  numApples: 0,
  setNumApples: () => null,
  numPears: 0,
  setNumPears: () => null,
  numBananas: 0,
  setNumBananas: () => null,
});

const App: React.FC = (): JSX.Element => {
  // const context = createContext();
  const [numApples, setNumApples] = useState<number>(0);
  const [numPears, setNumPears] = useState<number>(0);
  const [numBananas, setNumBananas] = useState<number>(0);
  const data = useFruits();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <context.Provider
        value={{
          numApples,
          setNumApples,
          numPears,
          setNumPears,
          numBananas,
          setNumBananas,
        }}
      >
        <Navbar />
        <Container>
          {data &&
            data.map((x) => {
              return <Card name={x.name} price={x.price} />;
            })}
        </Container>
      </context.Provider>
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
};

export default App;
