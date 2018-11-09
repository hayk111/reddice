import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

if (module.hot) {
    module.hot.accept();
}

const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
)

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'));