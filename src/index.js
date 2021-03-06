import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import 'mapbox-gl/dist/mapbox-gl.css'
import App from 'containers/App/App'
import * as serviceWorker from './serviceWorker'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from 'redux/reducers'

localStorage.clear();

const store = createStore(rootReducer, composeWithDevTools())

const app = (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
