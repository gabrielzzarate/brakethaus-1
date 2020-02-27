import React from 'react';
import styled from 'styled-components';
import { Section, Container, Row } from '../../styles';
import technologiesLogos from '../../static/techologies_logos.png';

const StyledServicesSection = styled(Section)`


  .column {
    flex-basis: 50%;
    max-width: 50%;
  }
`;

const ServicesSection = () => (
  <StyledServicesSection>
    <Container>
      <Row>
        <div className="column">
          <h1 className="display">Full Service Creative</h1>
        </div>
        <div className="column">
          <img src={technologiesLogos} alt="Technologies" />
        </div>
      </Row>
    </Container>
  </StyledServicesSection>
);

export default ServicesSection;