import styled from "styled-components";

export const Strike = styled.div<{ color?: string; top?: number; }>`
  width: fit-content;
  font-size: 24px;
  min-height: 30px;
  @keyframes strike {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  position: relative;

  &::after {
    content: ' ';
    position: absolute;
    top: ${(props) => props.top || 50}%;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${(props) => props.color || "black"};
    animation-name: strike;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;

export const NameIntro = styled.div`
  width: 100%;
  font-size: 40px;
  align-items: flex-end;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

export const Greeting = styled.div`
  font-family: 'Dancing Script', cursive;
`;

