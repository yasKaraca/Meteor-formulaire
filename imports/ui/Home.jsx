import React, {Component} from 'react';
import PeopleInfo from './People';
import PeopleAdd from './views/PeopleAdd';

class Home extends Component {
    render() {
        return (
            <section>
                <PeopleInfo />
                <PeopleAdd />
            </section>
        );
    }
}

export default Home;