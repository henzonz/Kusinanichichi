import React from 'react';
import './assets/css/bootstrap.min.css'
import Logo from './assets/img/logo.jpg'
import './assets/css/Nav.css'




function Navbar() {
    return (
        <div>
            <nav id="navigation" className="navbar bg-light nav_border fixed-top border-bottom">
                <a className="navbar-brand ml-5" href="/"><img className="border_nude rounded-circle" src={Logo} style={{ height: '60px', width: '60px' }} alt="" /></a>
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item">
                        <a className="nav-link nav_border p-2" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_border" href="/silogmeals">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_border" href="#">Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
