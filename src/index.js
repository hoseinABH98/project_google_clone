import ReactDom from 'react-dom';

// providers
import { Provider } from 'react-redux';

// react router
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { StateContextProvider } from 'contexts/StateContextProvider';

// global css
import './global.css';

// redux store
import store from './store';

ReactDom.render(
  <Provider store={store}>
    <StateContextProvider>
      <Router>
        <App />
      </Router>
    </StateContextProvider>
  </Provider>,
  document.getElementById('root')
);
