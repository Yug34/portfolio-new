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

interface WorkItem {
    title: string;
    date: string;
    linkedCompany?: boolean;
    linkedCompanyUrl?: string;
    companyName: string;
    workStuff: string[];
    supervisors?: JSX.Element;
}

const workExp: WorkItem[] = [
    {
        title: "Software Development Engineer 1 (SDE-I)",
        date: "Dec.2021 -- Present",
        linkedCompany: true,
        linkedCompanyUrl: 'https://neverinstall.com',
        companyName: 'Neverinstall',
        workStuff: [
            "Optimized the objective load speed of the platform by decreasing code-size, minimizing HTTP requests, CSS sprites, and so on. Significantly optimized the perceived load speed of the platform by switching up how the platform serves a stream to the user.",
            "Designed and implemented database schemas, and APIs for various microservices.",
            "Streamlined interfaces of front-end components, with the goal to make them flexible and re-usable.",
            "Translated Figma designs to pixel-perfect responsive designs leveraging Next.js with Styled-Components & SCSS.",
            "This being an early-stage startup, I had the chance to take up opportunities to contribute to, and provide value for the company outside of engineering, for instance, helping with DevRel."
        ]
    },
    {
        title: "Research intern (on hiatus)",
        date: "Oct.2021 -- June 2022",
        linkedCompany: true,
        linkedCompanyUrl: 'https://sail.cs.queensu.ca/members.html',
        companyName: "Queen's University, SAIL",
        workStuff: [
            "Optimized the objective load speed of the platform by decreasing code-size, minimizing HTTP requests, CSS sprites, and so on. Significantly optimized the perceived load speed of the platform by switching up how the platform serves a stream to the user.",
            "Designed and implemented database schemas, and APIs for various microservices.",
            "Streamlined interfaces of front-end components, with the goal to make them flexible and re-usable.",
            "Translated Figma designs to pixel-perfect responsive designs leveraging Next.js with Styled-Components & SCSS.",
            "This being an early-stage startup, I had the chance to take up opportunities to contribute to, and provide value for the company outside of engineering, for instance, helping with DevRel."
        ],
        supervisors: (
            <div style={{width: '100%', display: 'flex', flexWrap: 'nowrap'}}>
                Supervised by: <Hover externalHref="true" href="https://scholar.google.com/citations?user=XS9QH_UAAAAJ&hl=en&oi=ao" monoState fontWeight="600">Prof. Bram Adams</Hover> from MCIS & Dr. Eduardo Fernandes from SAIL
            </div>
        )
    }
];

const WorkPage = () => {
    return (
        <>
            {workExp.map((work) => (
                <>
                    <TitleContainer>
                        <Title>{work.title}</Title>
                        <Date>{work.date}</Date>
                    </TitleContainer>
                    <CompanyNameContainer>
                        {"--"}
                        {work.linkedCompany ? (
                            <Hover
                                externalHref={true}
                                href={work.linkedCompanyUrl}
                                monoState
                                fontWeight={600}
                            >
                                {work.companyName}
                            </Hover>
                        ) : (
                            <>{work.companyName}</>
                        )}
                    </CompanyNameContainer>
                    {work.supervisors && (
                        work.supervisors
                    )}
                    <Work>
                        {work.workStuff.map((item) => (
                            <div style={{display: 'flex'}}>
                                •<WorkContent dangerouslySetInnerHTML={{__html: item}}/>
                            </div>
                        ))}
                    </Work>
                </>
            ))}
        </>
    );
};

export default WorkPage;