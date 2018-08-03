import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

import HappyFind from './components/HappyFind';

import Home from './components/Home';



ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
