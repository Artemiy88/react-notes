import React, { Component } from 'react';
import { Link } from 'react-router';
import './Menu.less';
import NotesApp from './NotesApp.jsx';
import NavLink  from './NavLink.jsx';

export default class Menu extends Component {
    render() {
        return (
            <div className="App">
                <div className='menu-bar'>
    				<div className ='menu-item'>
    					<NavLink to='/' onlyActiveOnIndex={true}  >Все</NavLink>
    				</div>
    				<div className ='menu-item'>
    					<NavLink to='/edit' >Редактор</NavLink>
    				</div>
    				<div className ='menu-item'>
    					<NavLink to='/new' >Добавить</NavLink>
    				</div>
                </div>
                {this.props.children}
            </div>
        )
    }
}
