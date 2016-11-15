import {colors} from '../config';
import React from 'react';
import Color from './Color.jsx';

var NoteColors = React.createClass({
    getInitialState: function() {
        return {selectColor: colors, arrClass: 'arr', selectClass: 'selectColor'};
    },

    handleShowColors: function() {
        if (this.state.arrClass == 'arr') {
            this.setState({arrClass: 'arr show', selectClass: 'selectColor showed'});
        } else {
            this.setState({arrClass: 'arr', selectClass: 'selectColor'});
        }
    },

    render: function() {
        var onColorSelect = this.props.onColorSelect;
        return (
            <div>
                <div className={this.state.arrClass} onClick={this.handleShowColors}>
                    <span className="menu_line line1"></span>
                    <span className="menu_line line3"></span>
                </div>
                <div className={this.state.selectClass} onClick={this.handleShowColors}>
                    {this.state.selectColor.map(function(color) {
                        let style = {
                            backgroundColor: color.color
                        };
                        let activity = (localStorage.getItem('color') == color.color)
                        ? 'color active'
                        : 'color';
                            return (<Color onColor={onColorSelect.bind(null, color)} key={color.id} colorStyle={style} clss={activity}/>);
                    })
                    }

                </div>
            </div>
        );
    }
});

module.exports = NoteColors;
