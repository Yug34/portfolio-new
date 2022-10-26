import {Hover} from "../Common/Hover";
import * as Styles from "./WorkPage.Styles";
import {Flex} from "../Common/Flex";

interface SupervisorType {
    name: string;
    url: string;
    labName?: string;
    labUrl?: string;
}

interface WorkDataType {
    title: string;
    date: string;
    isCompanyLinked: boolean;
    companyName: string;
    companyLink?: string;
    workItems: (string | JSX.Element)[];
    supervisors?: SupervisorType[];
}

const WorkPage = () => {
    return (
        <Flex flexDirection={'column'} mt={'1rem'} justify={'center'}>
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
                            Supervised by:
                            {workItem.supervisors.map((supervisor: SupervisorType, index: number) => (
                                <>
                                    {(index !== 0) && '&'}
                                    <Hover externalHref={true} href={supervisor.url} monoState fontWeight={600}>
                                        {supervisor.name}
                                    </Hover>
                                    {supervisor.labName && (
                                        <>
                                            from
                                            <Hover externalHref={true} href={supervisor.labUrl} monoState fontWeight={600}>
                                                {supervisor.labName}
                                            </Hover>
                                        </>
                                    )}
                                </>
                            ))}
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
        </Flex>
    );
};

const workData: WorkDataType[] = [
    {
        title: "Software Development Engineer 1 (SDE-I)",
        date: "Dec. 2021 -- Present",
        isCompanyLinked: true,
        companyLink: "https://neverinstall.com",
        companyName: "Neverinstall",
        workItems: [
            "Optimized the objective load speed of the product by decreasing code-size, minimizing HTTP-requests, CSS sprites, optimizing images. Significantly optimized the perceived load speed of the product to improve the UX.",
            "Developed the payment and checkout flow with Stripe. Designed database schemas, developed PostgreSQL triggers and events integrated with microservices.",
            "Streamlined interfaces of front-end components for customizability and reusability. Used react optimization best practices like memoization to prevent redundant re-renders.",
            "Translated Figma designs to responsive designs for desktop and mobile view-ports with Styled-Components, made pseudo-native designs (no scroll) responsive for all desktop view-port sizes."
        ]
    },
    {
        title: "Research intern",
        date: "Oct. 2021 -- June 2022",
        isCompanyLinked: true,
        companyLink: "https://sail.cs.queensu.ca/members.html",
        companyName: "Queen's University, SAIL",
        supervisors: [
            {
                name: 'Dr. Eduardo Fernandes',
                url: 'https://scholar.google.com/citations?user=bPnuCiMAAAAJ&hl=fr',
                labName: 'SAIL',
                labUrl: 'https://sail.cs.queensu.ca/members.html'
            }
        ],
        workItems: [
            "Worked on conducting a multi-vocal literature review on the performance analysis of web applications and their performance optimization methods.",
            "Fixed issues in the SAIL website's code and updating it. Also refined the code to be more refactorable."
        ]
    },
    {
        title: "Undergraduate Researcher",
        date: "Sept. 2021 -- Dec. 2021",
        isCompanyLinked: true,
        companyLink: "https://www.isro.gov.in/",
        companyName: "Indian Space Research Organization, (ISRO)",
        supervisors: [
            {
                name: 'Dr. SK Singh',
                url: 'https://www.researchgate.net/profile/S-Singh-28',
            }
        ],
        workItems: [
            "Researched over identification of snow cover areas and detecting temporal changes in the Himalayas region.",
            "Helped in developing Convolutional Neural Networks with TensorFlow and Keras to detect snow caps and predict patterns in their temporal changes.",
            "Set up the environment for the development of the CNN models, containerized it with Docker."
        ]
    },
    {
        title: "Research Intern",
        date: "Aug. 2020 -- Feb. 2022",
        isCompanyLinked: false,
        companyName: "University of Manitoba",
        supervisors: [
            {
                name: 'Prof. Wouter Deconinck',
                url: 'https://scholar.google.com/citations?user=1lVSmQwAAAAJ&hl=en',
            }
        ],
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
            "Wrote HTCondor job scripts and bash scripts for submission of simulation jobs, and Python scripts for data storage and data retrieval from OSG.",
            "Set up a Binder workflow for remote data analysis of ROOT output files from OSG and other environments with Jupyter/Python and uproot."
        ]
    },
    {
        title: "Student Developer",
        date: "Nov. 2020 -- Sept. 2021",
        companyName: "IEEE, VGEC Student Branch",
        isCompanyLinked: false,
        workItems: [
            "Developed the responsive components and pages using React for my college's IEEE branch.",
            "Implemented subsystems to assist other branches of IEEE VGEC SB, like an automated email system to send emails from an Excel sheet of data, saving days worth of effort.",
            "Maintained the GitHub repository for the front-end code, reviewed pull requests from junior developers."
        ]
    }
];

export default WorkPage;
