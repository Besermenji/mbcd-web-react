import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import Store from './store'
import Routes from './routes'

const StoreInstance = Store()
const history = syncHistoryWithStore(browserHistory, StoreInstance)

ReactDOM.render(
  <Provider store={StoreInstance}>
    <Routes history={history} />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
