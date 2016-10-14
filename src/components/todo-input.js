import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

class TodoInput extends Component {

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <FormGroup
                    controlId="formBasicText"
                    >
                    <ControlLabel>Entre com um item de TODO e pressione ENTER</ControlLabel>
                    <input type="text" ref="createItem" />
                    <button type="submit">ADC</button>
                    <HelpBlock>Tarefas do dia a dia como por exemplo: "Lavar a louça".</HelpBlock>
                </FormGroup>
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();
        this.props.createItem(this.refs.createItem.value);
        this.refs.createItem.value = "";
    }
}

export default TodoInput;
