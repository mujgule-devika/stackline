import React from "react";
import { HeaderContainer, Logo, LogoImg } from "./HeaderStyles";
import logo from "./stackline_logo.svg";
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>
        <LogoImg src={logo} alt="Stackline Logo" />
      </Logo>
    </HeaderContainer>
  );
};

export default Header;
