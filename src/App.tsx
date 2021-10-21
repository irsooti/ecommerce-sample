import React, { createContext, useEffect } from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import useFruits from "./hook/useFruits";
import Card from "./components/Card";
import styled from "styled-components";
// import { useRef } from "react";
import { fruitInt } from "./hook/useFruits";

export interface bucket {
  name: string;
  quantity: number;
}

interface contextInt {
  numArticles: bucket[];
  setNumArticles: React.Dispatch<React.SetStateAction<bucket[]>>;
  showTotal: boolean;
  setShowTotal: React.Dispatch<React.SetStateAction<boolean>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  overall: number;
  setOverall: React.Dispatch<React.SetStateAction<number>>;
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
  numArticles: [],
  setNumArticles: () => null,
  showTotal: false,
  setShowTotal: () => null,
  total: 0,
  setTotal: () => null,
  clicked: false,
  setClicked: () => null,
  overall: 0,
  setOverall: () => null,
});

const App: React.FC = (): JSX.Element => {
  const data = useFruits();

  const [numArticles, setNumArticles] = useState<bucket[]>([]);

  const [showTotal, setShowTotal] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [clicked, setClicked] = useState<boolean>(false);
  const [overall, setOverall] = useState<number>(0);
  // const totale = useRef<number>(0);

  useEffect(() => {
    console.log(numArticles);
  }, [numArticles]);

  const calculate = (): number => {
    let ov = 0;
    for (let x of data) {
      for (let y of numArticles) {
        if (y.name === x.name) {
          ov += y.quantity * x.price;
        }
      }
    }
    return ov;
  };

  const add2Cart = () => {
    setTotal(() => {
      let t = 0;
      numArticles.forEach((x) => {
        t += x.quantity;
      });
      return t;
    });
    let overall = calculate();
    setShowTotal(true);
    setClicked(true);
    setOverall(overall);
  };

  return (
    <div className="myBody">
      <context.Provider
        value={{
          numArticles,
          setNumArticles,
          showTotal,
          setShowTotal,
          total,
          setTotal,
          clicked,
          setClicked,
          overall,
          setOverall,
        }}
      >
        <Navbar />
        <Container>
          {data &&
            data.map((x) => {
              return <Card name={x.name} price={x.price} />;
            })}
        </Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "sticky",
          }}
        >
          <Add onClick={() => add2Cart()}>ADD TO CART</Add>
        </div>
      </context.Provider>
    </div>
  );
};

export default App;
