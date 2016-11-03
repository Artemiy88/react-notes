var React = require('react');
var Color = require('./Color.jsx');
const colors = [
  {id: 1, color: '#ff897d'},
  {id: 2, color: '#ffd27a'},
  {id: 3, color: '#ffff85'},
  {id: 4, color: '#cfd8dc'},
  {id: 5, color: '#7cd7ff'},
  {id: 6, color: '#a4ffeb'},
  {id: 7, color: '#cbff8a'},
  {id: 8, color: '#f4f4f4'}
];
var NoteColors = React.createClass({
    getInitialState: function(){
      return {
        selectColor : colors,
        arrClass    : 'arr',
        selectClass : 'selectColor'
      };
    },

    handleShowColors: function(){
        if( this.state.arrClass == 'arr' ){
            this.setState({
                arrClass    : 'arr show',
                selectClass : 'selectColor showed'
             });
        } else {
            this.setState({
                arrClass    : 'arr',
                selectClass : 'selectColor'
             });
        }
    },

    render: function(){
        var onColorSelect = this.props.onColorSelect;
        return (
          <div className={this.state.selectClass} >
            {
                this.state.selectColor.map(function(color){
                let style = { backgroundColor: color.color};
                let activity = (localStorage.getItem('color') == color.color) ? 'active' : '';
                return (
                    <Color
                        onColor    = {onColorSelect.bind(null, color)}
                        key        = {color.id}
                        colorStyle = {style}
                        clss       = {activity}
                    />
                );
              })
            }
            <div className={this.state.arrClass} onClick={this.handleShowColors} >
                <span className = "menu_line line1"></span>
                <span className = "menu_line line3"></span>
            </div>
            <div className="clear"></div>
          </div>
      );
  }
});

module.exports = NoteColors;
