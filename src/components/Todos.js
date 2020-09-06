import React, { Component } from "react";
import TodoItem from './TodoItem';
import PropTypes from "prop-types";

class Todos extends Component {

    render() {
        return this.props.jahid.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete=
                {this.props.togglemarked} delTodo={this.props.delTodo} />
        ));
    }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos;