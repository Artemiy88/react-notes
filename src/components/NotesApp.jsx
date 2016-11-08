import {colors} from '../config';

var React = require('react');
var NoteEditor = require('./NoteEditor.jsx');
var NoteColors = require('./NotesColors.jsx');
var NotesGrid = require('./NotesGrid.jsx');

require('./NotesApp.css');

var NotesApp = React.createClass({
    getInitialState: function() {
        return {notes: [], color: ''};
    },

    componentDidMount: function() {
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({notes: localNotes});
        }
    },

    componentDidUpdate: function() {
        this._updateLocalStorage();
    },

    handleNoteDelete: function(note) {
        var noteId = note.id;
        var newNotes = this.state.notes.filter(function(note) {
            return note.id !== noteId;
        });
        this.setState({notes: newNotes});
    },

    handleNoteAdd: function(newNote) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({notes: newNotes});
    },

    handleColorSelect: function(color) {
        this._updateColorLocalStorage(color.color);
        this.setState({color: color.color});
        colors.map(function(el) {
            el['class'] = '';
        });
        color['class'] = "active";
    },

    render: function() {
        return (
            <div className="notes-app">
                <h2 className="app-header">Заметоньки</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} color={this.state.color}/>
                <NoteColors onColorSelect={this.handleColorSelect}/>
                <NotesGrid onNoteDelete={this.handleNoteDelete} notes={this.state.notes}/>
            </div>
        );
    },

    _updateLocalStorage: function() {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    },

    _updateColorLocalStorage: function(color) {
        localStorage.setItem('color', color);
    }
});

module.exports = NotesApp;
