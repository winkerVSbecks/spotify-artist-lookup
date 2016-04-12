import React from 'react-native';
import { Provider } from 'react-redux';
import createStore from '../store/configureStore';

import Router from './Router';

const store = createStore();

const Root = () => {
  return (
    <Provider store={ store }>
      <Router />
    </Provider>
  );
}

export default Root;
