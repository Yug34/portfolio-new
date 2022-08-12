import styled from 'styled-components';
import {px2vw, breakpoints} from "../../../utils";
import Link from "next/link";

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <LinkContainer>
                <Link href={"/"}>
                    <div>Home</div>
                </Link>
                <Link href={"/work"}>
                    <div>Work</div>
                </Link>
            </LinkContainer>
        </HeaderContainer>
    );
};

export default Header;