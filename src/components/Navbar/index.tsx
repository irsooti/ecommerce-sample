import styled from "styled-components";
import cartLogo from "../../assets/icon-cart.svg";
import { useContext, useEffect, useState } from "react";
import { context } from "../../App";

const NavbarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 2rem;
  border-bottom: 5px solid whitesmoke;
  width: 90%;
`;

const Total = styled.span`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  background-color: orangered;
  color: white;
  font-size: 1rem;
  border-radius: 100%;
  text-align: center;
  right: 40px;
  top: 40px;
  padding-top: 3px;
`;

const Cart = styled.img`
  cursor: pointer;
`;

const Products = styled.div`
  position: absolute;
  width: 250px;
  height: 300px;
  border: 2px solid grey;
  right: 0px;
  top: 80px;
  background-color: white;
  border-radius: 5px;
`;

const Checkout = styled.button`
  width: 150px;
  height: 50px;
  background: orangered;
  border: orangered;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 8px;
  color: white;
  margin: 20px 45px;
`;

const Navbar = () => {
  const {
    numArticles,
    setNumArticles,
    showTotal,
    total,
    setTotal,
    setShowTotal,
    clicked,
    overall,
    setOverall,
    setCheckedOut,
  } = useContext(context);
  const [showCart, setShowCart] = useState<boolean>(false);

  // if (total === 0) {
  //   setShowTotal(false);
  // }

  // useEffect(() => {
  //   console.log(total);
  // }, [total]);

  // useEffect(() => {
  //   console.log(numArticles);
  // }, [numArticles]);

  const handleClick = () => {
    setShowCart(!showCart);
  };

  const handleCheckout = () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        totale: overall,
      }),
    };
    fetch("/buy", options).then((res: Response) => {
      alert(res.status);
    });
    setNumArticles([]);
    setTotal(0);
    setShowTotal(false);
    setShowCart(false);
    setOverall(0);
    setCheckedOut(true);
    setTimeout(() => {
      setCheckedOut(false);
    }, 1000);
  };

  return (
    <NavbarWrapper>
      <div style={{ fontStyle: "italic" }}>e-commerce sample</div>
      <Cart onClick={handleClick} src={cartLogo} alt="cart" />
      {showTotal && <Total>{total}</Total>}
      {showCart && clicked && (
        <Products>
          {numArticles!.length > 0 &&
            numArticles!.map((x) => {
              return (
                <div>
                  {x.name}{" "}
                  <span style={{ color: "grey", fontSize: "1.3rem" }}>x</span>{" "}
                  {x.quantity}
                </div>
              );
            })}
          <div>OVERALL: {overall} €</div>
          <Checkout onClick={() => handleCheckout()}>Checkout</Checkout>
        </Products>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
