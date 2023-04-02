import React from "react";
import { Header, NavBar, Red, UserContainer, UserImage } from "./Navbar.styles";
import user from "../../images/user.png";

const Navbar = () => {
  return (
    <>
      <NavBar>
        <UserContainer>
          <UserImage src={user} alt="user" />
        </UserContainer>
        <Header>
          RAD<Red>ICAL</Red>
        </Header>
      </NavBar>
    </>
  );
};

export default Navbar;
