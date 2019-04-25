import React, { Component } from 'react';
import CommentBox from './presenter';

class Container extends Component {
    state = {
        comment: ""
    }
    render() {
        return (
            <CommentBox 
                {...this.state}
                {...this.props}
                handleInputChange={this._handleInputChange}
                handleKeyPress={this._handleKeyPress}
            />
        );
    }
    _handleInputChange = e => {
        const { target: {value} } = e;
        this.setState({
            comment: value
        })
    }
    _handleKeyPress = e => {
        const { submitComment } = this.props;
        const { comment } = this.state;
        const { key } = e;
        if (key === "Enter") {
            e.preventDefault();
            submitComment(comment)
            this.setState({
                comment: ""
            })
        };
    }
}

export default Container;