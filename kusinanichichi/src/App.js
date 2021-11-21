import './assets/css/App.css'
import './assets/css/bootstrap.min.css'
import Logo from './assets/img/logo.jpg'


function App() {
  return (
    <div className="">
      <nav className="navbar bg-dark fixed-top">
        <a className="navbar-brand" href="#"><img className="rounded-circle" src={Logo} style={{ height: '65px', width: '65px' }} /></a>

        <div className="">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>



      </nav>
    </div>
  );
}

export default App;
