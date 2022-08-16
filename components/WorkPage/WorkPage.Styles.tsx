import styled from "styled-components";

export const Title = styled.div`
  font-weight: 600;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.div`
    font-style: italic;
`;

export const Supervisors = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  column-gap: 4px;
  font-style: italic;
`;

export const CompanyNameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  font-weight: 600;
`;

export const WorkContent = styled.div`
  margin-left: 12px;
`;

export const Work = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #555555;
`;

export const Line = styled.div`
    height: 2px;
    background-color: #777777;
    border-radius: 2px;
    width: 100%;
`;