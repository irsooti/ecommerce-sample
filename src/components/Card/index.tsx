import styled from "styled-components";
import mela from "../../assets/mela.png";
import pera from "../../assets/pera.png";
import banana from "../../assets/banana.png";
import React from "react";
import { useContext } from "react";
import { context } from "../../App";

interface CardInt {
  name: string;
  price: number;
}

const CardWrapper = styled.div`
  width: 256px;
  height: fit-content;
  border: 1px solid black;
  border-radius: 8px;
`;

const Title = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const BigWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Purchase = styled.div`
  display: flex;
`;

const MyButton = styled.button`
  width: 1rem;
  padding: 3px;
  background-color: pink;
  border: pink;
  border-radius: 5px;
  margin-left: 5px;
  text-align: center;
  cursor: pointer;
  box-shadow: none;
`;

const Quantity = styled.div`
  width: 2rem;
  padding: 3px;
  font-size: 1.5rem;
  background-color: pink;
  border: pink;
  border-radius: 5px;
  margin-left: 5px;
  text-align: center;
  cursor: pointer;
  box-shadow: none;
`;

const Card: React.FC<CardInt> = ({ name, price }) => {
  const {
    numApples,
    setNumApples,
    numPears,
    setNumPears,
    numBananas,
    setNumBananas,
  } = useContext(context);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.textContent === "-") {
      switch (event.currentTarget.parentElement?.id) {
        case "Mela":
          setNumApples((prevValue: number) => {
            if (prevValue > 0) return prevValue - 1;
            else return 0;
          });
          break;
        case "Pera":
          setNumPears((prevValue: number) => {
            if (prevValue > 0) return prevValue - 1;
            else return 0;
          });
          break;
        case "Banana":
          setNumBananas((prevValue: number) => {
            if (prevValue > 0) return prevValue - 1;
            else return 0;
          });
          break;
        default:
          return;
      }
    } else {
      switch (event.currentTarget.parentElement?.id) {
        case "Mela":
          setNumApples((prevValue: any) => prevValue + 1);
          break;
        case "Pera":
          setNumPears((prevValue: any) => prevValue + 1);
          break;
        case "Banana":
          setNumBananas((prevValue: any) => prevValue + 1);
          break;
        default:
          return;
      }
    }
  };

  return (
    <BigWrapper>
      <CardWrapper>
        {name === "Mela" && (
          <img width="256px" height="256px" src={mela} alt="mela" />
        )}
        {name === "Pera" && (
          <img width="256px" height="256px" src={pera} alt="pera" />
        )}
        {name === "Banana" && (
          <img width="256px" height="256px" src={banana} alt="banana" />
        )}
        <Title>{name}</Title>
        <Price>{price} €</Price>
      </CardWrapper>
      <Purchase id={name}>
        <MyButton onClick={handleClick}>-</MyButton>
        <Quantity>
          {name === "Mela" && numApples}
          {name === "Pera" && numPears}
          {name === "Banana" && numBananas}
        </Quantity>
        <MyButton onClick={handleClick}>+</MyButton>
      </Purchase>
    </BigWrapper>
  );
};

export default Card;
