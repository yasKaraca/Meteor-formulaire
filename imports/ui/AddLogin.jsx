import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

class AddLogin extends Component {
    state = {
        firstNameInput: createRef(),
        userNameInput: createRef(),
        passwordInput: createRef(),
        roleInput: createRef(),
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.roleInput.current.value == 1 || 
            this.state.roleInput.current.value == 2) {
                Meteor.call("insertLogin", this.state.firstNameInput.current.value,
                    this.state.userNameInput.current.value,
                    this.state.passwordInput.current.value,
                    this.state.roleInput.current.value
                    )
                this.props.history.push("/");
        } else {
            console.log('error');
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Votre nom: 
                        <input type="text" placeholder="Nom" ref={this.state.userNameInput} />
                    </label>
                    <label>
                        Votre prénom:
                        <input type="text" placeholder="Prénom" ref={this.state.firstNameInput} />
                    </label>
                    <label>
                        Votre mot de passe:
                        <input type="password" placeholder="mot de passe" ref={this.state.passwordInput} />
                    </label>
                    <label>
                        Votre role:
                        <select ref={this.state.roleInput}>
                            <option value="1">Prof</option>
                            <option value="2">Eleve</option>
                        </select>
                    </label>
                    <input type="submit" />
                </form>
                <Link to="/" >Retour a la page de connexion</Link>
            </div>
        )
    }
}

export default AddLogin;