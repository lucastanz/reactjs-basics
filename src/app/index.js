import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {Root} from './components/Root';
import {Home} from './components/Home';
import {User} from './components/User';
import {Users} from './components/Users';

import './main.css';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root}>
          <IndexRoute component={Home} />
          <Route path={"users(/:id)"} component={Users} />
          <Route path={"user/:login"} component={User} />
          <Route path={"home"} component={Home} />
        </Route>
      </Router>
    );
  }
}

render(<App />, window.document.getElementById('app'));
