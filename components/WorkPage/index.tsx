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
  font-style: italic;
`;

const CompanyNameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  column-gap: 6px;
  font-weight: 600;
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

const Line = styled.div`
    height: 2px;
    background-color: #777777;
    border-radius: 2px;
    width: 100%;
`;

const WorkPage = () => {
    return (
        <div style={{display: "flex", flexDirection: 'column', rowGap: '12px'}}>
            <div>
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
                        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}} key={item}>
                            •<WorkContent dangerouslySetInnerHTML={{__html: item}}/>
                        </div>
                    ))}
                </Work>
            </div>

            <Line />

            <div>
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
                        Queen&apos;s University, SAIL
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
                        "We&apos;re conducting a multi-vocal literature review on the performance analysis of web applications and their performance optimization methods.",
                        "We plan to submit a journal paper based on our research, possibly to the Empirical Software Engineering journal.",
                        "Other than research, worked on fixing issues of the SAIL website, as well as refactoring and refining its code."
                    ].map((item) => (
                        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}} key={item}>
                            •<WorkContent>{item}</WorkContent>
                        </div>
                    ))}
                    <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}}>
                        •
                        <WorkContent>
                            Worked on an
                            <Hover
                                style={{marginLeft: '4px'}}
                                monoState
                                externalHref={true}
                                fontWeight={600}
                                href={"https://sail.cs.queensu.ca/publications.html"}
                            >
                                interactive publications browser
                            </Hover> with D3.js.
                        </WorkContent>
                    </div>
                </Work>
            </div>

            <Line />

            <div>
                <TitleContainer>
                    <Title>Undergraduate Researcher</Title>
                    <Date>Sept. 2021 -- Dec. 2021</Date>
                </TitleContainer>
                <CompanyNameContainer>
                    {"--"}
                    <Hover
                        externalHref={true}
                        href={"https://www.isro.gov.in/"}
                        monoState
                        fontWeight={600}
                    >
                        Indian Space Research Organization, (ISRO)
                    </Hover>
                </CompanyNameContainer>
                <Supervisors>
                    Supervised by:
                    <Hover externalHref={true} href="https://www.researchgate.net/profile/S-Singh-28"
                           monoState fontWeight={600}>
                            Dr. SK Singh
                    </Hover>
                </Supervisors>
                <Work>
                    {[
                        "Researched over identification of Snow Cover Areas and identifying temporal changes in the Himalayas region.",
                        "Helped in developing Convolutional Neural Networks with TensorFlow and Keras to identify Snow Cover Areas and to predict patterns in the temporal changes.",
                        "Set up the environment for the development of the Convolutional Neural Network models, and containerized it with Docker."
                    ].map((item) => (
                        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}} key={item}>
                            •<WorkContent>{item}</WorkContent>
                        </div>
                    ))}
                </Work>
            </div>

            <Line />

            <div>
                <TitleContainer>
                    <Title>Research Intern</Title>
                    <Date>Aug. 2020 -- Feb. 2022</Date>
                </TitleContainer>
                <CompanyNameContainer>
                    -- University of Manitoba
                </CompanyNameContainer>
                <Supervisors>
                    Supervised by:
                    <Hover externalHref={true} href="https://scholar.google.com/citations?user=1lVSmQwAAAAJ&hl=en"
                           monoState fontWeight={600}>
                            Prof. Wouter Deconinck
                    </Hover>
                </Supervisors>
                <Work>
                <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}}>
                        •<WorkContent>
                        Implemented a system to locate data resources for Jefferson Lab&apos;s
                            <Hover
                                style={{marginLeft: '4px'}}
                                monoState
                                externalHref={true}
                                fontWeight={600}
                                href={"https://moller.jlab.org/moller_root/"}
                            >
                                MOLLER Experiment
                            </Hover>
                            at 
                            <Hover
                                style={{marginLeft: '4px'}}
                                monoState
                                externalHref={true}
                                fontWeight={600}
                                href={"https://github.com/jeffersonlab/remoll"}
                            >
                                remoll
                            </Hover>
                            irrespective of the directory it is started from with C++, making remoll function from any directory.
                        </WorkContent>
                </div>
                <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}}>
                        •<WorkContent>
                        Assisted Prof. Wouter containerize remoll with Docker and Singularity, allowing users to remotely run remoll on 
                            <Hover
                                style={{marginLeft: '4px', marginRight: '4px'}}
                                monoState
                                externalHref={true}
                                fontWeight={600}
                                href={"https://osg-htc.org/"}
                            >
                                Open Science Grid (OSG)
                            </Hover>
                        for high throughput simulations. Also assisted in finding and resolving bugs.
                        </WorkContent>
                </div>
                    {[
                        "Wrote HTCondor job scripts and bash scripts for simulation job submission, and Python scripts for data storage and data retrieval from OSG.",
                        "Set up a Binder workflow for remote data analysis of ROOT output files from OSG and other environments with Jupyter/Python and uproot."
                    ].map((item) => (
                        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}} key={item}>
                            •<WorkContent>{item}</WorkContent>
                        </div>
                    ))}
                </Work>
            </div>

            <Line />

            <div>
                <TitleContainer>
                    <Title>Student Developer</Title>
                    <Date>Dec.2021 -- Present</Date>
                </TitleContainer>
                <CompanyNameContainer>
                    -- IEEE, VGEC Student Branch
                </CompanyNameContainer>
                <Work>
                    {[
                        "Developed the responsive components and pages using React for my college's IEEE branch. Automated workflows with Node.",
                        "Implemented various subsystems to assist other branches of IEEE VGEC SB, like an automated email system to send emails from an Excel sheet of data, saving days worth of effort.",
                        "Supervised junior student developers, teaching them the basic principles of software engineering and the tools necessary for it. Like version control, writing maintainable and refactorable code, and such."
                    ].map((item) => (
                        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}} key={item}>
                            •<WorkContent>{item}</WorkContent>
                        </div>
                    ))}
                </Work>
            </div>
        </div>
    );
};

export default WorkPage;