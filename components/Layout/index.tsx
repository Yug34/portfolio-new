import PropTypes from 'prop-types';
import styled from 'styled-components';
import {px2vw, breakpoints} from "../../utils";
import Header from "./Header";
import {useState} from "react";
import {useRouter} from "next/router";

interface LayoutContainerProps {
    onTouchStart: any;
    onTouchMove: any;
    onTouchEnd: any;
}

const LayoutContainer = styled.div<LayoutContainerProps>`
  min-height: 100vh;
  padding: clamp(3rem, ${px2vw(4 * 16)}, 4rem) clamp(1rem, ${px2vw(30 * 16)}, 30rem);
  color: #202020;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  @media (max-width: ${breakpoints.scrollPoint}px) {
    padding: 2rem clamp(4rem, ${px2vw((12 * 16) * (breakpoints.desktopFullWidth / breakpoints.scrollPoint))}, 12rem);
  };
  
  @media (max-width: ${breakpoints.tabletWidth}px) {
    padding: clamp(2rem, ${px2vw((6 * 16) * (breakpoints.desktopFullWidth / breakpoints.tabletWidth))}, 6rem);
  };
  
  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

interface LinkType {
    url: string;
    name: string;
}

const links: LinkType[] = [
    {
        url: '/',
        name: 'About'
    },
    {
        url: '/work',
        name: 'Work'
    },
    {
        url: '/projects',
        name: 'Projects'
    },
    {
        url: '/contact',
        name: 'Contact'
    },
    {
        url: '/ratings',
        name: 'Reviews'
    }
];

const Layout = ({children}: {children: JSX.Element | string;}) => {
    const router = useRouter();
    const [touchStart, setTouchStart] = useState<null | number>(null);
    const [touchEnd, setTouchEnd] = useState<null | number>(null);
    let currentIndex = links.findIndex(link => link.url === router.asPath);

    const minSwipeDistance = 50

    const onTouchStart = (e: TouchEvent): void => {
        setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: TouchEvent): void => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            if (currentIndex === links.length - 1) {
                router.push(links[0].url);
            } else {
                router.push(links[currentIndex + 1].url);
            }
        }

        if (isRightSwipe) {
            if (currentIndex === 0) {
                router.push(links[links.length - 1].url);
            } else {
                router.push(links[currentIndex - 1].url);
            }
        }
    };

    return (
        <LayoutContainer onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <Header links={links}/>
            {children}
        </LayoutContainer>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;