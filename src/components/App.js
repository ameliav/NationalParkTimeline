import React from 'react';
//import { HashRouter as Router, Route } from 'react-router-dom';
import Timeline from './Timeline';
//import Login from './Login';
//import history from "../history";

class App extends React.Component {

  render() {
    return (
      <div>
        <Timeline/>
      </div>
    )
  }
}

export default App;

//To have a route to the login and timeline page
/*<Router history={history} basename="/">
          <div>
            <Route path="/" exact component={Login} />
            <Route path="/#/timeline" component={Timeline} />
          </div>
        </Router>
*/