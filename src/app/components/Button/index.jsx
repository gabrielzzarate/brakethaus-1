import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../theme';

const StyledButton = styled.button`
  background: #fff;
  height: 36px;
  line-height: 36px;
  box-shadow: 0 2px 10px 5px rgba(0,0,0,0.05);
  border-radius: 41px;
  font-size: 14px;
  color: ${theme.black};
  letter-spacing: 0.98px;
  text-align: center;
  border: 0;
  min-width: 100px;
  text-transform: uppercase;

  &:focus {
    outline: 0;
  }

  ${props => props && props.background && css`
    background: props.background;
  `}
`;

const Button = ({ children }, ...props) => (
  <StyledButton {...props}>
    {children}
  </StyledButton>
);

export default Button;