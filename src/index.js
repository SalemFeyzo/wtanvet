import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css'
import './css/styles-rtl.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import LoadSpinner from './UI/LoadSpinner'
const App = React.lazy(() => import('./App'))
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<LoadSpinner />}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById('root')
)
