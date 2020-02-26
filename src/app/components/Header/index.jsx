import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../lib/breakpoints';
import Logo from '../Logo';
import Nav from '../Nav';
import Container from '../../styles/Container';
import MobileNavigationTrigger from '../MobileNavigationTrigger';

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 15px;
  z-index: 10;

  .headerContainer {
    height: 100%;
  }

  .headerInner {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .nav {
    display: flex;
    flex-direction: column;

    @media ${breakpoints.navFlip} {
      display: none;
      flex-direction: row;
    }
  }

  .trigger {
    display: none;

    @media ${breakpoints.tablet} {
      display: block;
    }
  }
`;

const Header = () => {
  const [mobileNavActive, openPocketNav] = useState(false);
  return (
    <StyledHeader>
      <Container className="headerContainer">
        <div className="headerInner">
          <Logo />
          <Nav pocketNav={mobileNavActive} />
          <MobileNavigationTrigger 
            className="trigger"
            active={mobileNavActive}
            onTriggerClick={() => openPocketNav(!mobileNavActive)} 
          />
        </div>
      </Container>
    </StyledHeader>
  );
}

export default Header;