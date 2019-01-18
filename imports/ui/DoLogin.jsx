import React, { Component, createRef } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';


class DoLogin extends Component {

    state = {
        nameInput: createRef(),
        passwordInput: createRef(),
        badLogin: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        Meteor.call("findLogin", this.state.nameInput.current.value, this.state.nameInput.current.value,  (e, v) => {
            if (v) {
                this.setState({
                    badLogin: false
                });
                sessionStorage.setItem("connexion", true);
                sessionStorage.setItem("name", v.lastName);
                sessionStorage.setItem("firstName", v.firstName);
                sessionStorage.setItem("role", v.role);
                console.log(sessionStorage.getItem("connexion"));
                console.log(sessionStorage.getItem("name"));
                console.log(sessionStorage.getItem("firstName"));
                console.log(sessionStorage.getItem("role"));
                this.props.history.push("/home");
            } else {
               this.setState({
                    badLogin: true,
                })
                console.log("nope");
            }
        });
    }

    render() {
        console.log(sessionStorage.getItem("connexion"))
        if (sessionStorage.getItem("connexion")) {
            this.props.history.push("/home");
        }
        return (
            <div>
             {this.state.badLogin ? <p>Mauvais nom d'utilisateur ou mot de passe</p> : ""}   
            <form onSubmit={this.handleSubmit}>
                <label>
                    nom: <input ref={this.state.nameInput} type="text"/>
                </label>
                <label>
                    password: <input ref={this.state.passwordInput} type="password"/>
                </label>
                <input type="submit" value="Se Connecter"/>
            </form>
            <Link to="/login/add">Inscriver vous</Link>
            </div>
        );
    }
}

export default DoLogin;