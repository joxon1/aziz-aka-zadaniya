import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.header`
  width: 100%;
  background: crimson;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link_A = styled(Link)`
  text-decoration: underline;
  font-size: 25px;
  padding-left: 1rem;
  padding-right: 2rem;
  color: #fff;
  font-family: sans-serif;
`;
const Navbar:FC = () => {
  return (
    <Nav>
      <Link_A to="/">Задания</Link_A>
      <div>
        <Link_A to="/number">Number</Link_A>
        <Link_A to="/form">Form</Link_A>
        <Link_A to="/todo">Todo</Link_A>
      </div>
    </Nav>
  );
};

export default Navbar;
