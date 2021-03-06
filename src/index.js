/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { loadTickets } from './actions/ticketActions';

import configureStore from './store/configureStore';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
import 'bootstrap/dist/css/bootstrap.min.css';
// store.dispatch(loadTickets());

render(
    <Provider store={store}>
     <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
