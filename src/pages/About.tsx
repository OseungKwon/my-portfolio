import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

type indexT = {
  index: number;
  color: string;
};

const changeText = (color: string) => keyframes`
  0%{color: gray}
  100%{color: ${color}}
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Space = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Quote = styled.div<indexT>`
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  color: gray;

  animation: ${(props) => changeText(props.color)} 1s
    ${(props) => props.index / 2}s forwards;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
  @media (max-width: 460px) {
    font-size: 2rem;
  }
  @media (max-width: 460px) {
    font-size: 1.8rem;
  }
`;

const Tags = styled.div`
  padding: 2rem;
  color: gray;
  font-weight: bold;
  font-size: 1.6rem;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  font-size: 1.2rem;

  & .post {
    margin: 1rem;
    color: white;
    width: 10rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 10px;

    &:hover {
      font-weight: bold;
      background-color: rgba(0, 0, 0, 0.85);
    }
  }
`;

const datas = [
  { id: 1, text: "안녕하세요", color: "black" },
  { id: 2, text: "어제보다 오늘 더 성장하는", color: "#ff7424" },
  { id: 3, text: "신입 프론트엔드 개발자", color: "black" },
  { id: 4, text: "권오승입니다", color: "black" }
];

const About = () => {
  return (
    <Wrapper>
      <Space>
        {datas.map((data) => (
          <Quote key={data.id} index={data.id} color={data.color}>
            {data.text}
          </Quote>
        ))}
      </Space>
      <Tags>#개발을 좋아하는 &nbsp;&nbsp;#끊임없이 생각하는</Tags>
      <Bottom>
        <Link to="project/importh" className="post">
          프로젝트
        </Link>
        <Link to="activity" className="post">
          활동
        </Link>
      </Bottom>
    </Wrapper>
  );
};

export default About;
