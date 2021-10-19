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

const Navbar = () => {
  const { showTotal, total, setShowTotal } = useContext(context);

  if (total === 0) {
    setShowTotal(false);
  }

  return (
    <NavbarWrapper>
      <div style={{ fontStyle: "italic" }}>e-commerce sample</div>
      <img style={{ cursor: "pointer" }} src={cartLogo} alt="cart" />
      {showTotal && <Total>{total}</Total>}
    </NavbarWrapper>
  );
};

export default Navbar;
