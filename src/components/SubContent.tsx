import React from "react";
import styled, { keyframes } from "styled-components";
import MarkdownPreview from "@uiw/react-markdown-preview";

const moveLeft = keyframes`
  0%{ right: -2rem; };
  100%{ right: 0px; };
`;

const Space = styled.div`
  position: relative;
  right: -2rem;
  overflow-y: scroll;
  flex: 4;
  background-color: #fff;
  margin: 0 3rem;
  padding: 1.5rem;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  height: 28rem;
  border-radius: 7px;
  border: 1px solid #ddd;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  animation: ${moveLeft} 0.5s 0.2s forwards;

  line-height: 1.3rem;
  & .content {
    white-space: pre-line;
    margin: 0.8rem;
    font-size: 1.3rem;
    font-weight: bold;
    span,
    div {
      font-size: 1rem;
      font-weight: normal;
      line-height: 1.1rem;
    }
    div {
    }
  }
  a {
    text-decoration: underline;
    color: #0366db;
  }

  @media (max-width: 1500px) {
    flex: 5;
    margin: 3rem;
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

const SubContent: React.FC<PropsAllT> = ({ project }) => {
  return (
    <Space>
      <span className="content">
        {project.page && (
          <a
            href={project.page}
            target="_blank"
            rel="noopener noreferrer" //tabnapping 방지
          >
            {project.title}
          </a>
        )}
        &nbsp;
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer" //tabnapping 방지
        >
          Github
        </a>
        &nbsp;
        {project.notion && (
          <a
            href={project.notion}
            target="_blank"
            rel="noopener noreferrer" //tabnapping 방지
          >
            Notion
          </a>
        )}
      </span>
      <div className="content">
        Tech: &nbsp;<span>{project.tech}</span>
      </div>
      <div className="content">
        Member: &nbsp;<span>{project.member}</span>
      </div>
      <div className="content">
        Growth: &nbsp;
        <MarkdownPreview source={project.contribute} />
      </div>
    </Space>
  );
};

export default SubContent;
