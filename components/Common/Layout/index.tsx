import PropTypes from 'prop-types';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  min-height: 100vh;
  color: #181818;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
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