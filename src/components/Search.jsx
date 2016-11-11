import React, { Component } from 'react';
import './Search.less';

export default class Search extends Component {

	handleSearch(event){
		var notes = this.props.notes;
		var searchQuery = event.target.value.toLowerCase();
		var displayedContacts = notes.filter(function(el) {
			var searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});

		this.setState({
			displayedContacts: displayedContacts
		});
	}

    render() {
        return (
			<div className="search">
				<input type="text" placeholder="Искайка" className="search-field" onChange={this.handleSearch} />
			</div>
        )
    }
}
