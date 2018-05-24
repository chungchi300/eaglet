import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from 'App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from 'configureStore'

import { Provider } from 'react-redux'

const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
