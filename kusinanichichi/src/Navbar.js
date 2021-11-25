import React from 'react';
import './assets/css/bootstrap.min.css'
import Logo from './assets/img/logo.jpg'
import './assets/css/Nav.css'



function Navbar() {
    return (
        <div>
            <nav className="navbar bg-dark fixed-top">
                <a className="navbar-brand" href="/"><img className="rounded-circle" src={Logo} style={{ height: '45px', width: '45px' }} /></a>
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item">
                        <a className="nav-link text-light font-weight-bold" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light font-weight-bold" href="/silogmeals">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light font-weight-bold" href="#">Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
