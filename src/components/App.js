import React from 'react';
import { Router, Route } from 'react-router-dom';
import Timeline from './Timeline';
import Login from './Login';
import history from "../history";

class App extends React.Component {
 
  render() {
    return (
      <div>
        <Router history={history}>
          <div>            
            <Route path="/" exact component={Login} />
            <Route path="/timeline" component={Timeline} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;