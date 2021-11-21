import './assets/css/Home.css'
import './assets/css/bootstrap.min.css'
import Logo from './assets/img/logo.jpg'

const Home = () => {
    return (
        <div className="page">
            <nav className="navbar bg-dark fixed-top">
                <a className="navbar-brand" href="#"><img className="rounded-circle" src={Logo} style={{ height: '45px', width: '45px' }} /></a>

                <div className="">
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
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
                <div>IS THIS OWKRING?!</div>
                <div>IS THIS OWKRING?!</div>
                <div>IS THIS OWKRING?!</div>
                <div>IS THIS OWKRING?!</div>
                <div>IS THIS OWKRING?!</div>
                <div>IS THIS OWKRING?!</div>
                <div>IS THIS OWKRING?!</div>
                <div>IS THIS OWKRING?!</div>
            {/* <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
            <ol className="caoursel-indicators">
              <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselIndicators" data-slide-to="1"></li>
              <li data-target="#carouselIndicators" data-slide-to="2"></li>
            </ol>
    
            <div className="carousel-inner w-50">
              <div className="carousel-item">
                <img className="d-block" src={Sisig} alt="First slide" style={{  }} />
              </div>
              <div className="carousel-item active">
                <img className="d-block" src={Wings} alt="Second slide" style={{  }} />
              </div>
              <div className="carousel-item">
                <img className="d-block" src={Sweets} alt="Third slide" style={{  }} />
              </div>
              <a className="carousel-control-prev bg-dark" href="#carouselIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next bg-dark" href="#carouselIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div> */}
        </div>
    );
};


export default Home;
