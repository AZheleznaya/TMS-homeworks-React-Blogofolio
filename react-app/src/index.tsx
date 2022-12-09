import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import {ThemeProvider} from "./context/ThemeContext";
import {PaginationProvider} from "./context/PaginationContext";
import reportWebVitals from './reportWebVitals';

import App from './components/App/App';

import {store} from "./store";

import './styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <ThemeProvider>
              <PaginationProvider>
                  <BrowserRouter>
                      <App />
                  </BrowserRouter>
              </PaginationProvider>
          </ThemeProvider>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
