import styled from "styled-components";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { context } from "../../App";
import { bucket } from "../../App";

export interface cardInt {
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

const Price = styled(Title)`
  font-weight: bold;
`;

const BigWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 30px;
`;

const Purchase = styled.div`
  display: flex;
`;

const MyButton = styled.button`
  width: 2rem;
  padding: 3px;
  background-color: pink;
  border: pink;
  border-radius: 5px;
  margin-left: 5px;
  text-align: center;
  cursor: pointer;
  box-shadow: none;
  font-size: 1.5rem;
  font-weight: bold;
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
  box-shadow: none;
`;

const Card: React.FC<cardInt> = ({ name, price }): JSX.Element => {
  const { numArticles, setNumArticles, checkedOut } = useContext(context);

  const [qty, setQty] = useState<number>(0);

  useEffect(() => {
    setQty(0);
  }, [checkedOut]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    let article = event.currentTarget.parentElement!.id;

    if (event.currentTarget.textContent === "-") {
      setNumArticles((prevValues: bucket[] | undefined) => {
        if (prevValues!.length !== 0) {
          for (let x of prevValues!) {
            if (x.name === article && x.quantity > 0) {
              let productObject: bucket = {
                name,
                quantity: --x.quantity,
              };
              setQty((prev) => --prev);
              prevValues!.splice(prevValues!.indexOf(x), 1, productObject);
              return prevValues;
            }
          }
        }
      });
    } else {
      setNumArticles((prevValues: bucket[] | undefined) => {
        let newArray: bucket[] = [];

        if (prevValues!.length === 0) {
          let productObject: bucket = {
            name: article,
            quantity: 1,
          };
          setQty(1);
          newArray.push(productObject);
          return newArray;
        } else {
          for (let x of prevValues!) {
            if (x.name === article) {
              let productObject: bucket = {
                name,
                quantity: ++x.quantity,
              };
              setQty((prev) => ++prev);
              prevValues!.splice(prevValues!.indexOf(x), 1, productObject);
              return prevValues;
            } else {
              if (prevValues!.indexOf(x) < prevValues!.length - 1) continue;
              let productObject: bucket = {
                name: article,
                quantity: 1,
              };
              setQty(1);
              return [...prevValues!, productObject];
            }
          }
        }
      });
    }
  };

  const display = (id: string) => {
    numArticles!.forEach((x) => {
      if (x.name === id) {
        return x.quantity;
      } else return 0;
    });
  };

  return (
    <BigWrapper>
      <CardWrapper>
        <Title>{name}</Title>
        <Price>{price} €</Price>
      </CardWrapper>
      <Purchase id={name}>
        <MyButton onClick={handleClick} disabled={qty === 0}>
          -
        </MyButton>
        <Quantity>{qty}</Quantity>
        <MyButton onClick={handleClick}>+</MyButton>
      </Purchase>
    </BigWrapper>
  );
};

export default Card;
