import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
const BestSellerSection = () => {
    const items = [
        { id: "1", imgPath: "https://i.imgur.com/BSf6QJ2.jpg" },
        { id: "2", imgPath: "https://i.imgur.com/a7tAoRn.jpg" },
        { id: "3", imgPath: "https://i.imgur.com/siZ80nZ.jpg" },
    ];

    const renderBestSeller = (item) => {
        return (
            <div className="card col-lg-3 col-md-6 border-0 m-2">
                <img className="card-img-top m-auto rounded border-orange border-thickness" src={item.imgPath} style={{ height: '190px', width: '235px' }} alt="" />
            </div>
        );
    }

    return (
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
    );
}

export default BestSellerSection;