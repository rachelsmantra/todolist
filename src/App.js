import React, { useState } from "react";
import Todo from "./components/Todo/todo";
import TodoForm from "./components/Todoform/todo-form";
import "./app.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Home from "./components/pages/Home";
import ArticleList from "./components/articles/ArticleList";
import ArticleInfo from "./components/articles/ArticleInfo";
import ArticleAdd from "./components/articles/ArticleAdd";
import ArticleEdit from "./components/articles/ArticleEdit";
import Forecast from "./components/Forecast/Forecast";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="d-flex flex-row justify-content-around main-container">
        <div className="todo-list">
          <div className="App bg-light card">
            <Router>
              <Navigation />
              <div className="container">
                <Main />
              </div>
            </Router>
          </div>
        </div>
        <div className="weather-container">
          <Forecast />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="card bg-dark mb-4">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/articles"
            >
              <p>Todo List</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/articles" component={ArticleList} />
      <Route exact path="/articles/new" component={ArticleAdd} />
      <Route exact path="/articles/:_id" component={ArticleInfo} />
      <Route exact path="/articles/:_id/edit" component={ArticleEdit} />
    </Switch>
  );
}

export default App;
