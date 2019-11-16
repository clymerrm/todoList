// Importing Modules
import React, { Component } from 'react';
import ls from 'local-storage';
import jsonData from './todos.json';

// Importing React-Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Importing Components
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

import './App.css';
import Footer from "./components/layout/Footer";

class App extends Component {
  state = {
    todos: [],
    selectedOption: ''
  };

  componentDidMount() {
      const loadData = () => JSON.parse(JSON.stringify(jsonData));
      if (!localStorage.hasOwnProperty("todos")) {
          ls.set('todos', loadData().todos);
      }
      this.returnTodos()
  };

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
      if(prevState.selectedOption !== this.state.selectedOption) {
          this.returnTodos()
      }
  }

  returnTodos() {
      this.setState({todos: ls.get('todos')});
  }

  markComplete = (id, completed) => {
    let futureCompleted;
    if (completed === false) {futureCompleted = true} else {futureCompleted = false}
    const allTodos = ls.get('todos');
    for (let i=0; i < allTodos.length; i++) {
        if (allTodos[i].id === id) {
            allTodos[i].completed = futureCompleted
        }
    }
    ls.set('todos', allTodos);
    this.returnTodos()
  };

  delTodo = (id) => {
    let whichToDelete;
    const allTodos = ls.get('todos');
    for (let i=0; i < allTodos.length; i++) {
      if (allTodos[i].id === id) {
          whichToDelete = i;
      }
    }
    allTodos.splice(whichToDelete, 1);
    ls.set('todos', allTodos);
    this.returnTodos()
  };

  addTodo = (title, date) => {
    let maxId = 0;
    const allTodos = ls.get('todos');
    for (let i=0; i < allTodos.length; i++) {
      if (allTodos[i].id > maxId) {
          maxId = allTodos[i].id
      }
    }
    const newTodo = {
        id: maxId + 1,
        title: title,
        completed: false,
        dueDate: date,
    };
    allTodos.push(newTodo);
    ls.set('todos', allTodos);
    this.returnTodos();
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <br />
            <Route path={["/", "/latest"]} render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
