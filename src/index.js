import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './app/App';
import { createStore } from './app/store/createStore';

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
);
