import Image from "next/image";
import sign from "../../../static/yug.png"
import * as Styles from "./HomePage.Styles";

const HomePage = () => {
    return (
        <>
            <Styles.NameIntro>
                Hi! I'm <Image src={sign} width={400} height={200} />
            </Styles.NameIntro>
        </>
    );
};

export default HomePage;