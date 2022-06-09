import './assets/css/Home.css'
import './assets/css/bootstrap.min.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";



function Home() {
  const items = [
    { id: "1", imgPath: "https://i.imgur.com/BSf6QJ2.jpg" },
    { id: "2", imgPath: "https://i.imgur.com/a7tAoRn.jpg" },
    { id: "3", imgPath: "https://i.imgur.com/siZ80nZ.jpg" },
  ];

  const reviews = [
    { id: "1", imgPath: "https://i.imgur.com/9kXwAf8.jpg" },
    { id: "2", imgPath: "https://i.imgur.com/Ne4t0uG.jpg" },
    { id: "3", imgPath: "https://i.imgur.com/mvkq1VS.jpg" },
    { id: "4", imgPath: "https://i.imgur.com/c87BXKG.jpg" },
  ];

  const renderBestSeller = (item, i) => {
    return (
      <div className="card col-lg-3 col-md-6 border-0 m-2">
        <img className="card-img-top m-auto rounded border-orange border-thickness" src={item.imgPath} style={{ height: '190px', width: '235px' }} alt="" />
      </div>
    );
  }
  const renderReviews = (item, i) => {
    return (
      <div className="card shadow-lg bg-dark col-lg-3 col-md-6 border-0 m-2">
        <img className="card-img-top m-auto rounded" src={item.imgPath} alt="" />
      </div>
    );
  }
  return (
    <div className="homepage">
      <div className="text-center text-muted mb-5">** <u>Please order through our <a className="text-decoration-none" href="https://www.facebook.com/kusinanichichipromisesalasa" target="_blank">Facebook</a> page</u> **</div>
      <div>
        <div className="horizontal-line mb-5">
          <span className="h3 our-best-seller-font">Our Best Sellers</span></div>

        <div className="row">
          <div className="mx-auto col">
            <div className="d-flex row flex-wrap justify-content-around">
              {items.map(renderBestSeller)}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center mb-5">
            <a className="btn btn-animation btn-color mt-4 text-dark"
              href="/silogmeals"
              role="button"
              style={{ width: '115px' }}
              alt="" > Menu <FontAwesomeIcon className="pl-3" icon={faArrowRightFromBracket} /> </a>
          </div>

        </div>
      </div>
      <div className="horizontal-line mb-5"><span className="h3 text-center mt-5 mb-4 reviews-margin__top our-best-seller-font">
        Reviews
      </span></div>

      <div className="row">
        <div className="mx-auto col">
          <div className="d-flex flex-row flex-wrap justify-content-around">
            {reviews.map(renderReviews)}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;
