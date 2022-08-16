import Image from "next/image";
import sign from "../../static/yugHeart.png"
import * as Styles from "./HomePage.Styles";
import {useEffect, useRef, useState} from "react";
import Typed from "typed.js";
import {Flex} from "../Common/Flex";
import {Hover} from "../Common/Hover";

const HomePage = () => {
    const eng = useRef(null);
    const res = useRef(null);
    const [isEngineerTyped, setIsEngineerTyped] = useState(false);
    const [isResearcherTyped, setIsResearcherTyped] = useState(false);
    const [engineDiv, setEngineDiv] = useState((<></>));

    useEffect(() => {
        const typedEngr = new Typed(eng.current, {
            strings: ["Engineer"], // Strings to display
            typeSpeed: 90,
            showCursor: false,
            onComplete(self: Typed) {
                setIsEngineerTyped(true);
                setTimeout(() => {
                    typedRsrch.start()
                }, 500);
            }
        });

        const typedRsrch = new Typed(res.current, {
            strings: ["Researcher"], // Strings to display
            typeSpeed: 90,
            showCursor: false,
            onComplete(self: Typed) {
                setIsResearcherTyped(true);
                setEngineDiv(
                    <Styles.LineUp>
                        <Styles.Strike
                            color={"linear-gradient(90deg, rgba(77,79,218,1) 0%, rgba(159,0,116,1) 50%, rgba(255,158,232,1) 100%)"}
                            top={93}
                            duration={2}
                            function={"fade-out"}
                            fontColor={"#000000"}
                        >
                            A really useful little engine
                        </Styles.Strike>
                    </Styles.LineUp>
                );
            }
        });
        typedRsrch.stop();

        return () => {
            typedEngr.destroy();
            typedRsrch.destroy();
        };
    }, []);

    return (
        <Styles.HomePageContainer>
            <Styles.NameIntro>
                <Styles.Greeting>{"Hey! I'm"}</Styles.Greeting>
                <Image alt={"Yug"} src={sign} width={400} height={200}/>
            </Styles.NameIntro>

            <Flex flexDirection={"column"} width={"fit-content"} align={"center"} mt={"2rem"}>
                <Flex style={{minHeight: '100px'}} flexDirection={"column"} justify={"space-between"} width={"fit-content"} align={"center"}>
                    {isEngineerTyped ? (
                        <Styles.Strike strikeHeight={2}>
                            Engineer
                        </Styles.Strike>
                    ) : (
                        <Styles.TypedTitle ref={eng}/>
                    )}

                    {isResearcherTyped ? (
                        <Styles.Strike strikeHeight={2}>
                            Researcher
                        </Styles.Strike>
                    ) : (
                        <Styles.TypedTitle ref={res}/>
                    )}

                    <div style={{minHeight: '30px'}}>
                        {engineDiv}
                    </div>
                </Flex>

                <Flex flexDirection={"column"} width={"100%"} align={"flex-start"} rowGap={"12px"}>
                    <Styles.Question>Why do I write code?</Styles.Question>
                    <Styles.Motivation>..and what effect would I like my work to have?</Styles.Motivation>

                    <div style={{width: '100%', display: 'flex', alignItems: 'flex-start', fontStyle: 'italic'}}>
                        I want to work towards making computing, software, and information more accessible.
                    </div>

                    <div>
                        Accessibility to <b>Hardware</b> and <b>Computing</b> through things like what we currently do at
                        <Hover
                            style={{marginLeft: '4px'}}
                            externalHref={true}
                            href={"https://neverinstall.com/"}
                            monoState={true}
                            fontWeight={600}
                        >
                            Neverinstall
                        </Hover>,
                        running software on our resources and streaming them to users, so
                        the software can be utilized irrespective of a user&apos;s operating system,
                        or the hardware on which it runs (access to computing).
                    </div>

                    <div>
                        Accessibility of <b>software</b>, primarily, by making said software run in
                        the browser itself, particularly with tech like WASM. Imagine still
                        uploading images to the random servers on the cloud to convert them from
                        .PNG to .JPG, or to convert a .docx to a .pdf, that&apos;s so 2010!
                    </div>

                    <div>
                        Accessibility of <b>information</b>... a by-product of the above two, and
                        the reason why I want hardware and software to be more accessible --
                        but more than that, information in and of itself. Could some piece
                        of information be represented more clearly? Or communicated more
                        effectively? How do we scale the presentation of that piece
                        of information so more people can benefit from it?
                    </div>
                </Flex>
            </Flex>
        </Styles.HomePageContainer>
    );
};

export default HomePage;