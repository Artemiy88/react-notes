import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

import NotesApp from './components/NotesApp.jsx';
import NoteList from './components/NoteList.jsx';
import NotFound from './components/NotFound.jsx';

import './style.css';

ReactDOM.render(
    <Router history={hashHistory }>
        <Route path="/" component={NotesApp} >
            <Route path="kek" component={NoteList} />
        </Route>
        <Route path='*' component={NotFound} />
    </Router>,
    document.getElementById('mount-point')
);
