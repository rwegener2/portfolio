import React from 'react';
import Header from './Components/Header.js';
import About from './Components/About.js';
import Articles from './Components/Articles.js'
import Post from './Components/Post'
import Home from './Components/Home.js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
      </div>

      <Switch>
          {/* IDEA Change this to build of /articles path */}
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/about">
            <About className="App"/>
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
