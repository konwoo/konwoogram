import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignForm from './presenter';

class Container extends Component {

    state = {
        email: "",
        name: "",
        username: "",
        password: "",
    }

    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
        createAccount: PropTypes.func.isRequired
    }

    render() {
        const { email, name, username, password } = this.state;
        return <SignForm
            handleInputChange={this._handleInputChange}
            handleSubmit={this._handleSubmit}
            handleFacebookLogin={this._handleFacebookLogin}
            emailValue = {email}
            nameValue = {name}
            usernameValue = {username}
            passwordValue = {password}
        />
    }

    _handleInputChange = e => {
        const { target : { value, name } } = e;
        this.setState({
            [name]: value
        });
    }
    _handleSubmit = e => {
        const { email, name, password, username } = this.state;
        const { createAccount } = this.props;
        e.preventDefault();
        createAccount(username, password, email, name);
    }
    _handleFacebookLogin = response => {        
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    }
}

export default Container;