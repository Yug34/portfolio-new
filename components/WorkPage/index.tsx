import styled from "styled-components";
import {Hover} from "../Common/Hover";

const Title = styled.div`
  font-weight: 600;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Date = styled.div``;

const Supervisors = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  column-gap: 4px;
`;

const CompanyNameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
`;

const WorkContent = styled.div`
  margin-left: 12px;
`;

const Work = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const WorkPage = () => {
    return (
        <>
            <TitleContainer>
                <Title>Software Development Engineer 1 (SDE-I)</Title>
                <Date>Dec.2021 -- Present</Date>
            </TitleContainer>
            <CompanyNameContainer>
                {"--"}
                <Hover
                    externalHref={true}
                    href={"https://neverinstall.com"}
                    monoState
                    fontWeight={600}
                >
                    Neverinstall
                </Hover>
            </CompanyNameContainer>
            <Work>
                {[
                    "Optimized the objective load speed of the platform by decreasing code-size, minimizing HTTP requests, CSS sprites, and so on. Significantly optimized the perceived load speed of the platform by switching up how the platform serves a stream to the user.",
                    "Designed and implemented database schemas, and APIs for various microservices.",
                    "Streamlined interfaces of front-end components, with the goal to make them flexible and re-usable.",
                    "Translated Figma designs to pixel-perfect responsive designs leveraging Next.js with Styled-Components & SCSS.",
                    "This being an early-stage startup, I had the chance to take up opportunities to contribute to, and provide value for the company outside of engineering, for instance, helping with DevRel."
                ].map((item) => (
                    <div style={{display: 'flex'}}>
                        •<WorkContent dangerouslySetInnerHTML={{__html: item}}/>
                    </div>
                ))}
            </Work>
            <TitleContainer>
                <Title>Research intern (on hiatus)</Title>
                <Date>Oct.2021 -- June 2022</Date>
            </TitleContainer>
            <CompanyNameContainer>
                {"--"}
                <Hover
                    externalHref={true}
                    href={"https://sail.cs.queensu.ca/members.html"}
                    monoState
                    fontWeight={600}
                >
                    Queen's University, SAIL
                </Hover>
            </CompanyNameContainer>
            <Supervisors>
                Supervised by:
                <Hover externalHref={true} href="https://scholar.google.com/citations?user=XS9QH_UAAAAJ&hl=en&oi=ao"
                       monoState fontWeight={600}>
                    Prof. Bram Adams
                </Hover>
                from
                <Hover externalHref={true} href={"https://mcis.cs.queensu.ca/"} monoState fontWeight={600}>
                    MCIS
                </Hover> &
                <Hover externalHref={true} href={"https://scholar.google.com/citations?user=bPnuCiMAAAAJ&hl=fr"}
                       monoState fontWeight={600}>
                    Dr. Eduardo Fernandes
                </Hover>
                from
                <Hover
                    externalHref={true}
                    href={"https://sail.cs.queensu.ca/members.html"}
                    monoState
                    fontWeight={600}
                >
                    SAIL
                </Hover>
            </Supervisors>
            <Work>
                {[
                    "We’re conducting a multi-vocal literature review on the performance analysis of web applications and their performance optimization methods.",
                    "We plan to submit a journal paper based on our research, possibly to the Empirical Software Engineering journal.",
                    "Other than research, worked on fixing issues of the SAIL website, as well as refactoring and refining its code.",
                    "Implemented an interactive publications browser with D3.js."
                ].map((item) => (
                    <div style={{display: 'flex'}}>
                        •<WorkContent dangerouslySetInnerHTML={{__html: item}}/>
                    </div>
                ))}
            </Work>
        </>
    );
};

export default WorkPage;