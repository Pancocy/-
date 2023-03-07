import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd'
import {BrowserRouter as Router} from "react-router-dom";

//引入Redux
import store from "./Store/Store/store";
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router>
              <App />
          </Router>
      </Provider>
  </React.StrictMode>
);


