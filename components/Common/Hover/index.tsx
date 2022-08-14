import styled from "styled-components";

interface HoverProps {
    monoState: boolean;
    isCurrent?: boolean;
    monoTextGradient?: string;
    monoLineGradient?: string;
    currentActiveTextGradient?: string;
    currentInactiveTextGradient?: string;
    fontWeight?: number;
}

export const Hover = styled.div<HoverProps>`
  display: inline-block;
  position: relative;
  cursor: pointer;
  background: ${(props) => props.monoState ? (props.monoTextGradient || props.monoLineGradient || "linear-gradient(90deg, rgba(77,79,218,1) 0%, rgba(159,0,116,1) 80%, rgba(255,158,232,1) 100%)") : (props.isCurrent ? (props.currentActiveTextGradient || '#191924') : (props.currentInactiveTextGradient || '#8C8C92'))};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: ${(props) => props.fontWeight || 500};
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: ${(props) => props.isCurrent ? '' : 'scaleX(0)'};
    height: 2px;
    bottom: 0;
    left: 0;
    border-radius: 3px;
    background: ${(props) => props.monoState ? (props.monoLineGradient || props.monoTextGradient || "linear-gradient(90deg, rgba(77,79,218,1) 0%, rgba(159,0,116,1) 80%, rgba(255,158,232,1) 100%)") : (props.isCurrent ? (props.currentActiveTextGradient || '#191924') : (props.currentInactiveTextGradient || '#8C8C92'))};
    transform-origin: ${(props) => props.isCurrent ? '' : 'bottom right'};
    transition: ${(props) => props.isCurrent ? '' : 'transform 0.25s ease-out'};
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;