import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Menu     from './components/Menu.jsx';
import NotesApp from './components/NotesApp.jsx';
import NoteList from './components/NoteList.jsx';
import NotFound from './components/NotFound.jsx';

import './style.css';

ReactDOM.render(
    <Router history={browserHistory }>
        <Route path="/" component={Menu} >
            <IndexRoute component={NotesApp} />
            <Route path="edit" component={NoteList} />
        </Route>
        <Route path='*' component={NotFound} />
    </Router>,
    document.getElementById('mount-point')
);
