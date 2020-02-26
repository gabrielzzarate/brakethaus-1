import React from 'react';
import styled from 'styled-components';
import Page from '../../components/Page';
import HeroHomepage from '../../components/HeroHomepage';
import ServicesSection from '../../components/ServicesSection';

const StyledHome = styled.div`
  position: relative;

  .bg_top {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
`;

const Home = () => (
  <StyledHome>
    <Page>
      <HeroHomepage />
      <ServicesSection />
    </Page>

    <img className="bg_top" src="/src/app/static/homepage_bg_top.png" alt="home background" />
  </StyledHome>
);

export default Home;