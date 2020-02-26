import styled from 'styled-components';
import { breakpoints } from '../lib/breakpoints';

const Section = styled.section`
  width: 100%;
  padding: 48px 24px;

  @media ${breakpoints.mobile} {
    padding: 32px 15px;
  }
`;

export default Section;