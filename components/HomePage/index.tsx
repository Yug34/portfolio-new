import Image from "next/image";
import sign from "../../static/yugHeart.png"
import * as Styles from "./HomePage.Styles";
import {useEffect, useRef, useState} from "react";
import Typed from "typed.js";
import {Flex} from "../Common/Flex";

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
                            color={"#e00000"}
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
                    <Styles.TypedTitle ref={eng}></Styles.TypedTitle>
                )}

                {isResearcherTyped ? (
                    <Styles.Strike>
                        Researcher
                    </Styles.Strike>
                ) : (
                    <Styles.TypedTitle ref={res}></Styles.TypedTitle>
                )}

                <div style={{minHeight: '30px'}}>
                    {engineDiv}
                </div>
            </Flex>

        </>
    );
};

export default HomePage;