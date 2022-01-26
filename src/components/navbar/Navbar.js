import React, { Component } from 'react';
import navImg from '../../images/logo.png'

class Navbar extends Component {
    render() {
        return (
            <nav>
                <img src={navImg} alt='airbnb logo'/>
            </nav>
        );
    }
}

export default Navbar;