import Image from "next/image";
import sign from "../../../static/yug.png"
import * as Styles from "./HomePage.Styles";
import {useEffect, useRef, useState} from "react";
import Typed from "typed.js";

const HomePage = () => {
    const eng = useRef(null);
    const res = useRef(null);
    const [isEngineerTyped, setIsEngineerTyped] = useState(false);
    const [isResearcherTyped, setIsResearcherTyped] = useState(false);

    useEffect(() => {
        const typed = new Typed(eng.current, {
            strings: ["Engineer"], // Strings to display
            typeSpeed: 120,
            showCursor: false,
            onComplete(self: Typed) {
                setIsEngineerTyped(true)
            }
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <Styles.NameIntro>
                <Styles.Greeting>Hi! I'm</Styles.Greeting>
                <Image src={sign} width={400} height={200}/>
            </Styles.NameIntro>

            {isEngineerTyped ? (
                <div ref={eng}/>
            ) : (
                <Styles.Strike>
                    Engineer
                </Styles.Strike>
            )}
        </>
    );
};

export default HomePage;