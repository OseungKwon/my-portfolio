import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import handpainting from "../assets/logo/handpainting(logo).png";
import importH from "../assets/logo/import-H(logo).png";
import qlick from "../assets/logo/qlick(logo).png";

const Space = styled.div`
  position: relative;
  background-color: #2f2f2f;
  color: white;
  margin: 3rem;
  margin-right: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  border: 1px solid #ddd;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);

  & .active {
    box-shadow: 5px 5px rgb(255, 116, 36);
  }
  img {
    width: 20rem;
    @media (max-width: 1500px) {
      width: 13rem;
    }

    &:hover {
      transition: all 0.3s ease-in-out;
      box-shadow: 5px 5px rgb(255, 116, 36);
    }
  }
  a {
    padding: 1rem;
    @media (max-width: 600px) {
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 1500px) {
    justify-content: center;
    margin: 3rem;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (max-width: 1200px) {
    justify-content: center;
    margin: 3rem;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (max-width: 600px) {
    justify-content: center;
    margin: 3rem;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem;
  border-bottom: 1px solid #aaa;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    display: none;
  }
  @media (max-width: 600px) {
    display: flex;
  }
`;

type PropsT = {
  id: string;
};

const SideBar: React.FC<PropsT> = ({ id }) => {
  return (
    <Space>
      <Title>Projects</Title>
      <Link to="/project/importh">
        <img
          src={importH}
          alt="importH"
          className={id === "importh" ? "active" : ""}
        />
      </Link>
      <Link to="/project/handpainting">
        <img
          src={handpainting}
          alt="handpainting"
          className={id === "handpainting" ? "active" : ""}
        />
      </Link>
      <Link to="/project/qlick">
        <img
          src={qlick}
          alt="qlick"
          className={id === "qlick" ? "active" : ""}
        />
      </Link>
    </Space>
  );
};

export default SideBar;
