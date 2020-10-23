/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from '../theme';
import { Provider } from 'outstated';
import ProductsStore from '../state/ProductsStore';
import Router from './Router';
import CartStore from '../state/CartStore';

const store = [ProductsStore, CartStore];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider stores={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
