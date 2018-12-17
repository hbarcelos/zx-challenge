import React from 'react';
import { render } from 'react-dom';
import App from './app';
import 'normalize.css';
import 'minireset.css';
import './index.css';

render(<App />, document.querySelector('#root'));

module.hot.accept();
