import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../styles/index.scss';

import Home from './Home';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <hr/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
