import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import People from '../api/people';

class PeopleInfo extends Component {
    render() {
        const peoples = this.props.peoples.map(
            people => this.makePeople(people)
        );
        return (
            <div>
                <h2>Hello</h2>
                <ul>{ peoples }</ul>
            </div>
        );
    }

    makePeople(people) {
        return (
            <li>{people.firstName} {people.lastName}</li>
        );
    }
}

export default InofoPeople = withTracker(() => {
    return {
        peoples: People.find().fetch(),
    }
})(PeopleInfo)