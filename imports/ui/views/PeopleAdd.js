import React, { Component, createRef } from 'react';
import People from "../../api/people";
import { Meteor } from 'meteor/meteor';


class AddPeople extends Component {
    state = {
        firstNameInput: createRef(),
        lastNameInput: createRef()
    }

   handleSubmit = (e) => {
        e.preventDefault();
        Meteor.call("insertPeople", this.state.firstNameInput.current.value, this.state.lastNameInput.current.value);
        this.state.firstNameInput.current.value = "";
        this.state.lastNameInput.current.value = "";
   }
   
    render() {
        return (
            <div id="form">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Prénom:
                    <input type="text" ref={this.state.firstNameInput} name="firstName" placeholder="Prénom"/>
                </label>
                <label>
                    Nom:
                    <input type="text" ref={this.state.lastNameInput} name="lastName" placeholder="Nom"/>
                </label>
                <input type="submit" name="submit" value="Valider"/>
            </form>
            </div>
        );
    }
}

export default AddPeople;