import Image from "next/image";
import sign from "../../static/yugHeart.png"
import * as Styles from "./HomePage.Styles";
import {useEffect, useRef, useState} from "react";
import Typed from "typed.js";
import {Flex} from "../Common/Flex";

const HomePage = ({ratings}) => {
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
                            color={"#E14ED6"}
                            top={90}
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
        <>
            <Styles.NameIntro>
                <Styles.Greeting>{"Hey! I'm"}</Styles.Greeting>
                <Image alt={"Yug"} src={sign} width={400} height={200}/>
            </Styles.NameIntro>

            <Flex flexDirection={"column"} width={"fit-content"} align={"center"} mt="2rem">
                {isEngineerTyped ? (
                    <Styles.Strike>
                        Engineer
                    </Styles.Strike>
                ) : (
                    <Styles.TypedTitle ref={eng}/>
                )}

                {isResearcherTyped ? (
                    <Styles.Strike>
                        Researcher
                    </Styles.Strike>
                ) : (
                    <Styles.TypedTitle ref={res}/>
                )}

                <div style={{minHeight: '30px'}}>
                    {engineDiv}
                </div>

                <Flex flexDirection={"column"} width={"100%"} align={"center"}>
                    <h2>Why do I write code?</h2>
                    <h3>What effect would I like my work to have?</h3>

                    <div>
                        I want to work towards making computing, software, and information more accessible.
                    </div>

                    <div>
                        Accessibility to <b>Hardware</b> and <b>Computing</b> through things like what we currently do at Neverinstall,
                        running software on our resources and streaming them to users, so
                        the software can be utilized irrespective of a user's operating system,
                        or the hardware on which it runs (access to computing).
                    </div>

                    <div>
                        Accessibility of <b>software</b>, primarily, by making said software run in
                        the browser itself, particularly with tech like WASM. Imagine still
                        uploading images to the random servers on the cloud to convert them from
                        .PNG to .JPG, or to convert a .docx to a .pdf, that's so 2010!
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
        </>
    );
};

export default HomePage;