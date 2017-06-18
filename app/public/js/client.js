import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import chatApp from '../../reducers'
import App from '../../components/app'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__
// Create Redux store with initial state
const store = createStore(chatApp, preloadedState, applyMiddleware(thunkMiddleware));


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
