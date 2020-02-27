import React from 'react';
import styled from 'styled-components';
import homepageBackground from '../../static/homepage_bg.png';

const StyledHero = styled.div`
  position: relative;
  height: 1100px;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  justify-content: center;
  background: url(${homepageBackground}) top left no-repeat;
  background-size: 100% auto;

  .heroContent {
    padding: 600px 0 0 150px;
    margin: 0 auto;
  }

  h3 {
    font-family: 'Horatio';
    font-size: 48px;
    letter-spacing: 1.72px;
    line-height: 64px;
    margin-bottom: 0;
  }
  
`;

const HeroHomepage = () => (
  <StyledHero>

    <div className="heroContent">
      <h3 className="display">Crafted, Consumer-First</h3>
      <h1 className="display">Digital Experiences</h1>
    </div>
  </StyledHero>
);

export default HeroHomepage;
