import React      from 'react';
import NoteEditor from './NoteEditor.jsx';
import NoteColors from './NotesColors.jsx';
import NotesGrid  from './NotesGrid.jsx';
import Search     from './Search.jsx';
import { Link }   from 'react-router';
import {colors}   from '../config';
import './NotesApp.less';

var NotesApp = React.createClass({
    getInitialState: function() {
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        return {
             notes: localNotes,
             color: ''
         };
    },

    componentDidUpdate: function() {
        this._updateLocalStorage(); // из-за этого удаляет при фильтрации
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
        var notes = JSON.stringify(this.state.notes);
    },

    handleColorSelect: function(color) {
        this._updateColorLocalStorage(color.color);
        this.setState({color: color.color});
        colors.map(function(el) {
            el['class'] = '';
        });
        color['class'] = "active";
    },

    handleNotesFiltr: function(event){
        let notes = this.state.notes;
		let searchQuery = event.target.value.toLowerCase();
		let displayedContacts = localNotes.filter(function(el) {
			let searchValue = el.text.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});

        this.setState({notes: displayedContacts});
    },

    render: function() {
        return (
            <div className="notes-app">
                <h2 className="app-header">Заметоньки</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} color={this.state.color} />
                <NoteColors onColorSelect={this.handleColorSelect} />
                <Search     onSearchText={this.handleNotesFiltr} />
                <NotesGrid  onNoteDelete={this.handleNoteDelete} notes={this.state.notes} />
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
