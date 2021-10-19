import React from 'react';
import {Provider} from 'react-redux';

import {store} from './src/store/store';
import RootNavigation from './src/navigation/RootNavigation';

export default () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};
