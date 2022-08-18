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

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(-45deg, #ff3d00 0%, #0400ff 100% );
    transform: translate3d(0px, -10px, 0) scale(1);
    filter: blur(15px);
    opacity: var(0.1);
    transition: opacity 0.3s;
    border-radius: inherit;
  }

  /* 
  * Prevents issues when the parent creates a 
  * stacking context. (For example, using the transform
  * property )
  */
  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    border-radius: inherit;
  }

  //box-shadow: 0px 2px 10px 0px linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(214,214,214,1) 20%, rgba(145,145,145,1) 40%, rgba(145,145,145,1) 60%, rgba(214,214,214,1) 80%, rgba(255,255,255,1) 100%);;
`;

const HeaderTopLine = styled.div<{height?: number}>`
  height: ${(props) => `${props.height || 6}px`};
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