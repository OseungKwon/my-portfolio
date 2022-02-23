import React from "react";
import styled, { keyframes } from "styled-components";
import MarkdownPreview from "@uiw/react-markdown-preview";

const moveBottom = keyframes`
  0%{ top: -2rem; };
  100%{ top: 0px; };
`;

const Space = styled.div`
  position: relative;
  top: -2rem;
  background-color: white;
  margin: 3rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  border: 1px solid #ddd;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  animation: ${moveBottom} 0.5s 0.2s forwards;

  img {
    width: 20rem;
  }
`;

const Content = styled.div`
  & .title {
    font-size: 2rem;
    font-weight: bold;
    background-color: rgba(237, 140, 148, 0.42);
  }
  & .subtitle {
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
  & .grow {
    line-height: 1.8rem;
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

type PropsAllT = {
  project: PropsT;
};

const Project: React.FC<PropsAllT> = ({ project }) => {
  console.log(project.title);
  return (
    <Space>
      <Content>
        <span className="title">{project.title}</span>
        <div className="explain">
          <div className="subtitle">Explain</div>
          <MarkdownPreview
            source={project.explain}
            style={{ whiteSpace: "pre-wrap" }}
          />
        </div>
        <div>
          <div className="subtitle">Contribute</div>
          <MarkdownPreview source={project.grow} className="grow" />
        </div>
      </Content>
    </Space>
  );
};
export default Project;
