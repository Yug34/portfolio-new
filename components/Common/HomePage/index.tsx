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
        const typedEngr = new Typed(eng.current, {
            strings: ["Engineer"], // Strings to display
            typeSpeed: 120,
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
            typeSpeed: 120,
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
                <Styles.Greeting>Hi! I'm</Styles.Greeting>
                <Image src={sign} width={400} height={200}/>
            </Styles.NameIntro>

            <div>
                {isEngineerTyped ? (
                    <Styles.Strike>
                        Engineer
                    </Styles.Strike>
                ) : (
                    <div ref={eng}/>
                )}

                {isResearcherTyped ? (
                    <Styles.Strike>
                        Researcher
                    </Styles.Strike>
                ) : (
                    <div ref={res}/>
                )}
            </div>
        </>
    );
};

export default HomePage;