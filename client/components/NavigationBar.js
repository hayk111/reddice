import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
    return (
        <nav class="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink to="/greetings" className="navbar-brand">Red Dice</NavLink>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink to="/signup" className="navbar-brand">Sign Up</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
