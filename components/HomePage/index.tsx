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

            <Flex flexDirection={"column"} width={"fit-content"} align={"center"}>
                {isEngineerTyped ? (
                    <Styles.Strike>
                        Engineer
                    </Styles.Strike>
                ) : (
                    <div ref={eng} style={{minHeight: '30px', fontSize: '24px'}}></div>
                )}

                {isResearcherTyped ? (
                    <Styles.Strike>
                        Researcher
                    </Styles.Strike>
                ) : (
                    <div ref={res} style={{minHeight: '30px', fontSize: '24px'}}></div>
                )}

                <Styles.LineUp>
                    <Styles.Strike color={"#e00000"} top={110} duration={2} function={"fade-out"}>A really useful little engine</Styles.Strike>
                </Styles.LineUp>
            </Flex>

        </>
    );
};

export default HomePage;