import './assets/css/Home.css'
import './assets/css/bootstrap.min.css'


function Home() {
  const items = [
    { id: "1", imgPath: "https://i.imgur.com/BSf6QJ2.jpg" },
    { id: "2", imgPath: "https://i.imgur.com/a7tAoRn.jpg" },
    { id: "3", imgPath: "https://i.imgur.com/siZ80nZ.jpg" },
  ];

  const renderBestSeller = (item, i) => {
    return (
      <div className="card col-lg-3 col-md-6 border-0 m-2">
        <img className="food-img card-img-top m-auto rounded border-orange" src={item.imgPath} style={{ height: '190px', width: '235px' }} alt="" />
      </div>
    );
  }
  return (
    <div className="homepage">
      <div className="text-center text-muted mb-5">**<u>Please order through our <a className="text-decoration-none" href="https://www.facebook.com/kusinanichichipromisesalasa" target="_blank">Facebook</a> page</u>**</div>

      {/* <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src="" />
          </div>
        </div>
      </div> */}

      <div className="best-seller-height">
        <div className="text-center h1 our-best-seller-font mb-5">Our Best Sellers
        </div>
        <div className="row">
          <div className="mx-auto col">
            <div className="d-flex row flex-wrap justify-content-around text-center">

              {items.map(renderBestSeller)}

              

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center"> 
          <a className="btn btn-animation btn-color mt-4 menu_writing" href="/silogmeals" role="button" style={{ width: '115px' }} alt="" >Menu</a>
           </div>
          </div>
      </div>
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
