import React from "react";
import styled, { keyframes } from "styled-components";
import MarkdownPreview from "@uiw/react-markdown-preview";

type styleP = {
  bgcolor: string;
  index: number;
};

const moveTop = keyframes`
  0%{ bottom: -2rem; };
  100%{ bottom: 0px; };
`;

const Space = styled.div<styleP>`
  position: relative;
  bottom: -2rem;
  width: 35rem;
  background-color: white;
  margin: 3rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  border: 1px solid #ddd;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  animation: ${moveTop} 0.5s ${(props) => `${props.index / 10}s`} forwards;

  @media (max-width: 600px) {
    width: 80%;
    margin: 1rem;
  }

  & .title {
    padding-bottom: 2rem;
    color: #222222;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: underline;
  }
  & .subtitle {
    padding-bottom: 1rem;
    font-size: 1.2rem;
  }
  & .content {
    line-height: 2rem;
  }

  &:hover {
    background-color: ${(props) => props.bgcolor};
  }
`;

type PropsT = {
  id: string;
  title: string;
  link: string;
  subtitle: string;
  content: string;
  bgcolor: string;
};

type PropsAllT = {
  activity: PropsT;
  index: number;
};

const Activity: React.FC<PropsAllT> = ({ activity, index }) => {
  return (
    <Space key={activity.id} bgcolor={activity.bgcolor} index={index}>
      <div className="title">
        <a href={activity.link}>{activity.title}</a>
      </div>
      <MarkdownPreview
        source={activity.subtitle}
        className="subtitle"
      ></MarkdownPreview>
      <MarkdownPreview
        source={activity.content}
        className="content"
      ></MarkdownPreview>
    </Space>
  );
};

export default Activity;
