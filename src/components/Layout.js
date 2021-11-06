import React from 'react';
import Helmet from 'react-helmet';
import { GlobalStyles, styled } from 'twin.macro';

import config from '../utils/config';
import Header from './Header';
import StylesBase from '../utils/styles';
import ThemeToggle from './ThemeToggle';

const Container = styled.div`
  min-height: 70vh;
`;

const IndexLayout = ({ children, hideHeader }) => (
  <>
    <Helmet>
      <title>{config.siteName}</title>
      <meta description={config.description} />
    </Helmet>
    <GlobalStyles />
    <StylesBase />
    {!hideHeader && <Header />}
    <Container>{children}</Container>
    <div tw="h-full flex justify-center items-center">
      <ThemeToggle />
    </div>
  </>
);

export default IndexLayout;
