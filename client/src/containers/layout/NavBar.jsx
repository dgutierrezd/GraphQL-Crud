import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Tasks App</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">My tasks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/new'>Add task</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;