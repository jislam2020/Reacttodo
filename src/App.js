import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Take out the trash",
                completed: false,
            },
            {
                id: 2,
                title: "Dinner with wife",
                completed: true,
            },
            {
                id: 3,
                title: "Meeting with boss",
                completed: false,
            },
        ],
    };

    //Toggle Complete
    togglemarked = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    }

    //Delete Todo
    delTodo = (id) => {
        console.log(id)
    }
    render() {
        console.log(this.state.todos);
        return (
            <div className="App">
                <Todos jahid={this.state.todos} togglemarked={this.togglemarked}
                    delTodo={this.delTodo} />
            </div>
        );
    }
}
export default App;