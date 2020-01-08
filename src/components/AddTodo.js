import React, { Component } from 'react';

import PropTypes from 'prop-types';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export class AddTodo extends Component {
    state = {
        title: '',
        dueDate: new Date()
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.dueDate);
        this.setState({ title: '', dueDate: new Date()});
    };

    onChange = (e) => this.setState({ title: e.target.value});

    handleChange = date => this.setState({ dueDate: date})

    render() {
        if (window.location.pathname.includes('latest')) {
            return (
                <form onSubmit={this.onSubmit} style={{display: 'grid', border: '5px solid #F4F4F4', padding: '5px', background: '#F4F4F4'}}>
                    <label>
                        Task Name:
                    </label>
                    <input
                        type="text"
                        name="title"
                        style={{flex: '10', padding: '5px'}}
                        placeholder="Add Todo..."
                        value={this.state.title}
                        onChange={this.onChange}
                        required={true}
                        data-test-key='TaskNameInput'
                    />
                    <label>
                        Due Date:
                    </label>
                    <DatePicker
                        selected={this.state.dueDate}
                        onChange={this.handleChange}
                        required={true}
                        data-test-key='DueDateInput'
                    />
                    <input
                        type="submit"
                        value="Create Task"
                        className="btn"
                        style= {{flex: '1'}}
                        data-test-key='CreateTaskButton'
                    />
                </form>
            )
        } else {
            return (
                <form onSubmit={this.onSubmit} style={{display: 'grid', border: '5px solid #F4F4F4', padding: '5px', background: '#F4F4F4'}}>
                    <label>
                        Task Name:
                    </label>
                    <input
                        type="text"
                        name="title"
                        style={{flex: '10', padding: '5px'}}
                        placeholder="Add Todo..."
                        value={this.state.title}
                        onChange={this.onChange}
                        required={true}
                    />
                    <label>
                        Due Date:
                    </label>
                    <DatePicker
                        selected={this.state.dueDate}
                        onChange={this.handleChange}
                        required={true}
                    />
                    <input
                        type="submit"
                        value="Create Task"
                        className="btn"
                        style= {{flex: '1'}}
                    />
                </form>
            )
        }
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default AddTodo;
