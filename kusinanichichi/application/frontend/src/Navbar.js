import React, { useState } from 'react';
import './assets/css/bootstrap.min.css'
import Logo from './assets/img/logo.jpg'
import './assets/css/Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'




function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const menuBtn = document.querySelector('.nav-menu-btn,.mobile-nav__position');


    let menuOpen = false;



    let menu

    if (showMenu) {
        menuBtn.classList.toggle('open');
        
        menu =

            <nav className="mobile-nav__background navbar navbar-light border-bottom shadow-lg">

                <ul className="navbar-nav d-flex flex-column pt-4 mx-auto">
                    <li className="nav-item highlight"><a href="/" className="nav-link mobile-nav-link__texts">Home</a></li>
                   
                    <li className="nav-item highlight mt-5"><a href="/silogmeals" className="nav-link mobile-nav-link__texts">Menu</a></li>
                    
                    <li className="nav-item highlight mt-5 mb-4"><a href="/contact" className="nav-link mobile-nav-link__texts">Contact</a></li>
                </ul>

            </nav>



    }
    return (
        <div>
            <div className="nav-lgscreen">
                <nav id="navigation" className="navbar bg-light nav_border fixed-top border-bottom">
                    <div className="row">
                        <div className="col address-writing"><a href="https://www.google.com/maps/dir/?api=1&destination=14.2787659%2C121.0552253&fbclid=IwAR3Ko4NduyJwbUQjLyi_gSo1-on9m74v1yjpEBHWGDB5IkbN_4CjtKL9bZE" target="_blank">
                            Blk 9 Lot 29 Matthew St. <br></br>
                            Juana 6 Brgy. San Francisco 4024 Biñan, Philippines</a>
                        </div>
                    </div>
                    <a className="navbar-brand ml-5" href="/"><img className="border-orange rounded-circle" src={Logo} style={{ height: '85px', width: '85px' }} alt="" /></a>
                    <ul id="menuLinks" className="navbar-nav d-flex flex-row">
                        <li className="nav-item">
                            <a className="nav-link px-2" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-2" href="/Kusinanichichi/silogmeals">enu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-2" href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>

            </div>
            <div className="ml-3 mt-1"><a className="mx-auto mobile-logo" href="/"><img className="border-orange rounded-circle" src={Logo} style={{ height: '85px', width: '85px' }} alt="" /></a></div>
            
            <div className="mobile-nav ">
                
                <div className="mobile-nav__position">
                
                    {menu}
                </div>
                <div className={`nav-menu-btn mr-4 shadow-lg ml-auto ${showMenu ? "open" : ""}`} onClick={() => setShowMenu(!showMenu)}>
                    <div className="ml-auto nav-menu-btn__burger"></div>

                </div>
            </div>





        </div>

    );
}

export default Navbar;
