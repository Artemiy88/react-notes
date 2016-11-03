var React = require('react');

require('./NoteEditor.css');

var NoteEditor = React.createClass({
    getInitialState: function() {
        return {
            text      : '',
            showButton: 'add-button',
         };
    },

    handleTextChange: function(event) {
        this.setState({
            text : event.target.value
        });
        
        if( event.target.value.length > 0 ){
            this.setState({ showButton: 'add-button active'});
        }else{
            this.setState({ showButton: 'add-button'});
        }
    },

    handleNoteAdd: function() {
        var localColor = (localStorage.getItem('color')) ? localStorage.getItem('color') : '#f4f4f4' ;
        var color = (this.state.color) ? this.state.color : localColor;
        var newNote = {
            text : this.state.text,
            color: color,
            id   : Date.now()
        };
        if( this.state.text.length > 0 ){
            this.props.onNoteAdd(newNote);
            this.setState({ text: ''});
        }
    },

    render: function() {
        return (
            <div className="note-editor">
                <textarea
                    placeholder = "Пиши сюда ↓"
                    rows        = {5}
                    className   = "textarea"
                    value       = {this.state.text}
                    onChange    = {this.handleTextChange}
                />
                <button className={this.state.showButton} onClick={this.handleNoteAdd}>Запомни</button>
            </div>
        );
    }
});

module.exports = NoteEditor;
