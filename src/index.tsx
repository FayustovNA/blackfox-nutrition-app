import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import { compose } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// import thunk from 'redux-thunk';
// import reportWebVitals from './reportWebVitals';

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(
//     thunk
//   )
// );

// const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // <Route>
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <div className='mainconteiner'>
        <App />
      </div>
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
  // </Route>

);

// reportWebVitals();
