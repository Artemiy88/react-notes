import React from 'react';
import './Color.less';

var Color = React.createClass({
    render: function() {
        return (
            <div style={this.props.colorStyle} onClick={this.props.onColor} className={this.props.clss}></div>
        );
    }
});

module.exports = Color;
