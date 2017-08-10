import "phoenix_html";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import RestfulCarsApp from './reducers/RestfulCarsApp';
import Home from './presentationals/Home';
import Cars from './containers/Cars';

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/cars" render={() => ( <Cars store = {store}/> )}/>
        </div>
      </Router>
    )
  }
}

//intialize store
let store = createStore(
  RestfulCarsApp,
  applyMiddleware( thunk, logger )
);

ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)
