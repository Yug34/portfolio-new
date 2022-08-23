import styled from "styled-components";
import {px2vw} from "../../utils";
import {Flex} from "../Common/Flex";

export const RatingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;
`;

export const Rating = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  margin: 8px 0;
  height: 2px;
  background-color: #777777;
  border-radius: 2px;
  width: 100%;
`;

export const CommentText = styled.div`
  margin-top: 12px;
  margin-left: clamp(8px, ${px2vw(12)}, 12px);
`;

export const AuthorDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Author = styled.div`
  font-weight: 600;
`;

export const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 4px;
  width: 100%;
`;

export const FormInput = styled.input`
  width: 320px;
  font-size: 14px;
  max-width: 90vw;
  border: none;
  border-radius: 16px;
  padding: 4px 12px;
  height: 32px;

  &:focus {
    outline: none;
  }
`;

export const FormSubmit = styled.input`
  width: 140px;
  height: 32px;
  cursor: pointer;
  background: #FFFFFF;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;

  border: none;
  border-radius: 16px;
  padding: 4px 6px;

  &:focus {
    outline: none;
  }
`;

export const Loader = styled(Flex)`
  width: 140px;
  height: 32px;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;

  cursor: not-allowed;

  background: #FFFFFF;
  border-radius: 16px;
`;

export const Spinner = styled.div`
  border: 2px solid #f3f3f3;
  border-right: 2px solid #a0a0a0;
  border-left: 2px solid #a0a0a0;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const GradientBox = styled.div<{background?: string;}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  position: relative;
  box-sizing: border-box;

  background-clip: padding-box;
  border: solid 2px transparent;
  border-radius: 16px;

  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: ${(props) => props.background || "linear-gradient(90deg, rgba(77,79,218,1) 0%, rgba(159,0,116,1) 50%, rgba(255,158,232,1) 100%)"};
  }
`;

export const DateContainer = styled.div`
  color: #888888;
  font-style: italic;
`;