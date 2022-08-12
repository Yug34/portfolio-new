import styled from 'styled-components';
import {px2vw, breakpoints} from "../../../utils";

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
                <div>Home</div>
                <div>Work</div>
                <div>Ratings</div>
                <div>Etc.</div>
            </LinkContainer>
        </HeaderContainer>
    );
};

export default Header;