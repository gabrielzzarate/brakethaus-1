import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  justify-content: center;
  background: url('/src/app/static/homepage_bg.png') top left no-repeat;
  background-size: 100% auto;

  .heroContent {
    padding: 600px 0 0 150px;
    margin: 0 auto;
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
