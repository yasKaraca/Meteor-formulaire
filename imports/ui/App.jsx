import React from 'react';
import PeopleInfo from './People';
import PeopleAdd from './views/PeopleAdd';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
    return (
      <div className="App">
        <PeopleInfo />
        <PeopleAdd />
      </div>
    );
}

export default App;
