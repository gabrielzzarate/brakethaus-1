import { createGlobalStyle } from 'styled-components';
import { breakpoints } from '../lib/breakpoints';
import theme from '../theme';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: "Horatio";
    src: url("/src/app/static/HoratioLTStd-Bold.woff2"),
        url("/src/app/static/HoratioLTStd-Bold.woff");
  }

  html {
    font-family: Helvetica, sans-serif;
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 100%;
    color: ${theme.black};
  }

  /* typography */

  h1 {
    

    &.display {
      font-family: "Horatio";
      font-size: 6rem;
      letter-spacing: 0.215rem;
      line-height: 5.875rem;

      @media ${breakpoints.mobile} {
        font-size: 4rem;
        line-height: 4rem;
      }
    }
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    transition: all 0.25s;
    color: ${theme.black};

    &:hover {
      color: ${theme.red};
    }

    &.underline {
      text-decoration: underline;
    }
  }

  /* form elements */

  ::placeholder {
    font-size: 13px;
  }

  /* helpers */

  .hideForMobile {
    @media ${breakpoints.mobile} {
      display: none !important;
    }
  }

  .showForMobile {
    display: none !important;

    @media ${breakpoints.mobile} {
      display: block !important;
    }
  }

`;

export default GlobalStyles;

