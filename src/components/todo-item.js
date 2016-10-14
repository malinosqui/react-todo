import React, { Component } from 'react';

class TodoItem extends Component {

    render() {
        return (
            <li>
                <span>{this.props.name}</span>
            </li>
        );
    }
}

export default TodoItem;
