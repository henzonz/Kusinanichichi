import React, {useState} from 'react';
import './assets/css/bootstrap.min.css'
import Logo from './assets/img/logo.jpg'
import './assets/css/Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'




function Navbar() {
const [showMenu, setShowMenu] = useState(false)
const menuBtn = document.querySelector('.nav-menu-btn');
const isActive = document.querySelector('.open');

let menuOpen = false;

// menuBtn.addEventListener('click', () => {
//     menuBtn.classList.toggle('open');
// })

// if(menuBtn){
//     menuBtn.addEventListener('click', () => {
//     menuBtn.classList.toggle('open');
// })
// }


let menu

if(showMenu){
    menuBtn.classList.toggle('open');
    menu = <div className="h2">MENU</div>
}




    return (
        <div>
            {/* <nav className="ml-4 nav-mobile">
                <span className="h3">
                    <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)}/>
                </span>
            </nav>
            */}
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
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/silogmeals">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contacts">Contacts</a>
                        </li>
                    </ul>

                </nav>
            </div>
            <div className={`nav-menu-btn ml-auto ${showMenu ? "open" : ""}`} onClick={() => setShowMenu(!showMenu)}>
                <div className="nav-menu-btn__burger"></div>
            </div>
            {menu}
            

        </div>

    );
}

export default Navbar;
