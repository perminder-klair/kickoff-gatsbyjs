import React from 'react';

import ApolloClient from '../config/apolloClient';
import CarsList from '../components/CarsList';

const Cars = () => (
  <ApolloClient>
    <div>
      <h1>Cars</h1>
      <CarsList />
    </div>
  </ApolloClient>
);

export default Cars;
