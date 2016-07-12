'use strict';
require('es6-promise').polyfill();
import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './Component/MainRouter';

ReactDOM.render(<MainRouter />, document.getElementById('content'));
