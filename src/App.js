import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      todos: [
        {
          text: 'Todo one',
          status: true
        },
        {
          text: 'Todo two',
          status: false
        }
      ],
      newTodo: '',
      uuid: 3
    };
    this.changeTodoStatus = this.changeTodoStatus.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <div className="todo-input">
            <input value={this.state.newTodo} onChange={this.handleInputChange} />
            <button onClick={this.addTodo}>Add Todo</button>
          </div>
          <TodoList todos={this.state.todos} changeStatus={this.changeTodoStatus} />
        </div>
      </div>
    );
  }

  handleInputChange(e)
  {
    this.setState({
      newTodo: e.target.value
    });
  }

  addTodo()
  {
    let newTodo = {
      text: this.state.newTodo,
      status: false
    }
    this.setState((prevState, props) => {
      return {
        ...prevState, todos:[...prevState.todos, newTodo]
      }
    });
  }

  changeTodoStatus(id, status)
  {
    var todos = this.state.todos;
    var newTodos = todos.map(function(item) {
      if(item.id === id) {
        item.status = status;
      }
      return item;
    });
    this.setState({todos: newTodos});
  }

}

export default App;