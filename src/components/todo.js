import React, { Component } from 'react';
import TodoInput from './todo-input';
import TodoList from './todo-list';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listItems: []
        };
    }

    render() {
        return (
            <div>
                <TodoInput createItem={this.createItem.bind(this)} />
                <TodoList items={this.state.listItems} />
            </div>
        );
    }

    createItem(item) {
        this.state.listItems.push(item);
        this.setState({ listItems: this.state.listItems });
    }
}

export default Todo;
