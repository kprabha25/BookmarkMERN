import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './components/pages/Home'
import BookmarkList from './components/bookmarks/BookmarkList'
import BookmarkInfo from './components/bookmarks/BookmarkInfo'
import BookmarkAdd from './components/bookmarks/BookmarkAdd'
import BookmarkEdit from './components/bookmarks/BookmarkEdit'


function App(){
  return(
    <div className="App">
      <Router>
        <Navigation />
          <div className="container">
            <Main />
          </div>
      </Router>
    </div>
  )
}

function Navigation(){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className='container'>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Bookmarks</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/Bookmarks">Todo</NavLink></li>
        </ul>
      </div>
    </nav>    
  )
}

function Main(){
  return(
  <Switch>
    <Router exact path="/" component={Home} />
    <Router exact path="/bookmarks" component={BookmarkList} />
    <Router exact path="/bookmarks/new" component={BookmarkAdd} />
    <Router exact path="/bookmarks/:_id" component={BookmarkInfo} />
    <Router exact path="/bookmarks/:_id/edit" component={BookmarkEdit} />

  </Switch>
  )
}
export default App;