// Importing Modules
import React, { Component } from 'react';
import ls from 'local-storage';
import jsonData from './todos.json';

// Importing React-Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Importing Components
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Locators from './components/Locators';

import './App.css';
import Footer from "./components/layout/Footer";
import BrowserRouter from "react-router-dom/BrowserRouter";

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
  //
  // componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
  //     if(prevState.selectedOption !== this.state.selectedOption) {
  //         this.returnTodos()
  //     }
  // }

  returnTodos() {
      const todos = ls.get('todos');
      todos.sort((a,b) => (a.dueDate > b.dueDate) ? 1 : ((b.dueDate > a.dueDate) ? -1 : 0));
      this.setState({todos: todos});
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
            <BrowserRouter>
                <Switch>
                    <Route path={["/", "/latest"]} exact render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo} />
                            <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
                        </React.Fragment>
                    )} />
                    <Route path={["/locators", "/latest/locators", "/latest/compare"]} exact render={props => (
                        <React.Fragment>
                            <Locators />
                        </React.Fragment>
                    )} />
                </Switch>
            </BrowserRouter>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
