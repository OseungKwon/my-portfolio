import React, { Suspense } from "react";
import SideBar from "../components/SideBar";
import styled, { keyframes } from "styled-components";
import Project from "../components/Project";
// import Carousel from "../components/Carousel";
import SubContent from "../components/SubContent";

import { projects } from "../assets/db";
import { useParams } from "react-router-dom";
import BottomMenu from "../components/BottomMenu";

const Carousel = React.lazy(() => import("../components/Carousel"));

const moveRight = keyframes`
  0%{ left: -2rem; };
  100%{ left: 0px; };
`;

const Wrapper = styled.div`
  position: relative;
  top: 4rem;
  display: flex;
  flex-direction: row;
  @media (max-width: 1500px) {
    flex-direction: column;
  }
`;

const SideArea = styled.div`
  position: relative;
  left: -2rem;
  flex: 1;
  height: 100%;
  animation: ${moveRight} 0.5s 0.2s forwards;
`;

const ContentArea = styled.div`
  position: relative;
  flex: 5;
  display: flex;
  flex-direction: column;
`;

const Sub = styled.div`
  display: flex;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
type PropsT = {
  id: string;
  title: string;
  explain: string;
  contribute: string;
  grow: string;
  github: string;
  images: string[];
  tech: string;
  notion?: string;
  member: string;
  page?: string;
};

export default function Projects(): React.ReactElement {
  const { id } = useParams();
  console.log(id);
  const project: PropsT = projects.filter((project) => project.id === id)[0];

  return (
    <Wrapper>
      <SideArea>
        <SideBar id={project.id} />
      </SideArea>
      <ContentArea>
        <Project project={project} />
        <Sub>
          <Suspense fallback={<div></div>}>
            <Carousel images={project.images} />
          </Suspense>
          <SubContent project={project} />
        </Sub>
      </ContentArea>
      <BottomMenu />
    </Wrapper>
  );
}
