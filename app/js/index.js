import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render } from 'react-dom'
import chatApp from './reducers'
import App from './components/app'

let store = createStore(chatApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
