import styled from 'styled-components';
import Link from "next/link";
import {useRouter} from 'next/router'
import {Hover} from "../../Common/Hover";

const HeaderContainer = styled.div`
  z-index: 100;
  width: 100%;
  background: #FFFFFF;
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
  column-gap: 16px;
  padding-bottom: 4px;
`;

interface HeaderPropsType {
    links: {
        url: string;
        name: string;
    }[]
}

const Header = (props: HeaderPropsType) => {
    const { links } = props;
    const { asPath } = useRouter();

    return (
        <HeaderContainer>
            <HeaderTopLine/>
            <LinkContainer>
                {links.map((link) => (
                    <Link href={link.url} key={link.url}>
                        <Hover monoState={false} isCurrent={link.url === asPath}>{link.name}</Hover>
                    </Link>
                ))}
            </LinkContainer>
        </HeaderContainer>
    );
};

export default Header;