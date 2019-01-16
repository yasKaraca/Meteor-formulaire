import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import People from '../api/people';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

class PeopleInfo extends Component {

    state = {
        test: false,    
    }

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

    handleRemove = (id) => {
        Meteor.call("deletePeople", id);
    }

    handleUpdate() {
        this.setState({
            test: true
        })
        console.log(this.state.test);
    }

    makeInput() {
        return (
            <div>
                <input type="text" name="test" />
            </div>
        )
    }

    makePeople (people) {
        return (
            <li onClick={() => this.handleUpdate()}>
                {people.firstName} {people.lastName}
                <button  onClick={() => this.handleRemove(people._id)}>X</button>
                <Link to={`/update/${people._id}`}>Modifier</Link>
             </li>
        );
    }
}

export default InofoPeople = withTracker(() => {
    return {
        peoples: People.find().fetch(),
    }
})(PeopleInfo)