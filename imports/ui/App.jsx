import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Hello from './Hello';
import UpdatePeople from './UpdatePeople';
import DoLogin from './DoLogin'; 
import AddLogin from './AddLogin';

const App = () => {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route exact path="/" component={DoLogin} />
            <Route path="/home" component={Home} />
            <Route path="/hello" component={Hello} />
            <Route path="/update/:id" component={UpdatePeople} />
            <Route path="/login/add" component={AddLogin} />
          </Fragment>
        </Router>
      </div>
    );
}

export default App;
