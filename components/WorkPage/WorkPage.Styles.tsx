import styled from "styled-components";

export const Title = styled.div`
  font-weight: 600;
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const Date = styled.div`
  font-style: italic;
  @media (max-width: 1023px) {
    width: 100%;
    text-align: right;
  }
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

export const Line = styled.div`
  margin: 12px 0;
  height: 2px;
  background-color: #777777;
  border-radius: 2px;
  width: 100%;
`;