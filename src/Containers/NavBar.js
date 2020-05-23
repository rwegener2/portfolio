import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="dropdown">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">NavBar</Link>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
                <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/articles">Articles</Link>
                <Link className="nav-item nav-link" to="/about">About</Link>
                </div>
            {/* </div> */}
            </nav>
        </div>
    )
}

export default NavBar;