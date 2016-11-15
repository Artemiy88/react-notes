import React, { Component } from 'react';
import './Search.less';

var Search = React.createClass({
    render() {
        return (
			<div className="search">
				<input type="text" placeholder="Искайка" className="search-field" onChange={this.props.onSearchText} />
			</div>
        )
    }
})

module.exports = Search;
