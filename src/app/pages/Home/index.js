import React from 'react';
import styled from 'styled-components';
import Page from '../../components/Page';
import HeroHomepage from '../../components/HeroHomepage';
import ServicesSection from '../../components/ServicesSection';
import background from '../../static/homepage_bg_top.png';

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

    <img className="bg_top" src={background} alt="home background" />
  </StyledHome>
);

export default Home;