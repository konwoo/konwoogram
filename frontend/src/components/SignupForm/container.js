import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignForm from './presenter';

class Container extends Component {

    state = {
        email: "",
        fullName: "",
        username: "",
        password: "",
    }

    render() {
        const { email, fullName, username, password } = this.state;
        return <SignForm
            handleInputChange={this._handleInputChange}
            handleSubmit={this._handleSubmit}
            handleFacebookLogin={this._handleFacebookLogin}
            emailValue = {email}
            fullNameValue = {fullName}
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
        e.preventDefault();
        console.log(this.state);
    }
    _handleFacebookLogin = response => {        
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    }
}

export default Container;