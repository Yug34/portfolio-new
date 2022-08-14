import styled from 'styled-components';
import {px2vw, breakpoints} from "../../../utils";
import Link from "next/link";
import {useRouter} from 'next/router'

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderTopLine = styled.div`
  height: 6px;
  width: 100%;
  background: rgb(77,79,218);
  background: linear-gradient(90deg, rgba(77,79,218,1) 0%, rgba(159,0,116,1) 50%, rgba(255,158,232,1) 100%);
`;

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const links = [
    {
        url: '/',
        name: 'About'
    },
    {
        url: '/work',
        name: 'Work'
    }
];

const HeaderLink = styled.div<{isCurrent?: boolean;}>`
  color: ${(props) => props.isCurrent ? '#8C8C92' : '#191924'};
  cursor: pointer;
  // TODO: Hover states
`;

const Header = () => {
    const { asPath } = useRouter();

    return (
        <HeaderContainer>
            <HeaderTopLine/>
            <LinkContainer>
                {links.map((link) => (
                    <Link href={link.url} key={link.url}>
                        <HeaderLink isCurrent={link.url === asPath}>{link.name}</HeaderLink>
                    </Link>
                ))}
            </LinkContainer>
        </HeaderContainer>
    );
};

export default Header;