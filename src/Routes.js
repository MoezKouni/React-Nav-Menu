import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Entrepreneur from './Components/Entrepreneur';
import Students from './Components/Students';
import Hobbies from './Components/Hobbies';

class Routes extends Component {
    render() { 
        return(
            <BrowserRouter>
                <Route exact activeClassName='is-active' path='/' component={Home}/>
                <Route exact path='/services' component={Services}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/services/entrepreneur' component={Entrepreneur}/>
                <Route path='/services/students' component={Students}/>
                <Route path='/services/hobbies' component={Hobbies}/>
            </BrowserRouter>
        )
}
}

export default Routes;