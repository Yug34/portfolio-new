import {Hover} from "../Common/Hover";
import * as Styles from "./ProjectsPage.Styles";
import {Flex} from "../Common/Flex";

interface ProjectLinkType {
    text: string;
    url: string;
}

interface ProjectDataType {
    title: string;
    skills: string[];
    links: ProjectLinkType[];
    date: string;
    note?: string;
    body?: string;
    features?: string[];
}

const projectData: ProjectDataType[] = [
    {
        title: 'PortfolioGen',
        skills: ['React.js', 'three.js', 'Vanta.js'],
        links: [
            {
                text: 'Generated site example (WIP)',
                url: "https://yug34.github.io/portfolio/"
            }
        ],
        date: 'Present',
        features: [
            'Developing a web application that takes user data, processes it, and dynamically generates another web application that is a personalized portfolio, by repurposing one of my older personal websites.',
            'Currently working on the portfolio web application using React.js and making it responsive.',
            'Also working on optimizing the portfolio’s performance and accessibility.'
        ]
    },
    {
        title: 'Classifying X-ray images of thoracic region into Normal, Pneumonia or COVID-19',
        skills: ['Python', 'ResNet50v2'],
        links: [
            {
                text: 'Source code',
                url: "https://github.com/Yug34/cov-detect"
            }
        ],
        date: 'July 2021',
        features: [
            'Implemented a DNN based on ResNet50v2 to classify X-ray images of the human thoracic region into normal, bacterial pneumonia or COVID-19 cases as the winning capstone project for IBM Data Camp.',
            'Achieved 96.6% accuracy on the test set of 383 images, with only 0.78% false negatives.'
        ]
    },
    {
        title: 'AllBOT',
        skills: ['Node.js', 'Discord.js', 'SQLite', 'Sequelize', 'Heroku', 'Docker'],
        links: [
            {
                text: 'Source code',
                url: "https://github.com/Yug34/allBOT"
            }
        ],
        date: 'Sept 2020 - Nov 2020',
        features: [
            'Developed multi-purpose Discord bot in Node.js, used SQLite with Sequelize to model users, items, and a shop.',
            'Implemented a guild-centered currency system for the bot, with several multi-player games that interfaced with the currency system, as well as a shop.',
            'Implemented functionality for the bot to stream music from YouTube. Implemented several commands that interact with API end-points and admin commands.',
            'Hosted Dockerized project on Heroku.'
        ]
    },
    {
        title: 'CSVQL - Web application to write SQL queries for CSV data',
        skills: ['React.js', 'AlaSQL'],
        links: [
            {
                text: 'Source code',
                url: "https://github.com/Yug34/sql-csv-editor"
            }
        ],
        date: 'April 2021',
        features: [
            'A react web app that lets you query CSV files with SQL commands, on the client side.',
            'Ability to import local CSV files, add the CSV files through links, or simply paste/type CSVs as input. Ability to download the query results as a CSV file.'
        ]
    },
    {
        title: 'Full-Stack CRUD Blog',
        skills: ['Python', 'Django'],
        links: [
            {
                text: 'Source code',
                url: "https://github.com/Yug34/stupid-blog"
            }
        ],
        date: 'March 2020',
        features: [
            'A blogging website that supports user auth – creation/deletion of user profiles, with the ability to create posts, update them in the future, and delete the posts.',
            'Used the Django framework for the back-end, hosted on Heroku, and using AWS S3 storage for images.'
        ]
    },
    {
        title: 'Cellular Automata Collection',
        skills: ['Python', 'pygame', 'matplotlib'],
        links: [
            {
                text: 'Source code',
                url: "https://github.com/Yug34/Cellular-Automata"
            }
        ],
        date: 'March 2021',
        features: [
            'Python scripts for cellular-automata projects: Langton’s Ant, WireWorld, Brownian Motion.'
        ]
    }
];

const ProjectsPage = () => {
    return (
        <Flex flexDirection={'column'} mt={'1rem'} justify={'center'}>
            {projectData.map((project: ProjectDataType, index: number) => (
                <div key={project.title}>
                    <Styles.TitleContainer>
                        <Styles.Title>{project.title}</Styles.Title>
                        <Styles.Date>{project.date}</Styles.Date>
                    </Styles.TitleContainer>

                    <Styles.SkillsContainer>
                        {project.skills.map((skill: string, index: number) => (
                            <Styles.Skill>{`${skill}${(index !== project.skills.length - 1) ? ',' : ''}`}</Styles.Skill>
                        ))}
                    </Styles.SkillsContainer>

                    {project.links.map((link: ProjectLinkType) => (
                        <Hover key={link.text} externalHref={true} href={link.url} monoState fontWeight={600}>{link.text}</Hover>
                    ))}

                    {project.features?.map((feature, index) => (
                        <div key={feature} style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}} key={typeof item === "string" ? item : index}>
                            •<Styles.WorkContent>{feature}</Styles.WorkContent>
                        </div>
                    ))}

                    {index !== projectData.length - 1 && (
                        <Styles.Line/>
                    )}
                </div>
            ))}
        </Flex>
    );
};

export default ProjectsPage;
