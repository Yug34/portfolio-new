import {Hover} from "../Common/Hover";
import * as Styles from "./WorkPage.Styles";

const WorkPage = () => {
    return (
        <div style={{display: "flex", flexDirection: 'column', rowGap: '12px'}}>
            <div>
                <Styles.TitleContainer>
                    <Styles.Title>Software Development Engineer 1 (SDE-I)</Styles.Title>
                    <Styles.Date>Dec.2021 -- Present</Styles.Date>
                </Styles.TitleContainer>
                <Styles.CompanyNameContainer>
                    {"--"}
                    <Hover
                        externalHref={true}
                        href={"https://neverinstall.com"}
                        monoState
                        fontWeight={600}
                    >
                        Neverinstall
                    </Hover>
                </Styles.CompanyNameContainer>
                <Styles.Work>
                    {[
                        "Optimized the objective load speed of the platform by decreasing code-size, minimizing HTTP requests, CSS sprites, and so on. Significantly optimized the perceived load speed of the platform by switching up how the platform serves a stream to the user.",
                        "Designed and implemented database schemas, and APIs for various microservices.",
                        "Streamlined interfaces of front-end components, with the goal to make them flexible and re-usable.",
                        "Translated Figma designs to pixel-perfect responsive designs leveraging Next.js with Styled-Components & SCSS.",
                        "This being an early-stage startup, I had the chance to take up opportunities to contribute to, and provide value for the company outside of engineering, for instance, helping with DevRel."
                    ].map((item) => (
                        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}} key={item}>
                            •<Styles.WorkContent dangerouslySetInnerHTML={{__html: item}}/>
                        </div>
                    ))}
                </Styles.Work>
            </div>

            <Styles.Line />

            <div>
                <Styles.TitleContainer>
                    <Styles.Title>Research intern (on hiatus)</Styles.Title>
                    <Styles.Date>Oct.2021 -- June 2022</Styles.Date>
                </Styles.TitleContainer>
                <Styles.CompanyNameContainer>
                    {"--"}
                    <Hover
                        externalHref={true}
                        href={"https://sail.cs.queensu.ca/members.html"}
                        monoState
                        fontWeight={600}
                    >
                        Queen&apos;s University, SAIL
                    </Hover>
                </Styles.CompanyNameContainer>
                <Styles.Supervisors>
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
                </Styles.Supervisors>
                <Styles.Work>
                    {[
                        "We're conducting a multi-vocal literature review on the performance analysis of web applications and their performance optimization methods.",
                        "We plan to submit a journal paper based on our research, possibly to the Empirical Software Engineering journal.",
                        "Other than research, worked on fixing issues of the SAIL website, as well as refactoring and refining its code."
                    ].map((item) => (
                        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}} key={item}>
                            •<Styles.WorkContent>{item}</Styles.WorkContent>
                        </div>
                    ))}
                    <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}}>
                        •
                        <Styles.WorkContent>
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
                        </Styles.WorkContent>
                    </div>
                </Styles.Work>
            </div>

            <Styles.Line />

            <div>
                <Styles.TitleContainer>
                    <Styles.Title>Undergraduate Researcher</Styles.Title>
                    <Styles.Date>Sept. 2021 -- Dec. 2021</Styles.Date>
                </Styles.TitleContainer>
                <Styles.CompanyNameContainer>
                    {"--"}
                    <Hover
                        externalHref={true}
                        href={"https://www.isro.gov.in/"}
                        monoState
                        fontWeight={600}
                    >
                        Indian Space Research Organization, (ISRO)
                    </Hover>
                </Styles.CompanyNameContainer>
                <Styles.Supervisors>
                    Supervised by:
                    <Hover externalHref={true} href="https://www.researchgate.net/profile/S-Singh-28"
                           monoState fontWeight={600}>
                            Dr. SK Singh
                    </Hover>
                </Styles.Supervisors>
                <Styles.Work>
                    {[
                        "Researched over identification of Snow Cover Areas and identifying temporal changes in the Himalayas region.",
                        "Helped in developing Convolutional Neural Networks with TensorFlow and Keras to identify Snow Cover Areas and to predict patterns in the temporal changes.",
                        "Set up the environment for the development of the Convolutional Neural Network models, and containerized it with Docker."
                    ].map((item) => (
                        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}} key={item}>
                            •<Styles.WorkContent>{item}</Styles.WorkContent>
                        </div>
                    ))}
                </Styles.Work>
            </div>

            <Styles.Line />

            <div>
                <Styles.TitleContainer>
                    <Styles.Title>Research Intern</Styles.Title>
                    <Styles.Date>Aug. 2020 -- Feb. 2022</Styles.Date>
                </Styles.TitleContainer>
                <Styles.CompanyNameContainer>
                    -- University of Manitoba
                </Styles.CompanyNameContainer>
                <Styles.Supervisors>
                    Supervised by:
                    <Hover externalHref={true} href="https://scholar.google.com/citations?user=1lVSmQwAAAAJ&hl=en"
                           monoState fontWeight={600}>
                            Prof. Wouter Deconinck
                    </Hover>
                </Styles.Supervisors>
                <Styles.Work>
                <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}}>
                        •<Styles.WorkContent>
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
                        </Styles.WorkContent>
                </div>
                <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}}>
                        •<Styles.WorkContent>
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
                        </Styles.WorkContent>
                </div>
                    {[
                        "Wrote HTCondor job scripts and bash scripts for simulation job submission, and Python scripts for data storage and data retrieval from OSG.",
                        "Set up a Binder workflow for remote data analysis of ROOT output files from OSG and other environments with Jupyter/Python and uproot."
                    ].map((item) => (
                        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}} key={item}>
                            •<Styles.WorkContent>{item}</Styles.WorkContent>
                        </div>
                    ))}
                </Styles.Work>
            </div>

            <Styles.Line />

            <div>
                <Styles.TitleContainer>
                    <Styles.Title>Student Developer</Styles.Title>
                    <Styles.Date>Dec.2021 -- Present</Styles.Date>
                </Styles.TitleContainer>
                <Styles.CompanyNameContainer>
                    -- IEEE, VGEC Student Branch
                </Styles.CompanyNameContainer>
                <Styles.Work>
                    {[
                        "Developed the responsive components and pages using React for my college's IEEE branch. Automated workflows with Node.",
                        "Implemented various subsystems to assist other branches of IEEE VGEC SB, like an automated email system to send emails from an Excel sheet of data, saving days worth of effort.",
                        "Supervised junior student developers, teaching them the basic principles of software engineering and the tools necessary for it. Like version control, writing maintainable and refactorable code, and such."
                    ].map((item) => (
                        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}} key={item}>
                            •<Styles.WorkContent>{item}</Styles.WorkContent>
                        </div>
                    ))}
                </Styles.Work>
            </div>
        </div>
    );
};

export default WorkPage;