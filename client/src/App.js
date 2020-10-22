import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './components/pages/Home'
import BookmarkList from './components/bookmarks/BookmarkList'
import BookmarkInfo from './components/bookmarks/BookmarkInfo'
import BookmarkAdd from './components/bookmarks/BookmarkAdd'
import BookmarkEdit from './components/bookmarks/BookmarkEdit'
import SearchList from './components/bookmarks/SearchList'

import TodoLists from './components/Todos/TodoLists'

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
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/bookmarks">List</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/TodoLists">Todo</NavLink></li>
        </ul>
      </div>
    </nav>    
  )
}

function Main(){
  return(
  <Switch>
    {/* 
    <Route exact path="/" component={Home} /> 
    <Route exact path="/bookmarks" component={BookmarkList} />
    <Route exact path="/" component={BookmarkList} />
    */}
    <Route exact path="/" component={SearchList} />
    <Route exact path="/bookmarks" component={BookmarkList} />
    <Route exact path="/bookmarks/new" component={BookmarkAdd} />    
    <Route exact path="/bookmarks/:_id" component={BookmarkInfo} />
    <Route exact path="/bookmarks/:_id/edit" component={BookmarkEdit} />

    <Route exact path="/TodoLists" component={TodoLists} />

  </Switch>
  )
}
export default App;