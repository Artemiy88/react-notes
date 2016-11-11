import React, { Component } from 'react';
import './Search.less';

var Search = React.createClass({

	handleSearch: function(event){
		var notes = this.props.notes;
		var searchQuery = event.target.value.toLowerCase();
		var displayedContacts = notes.filter(function(el) {
			var searchValue = el.text.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});

		this.setState({
			displayedContacts: displayedContacts
		});
	},

    render() {
        return (
			<div className="search">
				<input type="text" placeholder="Искайка" className="search-field" onChange={this.handleSearch} />
			</div>
        )
    }
})

module.exports = Search;
