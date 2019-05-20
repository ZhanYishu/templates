import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { routes } from './routes'
import reducers from './store/reducers'
import 'styles/global.scss'
import './index.css'
import RouteWithSubRoutes from 'components/common/route-view'
const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
