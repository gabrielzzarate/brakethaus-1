import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import theme from '../../theme';

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles /> 
    <Header />
    <main>{children}</main>
    <Footer />
  </ThemeProvider>
);

export default Page;