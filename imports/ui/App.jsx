import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Hello from './Hello';
import UpdatePeople from './UpdatePeople';

const App = () => {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/hello" component={Hello} />
            <Route path="/update/:id" component={UpdatePeople} />
          </Fragment>
        </Router>
      </div>
    );
}

export default App;
