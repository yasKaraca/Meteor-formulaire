import React, { Component, createRef } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import People from '../api/people';

class UpdatePeople extends Component {
    state = {
        firstName: "",
        lastName: "",
        firstNameInput: createRef(),
        lastNameInput: createRef(),
        id: this.props.match.params.id,
    }


    handelSubmit = (e) => {
        e.preventDefault();
        Meteor.call('updatePeople', this.state.id, this.state.firstNameInput.current.value, this.state.lastNameInput.current.value)
        this.props.history.push("/home");
    }

    render() {
        console.log(sessionStorage.getItem("connexion"))
        if (sessionStorage.getItem("connexion")) {
            this.props.history.push("/home");
        }  
        return (
            <div>
                <form onSubmit={this.handelSubmit}>
                    <label> Prenom
                        <input  type="text" ref={this.state.firstNameInput} defaultValue={this.props.people ? this.props.people.firstName : "" }/>
                    </label>
                    <label>
                        Nom:
                        <input type="text" ref={this.state.lastNameInput} defaultValue={this.props.people ? this.props.people.lastName : ""}/>
                    </label>
                    <input type="submit" value="Valider le changement"  />
                </form>
            </div>
        )
    }
}

export default InfoPeople = withTracker((props) => {
    return {
        people: People.findOne({_id: props.match.params.id})
    }
})(UpdatePeople);