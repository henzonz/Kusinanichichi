import './assets/css/Menu.css'
import './assets/css/bootstrap.min.css'
import Logo from './assets/img/logo.jpg'
import Sisig from './assets/img/sisig.jpg'
import Wings from './assets/img/wings.jpg'
import Sweets from './assets/img/mango_overload.jpg'


function Menu() {
    return (
        <div className="page">
            <nav className="navbar bg-dark fixed-top">
                <a className="navbar-brand" href="#"><img className="rounded-circle" src={Logo} style={{ height: '45px', width: '45px' }} /></a>

                <div className="">
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item">
                            <a className="nav-link" href="/Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Menu">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>

            </nav>
            <div className="row food_options w-50">
                <div className="col d-flex flex-column">
                    <button className="btn bg-light mt-3">Silog Meals</button>
                    <button className="btn bg-light mt-3">Snacks</button>
                    <button className="btn bg-light mt-3">Drinks</button>
                </div>
                <div className="col d-flex snacks">
                    
                    <div className="card p-3">
                        <img className="card-img-top" src={Sisig} />
                        <div className="card-body">
                            <h5 className="card-title">Sisig</h5>
                        </div>
                    </div>
                    <div className="card p-3">
                        <img className="card-img-top" src={Wings} />
                        <div className="card-body">
                            <h5 className="card-title">Wings</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
