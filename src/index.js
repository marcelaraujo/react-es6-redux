import React, {findDOMNode, Component, PropTypes} from 'react';
import { render } from 'react-dom';
import App from './containers/App';

render(
  <App />,
  document.getElementById('root')
);