/* eslint-disable import/prefer-default-export */

import React from 'react';
import { ThemeProvider } from './src/utils/themeContext';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
