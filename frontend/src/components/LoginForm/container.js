import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './presenter';

class Container extends Component {

    state = {
        username: "",
        password: ""
    };

    static propTypes = {
        facebookLogin: PropTypes.func.isRequired
    }

    render() {
        const { username, password } = this.state;
        return <LoginForm 
            handleInputChange={this._handleInputChange}
            handleSubmit={this._handleSubmit}
            handleFacebookLogin={this._handleFacebookLogin}
            usernameValue={username} 
            passwordValue={password}
        />
    }

    _handleInputChange = e => {
        const { target: { value, name } } = e;
        this.setState({
            [name]: value,
        });
    };
    _handleSubmit = e => {
        e.preventDefault();
        // redux action
    }
    _handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    }
}

export default Container;