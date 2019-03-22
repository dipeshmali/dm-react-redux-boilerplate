import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import Header from './Header';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h1>Welcome to Dashboard..!!</h1>
            </div>
        )
    }
}

export default Dashboard;
