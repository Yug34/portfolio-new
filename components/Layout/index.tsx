import PropTypes from 'prop-types';
import styled from 'styled-components';
import {px2vw, breakpoints} from "../../utils";
import Header from "./Header";
import {useEffect} from "react";
import {useRouter} from "next/router";

const LayoutContainer = styled.div`
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
        url: '/ratings',
        name: 'Reviews'
    }
];

const Layout = ({children}: {children: JSX.Element | string;}) => {
    const router = useRouter();

    useEffect(() => {
        document.addEventListener('touchstart', handleTouchStart, false);
        document.addEventListener('touchmove', handleTouchMove, false);

        let currentIndex = links.findIndex(link => link.url === router.asPath);

        let xDown: any = null;
        let yDown: any = null;

        function getTouches(evt) {
            return evt.touches ||             // browser API
                evt.originalEvent.touches; // jQuery
        }

        function handleTouchStart(evt) {
            const firstTouch = getTouches(evt)[0];
            xDown = firstTouch.clientX;
            yDown = firstTouch.clientY;
        }

        function handleTouchMove(evt) {
            if ( ! xDown || ! yDown ) {
                return;
            }

            let xUp = evt.touches[0].clientX;
            let yUp = evt.touches[0].clientY;

            let xDiff = xDown - xUp;
            let yDiff = yDown - yUp;

            if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                if ( xDiff > 0 ) {
                    /* right swipe */
                    if(currentIndex === links.length - 1) {
                        router.push(links[0].url)
                    } else {
                        router.push(links[currentIndex + 1].url)
                    }
                } else {
                    /* left swipe */
                    if(currentIndex === 0) {
                        router.push(links[links.length - 1].url)
                    } else {
                        router.push(links[currentIndex - 1].url)
                    }
                }
            } else {
                if ( yDiff > 0 ) {
                    /* down swipe */
                } else {
                    /* up swipe */
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        }
    }, [router]);

    return (
        <LayoutContainer>
            <Header links={links}/>
            {children}
        </LayoutContainer>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;