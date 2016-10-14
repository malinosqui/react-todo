import React, { Component } from 'react';
import TodoItem from './todo-item';

class TodoList extends Component {


    render() {
        let renderItems = this.props.items.map((item, i) => {
            return (
                <TodoItem name={item} />
            )
        });

        return (
            <ul>
                {renderItems}
            </ul>
        );
    }
}

export default TodoList;
