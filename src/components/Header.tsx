import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const HeaderWrapper = styled.div`
  z-index: 100;
  position: fixed;
  padding: 0 5rem;
  background-color: #222222;
  color: white;
  width: 100%;
  height: 4rem;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Menu = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  & a {
    padding: 1rem;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const Introduction = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  & span {
    color: #ff7424;
  }
`;

const MenuLink = styled(Link)`
  color: white;
  &:hover {
    color: #cfcfcf;
    transition: all 0.2s ease-in-out;
  }
`;

const Header = (props: Props) => {
  return (
    <HeaderWrapper>
      <Introduction>
        <Link to="/" style={{ color: "white" }}>
          권오승's &nbsp;<span>Portfolio</span>
        </Link>
      </Introduction>
      <Menu>
        <MenuLink to="project/importh">프로젝트</MenuLink>
        <MenuLink to="activity">활동</MenuLink>
        <MenuLink to="/">About</MenuLink>
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
