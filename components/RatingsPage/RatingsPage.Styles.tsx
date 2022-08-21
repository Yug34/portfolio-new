import styled from "styled-components";
import {px2vw} from "../../utils";

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

export const DateContainer = styled.div`
  color: #888888;
  font-style: italic;
`;