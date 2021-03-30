import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './containers/App';
import './sass/styles.scss';

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
