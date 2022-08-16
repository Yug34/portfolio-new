import styled from "styled-components";
import {px2vw, breakpoints} from "../../utils";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Strike = styled.div<{ color?: string; top?: number; duration?: number; function?: string; fontColor?: string; strikeHeight?: number; }>`
  width: fit-content;
  white-space: nowrap;
  font-size: clamp(22px, ${px2vw(24)}, 24px);
  min-height: 30px;
  color: ${(props) => props.fontColor || "rgb(63, 62, 85)"};
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
    border-radius: ${(props) => `${props.strikeHeight || 3}px`};
    height: ${(props) => `${props.strikeHeight || 3}px`};
    background: ${(props) => props.color || "#3F3E55"};
    animation-name: strike;
    animation-duration: ${(props) => props.duration || 1}s;
    animation-timing-function: ${(props) => props.function || "fade-out"};
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;

export const TypedTitle = styled.div<{fontColor?: string;}>`
  font-size: clamp(20px, ${px2vw(24)}, 24px);
  min-height: 30px;
  color: ${(props) => props.fontColor || "rgb(63, 62, 85)"};
`;

export const LineUp = styled.div`
  animation: 2s lineUp ease-out 1;

  @keyframes lineUp {
    0% {
      opacity: 0;
      transform: translateY(80%);
    }
    20% {
      opacity: 0;
    }
    50% {
      opacity: 1;
      transform: translateY(0%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
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

export const Question = styled.div`
  margin-top: 24px;
  font-size: 28px;
  font-weight: 600;
`;

export const Motivation = styled.div`
  margin: 12px 0 12px 0;
  font-size: 22px;
  font-weight: 600;
`;

export const Greeting = styled.div`
  font-size: clamp(32px, ${px2vw(40)}, 40px);
  font-family: 'Dancing Script', cursive;
  white-space: nowrap;
  @media (max-width: ${breakpoints.tabletWidth}px) {
    font-size: clamp(24px, ${px2vw(30 * (breakpoints.desktopFullWidth / breakpoints.tabletWidth))}, 30px);
  }
`;
