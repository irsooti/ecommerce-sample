import styled from "styled-components";
import cartLogo from "../../assets/icon-cart.svg";

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 2rem;
  border-bottom: 5px solid whitesmoke;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div style={{ fontStyle: "italic" }}>e-commerce sample</div>
      <img src={cartLogo} alt="cart" />
    </NavbarWrapper>
  );
};

export default Navbar;
