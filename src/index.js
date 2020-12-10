import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css'
import './css/styles-rtl.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
