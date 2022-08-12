import styled from 'styled-components';
import {px2vw, breakpoints} from "../../../utils";
import Link from "next/link";
import {useRouter} from 'next/router'

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

const links = [
    {
        url: '/',
        name: 'Home'
    },
    {
        url: '/work',
        name: 'Work'
    }
];

const HeaderLink = styled.div<{isCurrent?: boolean;}>`
  color: ${(props) => props.isCurrent ? 'red' : 'blue'};
`;

const Header = () => {
    const { asPath } = useRouter();

    return (
        <HeaderContainer>
            <LinkContainer>
                {links.map((link) => (
                    <Link href={link.url}>
                        <HeaderLink isCurrent={link.url === asPath}>{link.name}</HeaderLink>
                    </Link>
                ))}
            </LinkContainer>
        </HeaderContainer>
    );
};

export default Header;