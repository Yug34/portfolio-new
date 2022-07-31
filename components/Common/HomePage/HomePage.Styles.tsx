import styled from "styled-components";

export const Strike = styled.div`
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
    background: black;
    animation-name: strike;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;

export const TypedTitle = styled.div`
  display: flex;
  flex-direction: row;
`;