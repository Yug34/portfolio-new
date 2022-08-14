import styled from "styled-components";

interface GradientTextProps {
    background?: string;
    fontSize?: number;
    fontWeight?: number;

}

export const GradientText = styled.div<GradientTextProps>`
  width: fit-content;
  display: inline-block;
  margin: 0;
  font-weight: ${(props) => (props.fontWeight || 600)};
  font-size: ${(props) => `${props.fontSize || 16}px`};
  background: ${(props) => props.background || "linear-gradient(90deg, rgba(77,79,218,1) 0%, rgba(159,0,116,1) 80%, rgba(255,158,232,1) 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;