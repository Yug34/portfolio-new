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
  >:not(:first-child) {
    margin-left: 8px;
  }
  >:not(:last-child) {
    margin-right: 8px;
  }
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

const Hover = styled.div<{isCurrent?: boolean;}>`
  display: inline-block;
  position: relative;
  cursor: pointer;
  color: ${(props) => props.isCurrent ? '#191924' : '#8C8C92'};

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: ${(props) => props.isCurrent ? '' : 'scaleX(0)'};
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.isCurrent ? '#191924' : '#8C8C92'};
    transform-origin: ${(props) => props.isCurrent ? '' : 'bottom right'};
    transition: ${(props) => props.isCurrent ? '' : 'transform 0.25s ease-out'};
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Header = () => {
    const { asPath } = useRouter();

    return (
        <HeaderContainer>
            <HeaderTopLine/>
            <LinkContainer>
                {links.map((link) => (
                    <Link href={link.url} key={link.url}>
                        <Hover isCurrent={link.url === asPath}>{link.name}</Hover>
                    </Link>
                ))}
            </LinkContainer>
        </HeaderContainer>
    );
};

export default Header;