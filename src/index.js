import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Application} from '../src/App';
ReactDOM.render( 
  <Application />,
  document.getElementById('application')
);
registerServiceWorker();
