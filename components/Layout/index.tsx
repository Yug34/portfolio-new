import PropTypes from 'prop-types';
import styled from 'styled-components';
import {px2vw, breakpoints} from "../../utils";

const LayoutContainer = styled.div`
  min-height: 100vh;
  padding: clamp(3rem, ${px2vw(4 * 16)}, 4rem) clamp(1rem, ${px2vw(30 * 16)}, 30rem);
  color: #181818;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: ${breakpoints.scrollPoint}px) {
    padding: 2rem clamp(4rem, ${px2vw((12 * 16) * (breakpoints.desktopFullWidth / breakpoints.scrollPoint))}, 12rem);
  }
  
  @media (max-width: ${breakpoints.tabletWidth}px) {
    padding: clamp(2rem, ${px2vw((6 * 16) * (breakpoints.desktopFullWidth / breakpoints.tabletWidth))}, 6rem);
  }
`;

const Layout = ({children}) => {
    return (
        <LayoutContainer>
            {children}
        </LayoutContainer>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;