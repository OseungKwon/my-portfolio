import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<number>(1500);
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize(window.innerWidth);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: center;
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

const BottomMenu = () => {
  const size = useWindowSize();
  console.log(size);
  return (
    <>
      {size <= 600 && (
        <Bottom>
          <Link to="/project/importh" className="post">
            프로젝트
          </Link>
          <Link to="/activity" className="post">
            활동
          </Link>
        </Bottom>
      )}
    </>
  );
};

export default BottomMenu;
