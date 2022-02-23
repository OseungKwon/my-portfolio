import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";

const moveTop = keyframes`
  0%{ bottom: -2rem; };
  100%{ bottom: 0px; };
`;

const Space = styled.div`
  position: relative;
  bottom: -2rem;
  flex: 6;
  background-color: #fff;
  margin: 0 3rem;
  display: flex;
  //flex-direction: column;
  height: 28rem;
  border-radius: 7px;
  border: 1px solid #ddd;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  animation: ${moveTop} 0.5s 0.2s forwards;

  @media (max-width: 1500px) {
    flex: 5;
    margin: 3rem;
  }
`;

const Wrapper = styled.div`
  background: #fff;
  border-radius: 7px;
  width: 100%;
  overflow: hidden;
  /* white-space: nowrap; */
  & > div {
    display: flex;
  }
  img {
    border-radius: 7px;
    width: 100%;
    object-fit: cover;
  }
  & .area {
    width: 100%;
    display: flex;
    height: 100%;
    flex-shrink: 0;
  }
`;

type PropsT = {
  images: string[];
};

const Carousel: React.FC<PropsT> = ({ images }: PropsT) => {
  const TOTAL_SLIDES = images.length - 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLInputElement>(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    const imageInterval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => {
      clearInterval(imageInterval);
    };
  }, [currentSlide]);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);

  return (
    <Space>
      <Wrapper>
        <div ref={slideRef}>
          {images.map((image) => (
            <div className="area">
              <img src={image} alt="img" />
            </div>
          ))}
        </div>
      </Wrapper>
    </Space>
  );
};

export default Carousel;
