import React from 'react';
import styled from 'styled-components';
import { Section, Container, Row } from '../../styles';

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
          <img src="/src/app/static/techologies_logos.png" alt="Technologies" />
        </div>
      </Row>
    </Container>
  </StyledServicesSection>
);

export default ServicesSection;