import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <ul style={{ "listStyleType": "none" }}>
                    <li><NavLink to="/dashboard">Home</NavLink></li>
                    <li><NavLink to="/photos">Photos</NavLink></li>
                </ul>
                <hr />
            </div>
        )
    }
}

export default Header;
