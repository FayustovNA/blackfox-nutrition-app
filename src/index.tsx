import React from 'react'
import App from './App'
import './index.css'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {store} from './services/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <div className='mainconteiner'>
          <App />
        </div>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
