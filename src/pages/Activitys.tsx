import React from "react";
import styled from "styled-components";
import Activity from "../components/Activity";
import { activitys } from "../assets/db";
import BottomMenu from "../components/BottomMenu";

const Wrapper = styled.div`
  position: relative;
  top: 4rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;

  @media (max-width: 1800px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Activitys = () => {
  return (
    <Wrapper>
      {activitys.map((activity, index) => (
        <Activity activity={activity} index={index} />
      ))}
      <BottomMenu />
    </Wrapper>
  );
};

export default Activitys;
