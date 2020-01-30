import React from 'react';
import { Provider } from 'react-redux';
import { store } from './.tmp/createStore';
import { ELEMENT_ID, GLOBAL_KEY } from './constants';

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};

export const onInitialClientRender = () => {
  if (process.env.BUILD_STAGE !== 'build-javascript') {
    return;
  }

  // Remove the server-side injected state.
  const preloadedStateEl = document.getElementById(ELEMENT_ID);
  if (preloadedStateEl) {
    preloadedStateEl.parentNode.removeChild(preloadedStateEl);
  }
};
