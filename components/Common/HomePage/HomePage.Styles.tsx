import styled from "styled-components";

export const Strike = styled.div<{color: string;}>`
  width: fit-content;
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
    top: 50%;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${(props) => props.color || "black"};
    animation-name: strike;
    animation-duration: 2s;
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

export const AnimContainer = styled.div`
  width: 100%;
  background: #f0f0f0;

  display: flex;
  flex-direction: column;
`;

export const EngineerTyped = styled.div`
  width: 100%;
`;

export const TypedTitle = styled.div`
  display: flex;
  flex-direction: row;
`;