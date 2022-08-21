import {Hover} from "../Common/Hover";
import * as Styles from "./WorkPage.Styles";

interface WorkDataType {
    title: string;
    date: string;
    isCompanyLinked: boolean;
    companyName: string;
    companyLink?: string;
    workItems: (string | JSX.Element)[];
    supervisors?: JSX.Element;
}

const workData: WorkDataType[] = [
    {
        title: "Software Development Engineer 1 (SDE-I)",
        date: "Dec. 2021 -- Present",
        isCompanyLinked: true,
        companyLink: "https://neverinstall.com",
        companyName: "Neverinstall",
        workItems: [
            "Optimized the objective load speed of the platform by decreasing code-size, minimizing HTTP requests, CSS sprites, and so on. Significantly optimized the perceived load speed of the platform by switching up how the platform serves a stream to the user.",
            "Designed and implemented database schemas, and developed triggers and events integrated with microservices.",
            "Streamlined interfaces of front-end components, with the goal to make them customizable and re-usable.",
            "Translated Figma designs to pixel-perfect responsive designs Styled-Components & SCSS.",
            "Took up opportunities to contribute to, and provide value for the start-up outside of engineering, like helping with the writing process of blogs targeted towards different developer personas."
        ]
    },
    {
        title: "Research intern (on hiatus)",
        date: "Oct. 2021 -- June 2022",
        isCompanyLinked: true,
        companyLink: "https://sail.cs.queensu.ca/members.html",
        companyName: "Queen's University, SAIL",
        supervisors: (
            <>
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
            </>
        ),
        workItems: [
            "We're conducting a multi-vocal literature review on the performance analysis of web applications and their performance optimization methods.",
            "We plan to submit a journal paper based on our research, possibly to the Empirical Software Engineering journal.",
            "Other than research, worked on fixing issues of the SAIL website, as well as refactoring and refining its code.",
            <>
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
            </>
        ]
    },
    {
        title: "Undergraduate Researcher",
        date: "Sept. 2021 -- Dec. 2021",
        isCompanyLinked: true,
        companyLink: "https://www.isro.gov.in/",
        companyName: "Indian Space Research Organization, (ISRO)",
        supervisors: (
            <>
                Supervised by:
                <Hover externalHref={true} href="https://www.researchgate.net/profile/S-Singh-28"
                       monoState fontWeight={600}>
                    Dr. SK Singh
                </Hover>
            </>
        ),
        workItems: [
            "Researched over identification of Snow Cover Areas and identifying temporal changes in the Himalayas region.",
            "Helped in developing Convolutional Neural Networks with TensorFlow and Keras to identify Snow Cover Areas and to predict patterns in the temporal changes.",
            "Set up the environment for the development of the Convolutional Neural Network models, and containerized it with Docker."
        ]
    },
    {
        title: "Research Intern",
        date: "Aug. 2020 -- Feb. 2022",
        isCompanyLinked: false,
        companyName: "University of Manitoba",
        supervisors: (
            <>
                Supervised by:
                <Hover externalHref={true} href="https://scholar.google.com/citations?user=1lVSmQwAAAAJ&hl=en"
                       monoState fontWeight={600}>
                    Prof. Wouter Deconinck
                </Hover>
            </>
        ),
        workItems: [
            <>
                Implemented a system to locate data resources for Jefferson Lab&apos;s
                <Hover
                    style={{marginLeft: '4px', marginRight: '4px'}}
                    monoState
                    externalHref={true}
                    fontWeight={600}
                    href={"https://moller.jlab.org/moller_root/"}
                >
                    MOLLER Experiment
                </Hover>
                at
                <Hover
                    style={{marginLeft: '4px', marginRight: '4px'}}
                    monoState
                    externalHref={true}
                    fontWeight={600}
                    href={"https://github.com/jeffersonlab/remoll"}
                >
                    remoll
                </Hover>
                irrespective of the directory it is started from with C++, making remoll function from any directory.
            </>,
            <>
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
            </>,
            "Wrote HTCondor job scripts and bash scripts for simulation job submission, and Python scripts for data storage and data retrieval from OSG.",
            "Set up a Binder workflow for remote data analysis of ROOT output files from OSG and other environments with Jupyter/Python and uproot."
        ]
    },
    {
        title: "Student Developer",
        date: "Nov. 2020 -- Sept. 2021",
        companyName: "IEEE, VGEC Student Branch",
        isCompanyLinked: false,
        workItems: [
            "Developed the responsive components and pages using React for my college's IEEE branch. Automated workflows with Node.",
            "Implemented various subsystems to assist other branches of IEEE VGEC SB, like an automated email system to send emails from an Excel sheet of data, saving days worth of effort.",
            "Supervised junior student developers, teaching them the basic principles of software engineering and the tools necessary for it. Like version control, writing maintainable and refactorable code, and such."
        ]
    }
];

const WorkPage = () => {
    return (
        <div style={{display: "flex", flexDirection: 'column', marginTop: '1rem'}}>
            {workData.map((workItem, index) => (
                <div key={workItem.companyName}>
                    <Styles.TitleContainer>
                        <Styles.Title>{workItem.title}</Styles.Title>
                        <Styles.Date>{workItem.date}</Styles.Date>
                    </Styles.TitleContainer>
                    <Styles.CompanyNameContainer>
                        {"-"}
                        {workItem.isCompanyLinked ? (
                            <Hover
                                externalHref={true}
                                href={workItem.companyLink}
                                monoState
                                fontWeight={600}
                            >
                                {workItem.companyName}
                            </Hover>
                        ) : (
                            <>{workItem.companyName}</>
                        )}
                    </Styles.CompanyNameContainer>
                    {workItem.supervisors && (
                        <Styles.Supervisors>
                            {workItem.supervisors}
                        </Styles.Supervisors>
                    )}
                    {workItem.workItems.map((item, index) => (
                        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}} key={typeof item === "string" ? item : index}>
                            •<Styles.WorkContent>{item}</Styles.WorkContent>
                        </div>
                    ))}
                    {index !== workData.length - 1 && (
                        <Styles.Line/>
                    )}
                </div>
            ))}
        </div>
    );
};

export default WorkPage;
