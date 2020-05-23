import React from 'react';
import NavBar from './Containers/NavBar.js';
import About from './Containers/About.js';
import Articles from './Containers/Articles.js'
import Home from './Containers/Home.js';
import Post from './Components/Post';
import './App.css';
import './bootstrap.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
      </div>

      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About className="App"/>
          </Route>
          <Route path={`/articles/:postId`}>
            <Post />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
