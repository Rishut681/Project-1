import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtid1RQ_CRYPxcA7hP30eSg7I0BCt44k4IeQ&usqp=CAU" alt="logo" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 3.8rem;
  margin:0.3rem 0.9rem; 
  border-radius:0.6rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;

  .logo {
    height: auto;
    max-width: 30%;
  }
`;

export default Header;