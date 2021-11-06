import React from 'react';
import Helmet from 'react-helmet';
import { styled } from 'twin.macro';

import config from '../utils/config';
import Header from './Header';

const Container = styled.div`
  min-height: 70vh;
`;

const IndexLayout = ({ children, hideHeader }) => (
  <>
    <Helmet>
      <title>{config.siteName}</title>
      <meta description={config.description} />
    </Helmet>
    {/* <GlobalStyle /> */}
    {!hideHeader && <Header />}
    <Container>{children}</Container>
  </>
);

export default IndexLayout;
