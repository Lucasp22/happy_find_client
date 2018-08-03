import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './components/Home';



ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
