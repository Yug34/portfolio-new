import styled from 'styled-components';
import {useEffect, useRef, useState} from "react";
import Typed from "typed.js";

import * as Styles from "./HomePage.Styles";
import {Strike} from "./HomePage.Styles";

const HomePage = ({ratings}) => {
    const el = useRef(null);
    const [isTyped, setIsTyped] = useState(false);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Engineer;"
            ],
            typeSpeed: 120,
            startDelay: 100,
            backSpeed: 0,
            smartBackspace: true,
            backDelay: 700,
            fadeOut: false,
            autoInsertCss: true,
            bindInputFocusEvents: false,
            contentType: 'html',
            onComplete: (self) => {
                setIsTyped(true)
            }
        });

        return () => {
            typed.destroy();
        };
    }, [])

    return (
        <>
            {isTyped ? (
                <Styles.Strike>
                    Engineer;
                </Styles.Strike>
            ) : (
                <Styles.TypedTitle ref={el}/>
            )}

            {ratings.map((rating) => (
                <div key={rating.id}>{rating.rate}</div>
            ))}
        </>
    );
};

export default HomePage;