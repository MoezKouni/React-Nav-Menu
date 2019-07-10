import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './App.css';


class Liste extends Component {
    constructor(props){
        super(props)
        this.state={
            isHovering: false
        }
    }
    handleMouseHover = () => { this.setState(this.toggleHoverState) }
    toggleHoverState = (state) => {return {isHovering: !state.isHovering }}

    render(){
        return (
            <ul className="menu-list">
                <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
                <li onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                ><NavLink activeClassName="active" to="/services">Services</NavLink>{
                                                        this.state.isHovering && (
                                                            <div className="sub-menu">
                                                                <NavLink activeClassName="active" to="/services/entrepreneur">Entrepreneur</NavLink>
                                                                <NavLink activeClassName="active" to="/services/students">Students</NavLink>
                                                                <NavLink activeClassName="active" to="/services/hobbies">Hobbyists</NavLink>
                                                            </div>
                                                            )
                                                        
                                                        }</li>
                <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
            </ul>
        )
    }
}

export default Liste;

