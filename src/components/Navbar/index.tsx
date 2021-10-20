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
  border: 2px solid whitesmoke;
  right: 0px;
  top: 80px;
  background-color: white;
`;

const Navbar = () => {
  const {
    numApples,
    numPears,
    numBananas,
    showTotal,
    total,
    setShowTotal,
    clicked,
    overall,
    setOverall,
  } = useContext(context);
  const [showCart, setShowCart] = useState<boolean>(false);

  if (total === 0) {
    setShowTotal(false);
  }

  const handleClick = () => {
    setShowCart(!showCart);
  };

  return (
    <NavbarWrapper>
      <div style={{ fontStyle: "italic" }}>e-commerce sample</div>
      <Cart onClick={handleClick} src={cartLogo} alt="cart" />
      {showTotal && <Total>{total}</Total>}
      {showCart && clicked && (
        <Products>
          {numPears > 0 && <div>Pera: {numPears}</div>}
          {numApples > 0 && <div>Mela: {numApples}</div>}
          {numBananas > 0 && <div>Banana: {numBananas}</div>}
          <div>OVERALL: {overall} €</div>
        </Products>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
