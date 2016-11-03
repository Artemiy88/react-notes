var React    = require('react');
var ReactDOM = require('react-dom');
var NotesApp = require('./components/NotesApp.jsx');

require('./style.css');

ReactDOM.render(
    <NotesApp />,
    document.getElementById('mount-point')
);
