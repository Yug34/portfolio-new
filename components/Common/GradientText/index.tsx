import styled from "styled-components";

export const GradientText = styled.div<{background?: string; fontSize?: number;}>`
    font-size: ${(props) => `${props.fontSize || 16}px`};
    background: ${(props) => props.background || "linear-gradient(90deg, rgba(77,79,218,1) 0%, rgba(159,0,116,1) 20%, rgba(255,158,232,1) 60%)"};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
`;