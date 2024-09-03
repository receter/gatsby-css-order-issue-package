import React from 'react';

import {
  Headline,
} from '../../src';

import { render } from 'react-dom';

const App = () => (
  <>
    <Headline>Hallo Test</Headline>
  </>
);

render(
  <App />
  , document.getElementById("root"));
