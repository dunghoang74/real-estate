import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import DashApp from './dashApp';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';

ReactDOM.render(<DashApp />, document.getElementById('root'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./dashApp.js', () => {
    const NextApp = require('./dashApp').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
registerServiceWorker();
