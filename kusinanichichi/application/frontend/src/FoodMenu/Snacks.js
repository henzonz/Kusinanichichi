import '../assets/css/Menu.css'
import '../assets/css/bootstrap.min.css'
import Logo from '../assets/img/logo.jpg'
import Sisig from '../assets/img/sisig.jpg'
import Wings from '../assets/img/wings.jpg'
import Sweets from '../assets/img/mango_overload.png'
import Hotsilog from '../assets/img/hotsilog.jpg'
import Liemposilog from '../assets/img/liemposilog.jpg'
import Tapsilog from '../assets/img/tapsilog.jpg'
import Tocilog from '../assets/img/tocinosilog.jpg'
import Chicksilog from '../assets/img/chicksilog.jpg'
import BuffaloWings from '../assets/img/buffalo_wings.jpeg'
import CheesyWings from '../assets/img/cheesy_wings.jpeg'
import Siomai from '../assets/img/siomai.jpeg'


function Snacks() {
    return (
        <div className="page container-fluid">
            {/* Mobile screen */}
            <div id="food_options_mobile" className="row">
                <div className="col-md-6 col-lg-5 col-11 py-2 d-flex container flex-column flex-wrap food_options">
                    <a className="btn border_nude menu_writing" href="/silogmeals" role="button">Silog Meals</a>
                    <a className="btn border_nude mt-3 menu_writing current" href="/snacks" role="button">Snacks</a>
                    <a className="btn border_nude mt-3 menu_writing" href="/drinks" role="button">Drinks</a>
                </div>
                <div className="container mt-5">
                    <div className="d-flex row text-center">
                        <div className="card col-lg-4 col-sm-6 border-0 food_cards">
                            <img className="card-img-top m-auto rounded border_nude" src={BuffaloWings} style={{ height: '175px', width: '235px' }} alt="" />
                            <div className="card-body">
                                <div className="card-title menu_writing">Buffalo Wings</div>
                            </div>
                        </div>
                        <div className="card col-lg-4 col-md-6 border-0 food_cards">
                            <img className="card-img-top m-auto rounded border_nude" src={CheesyWings} style={{ height: '175px', width: '200px' }} alt="" />
                            <div className="card-body">
                                <div className="card-title menu_writing">Cheesy Wings</div>
                            </div>
                        </div>
                        <div className="card col-lg-4 col-md-6 border-0 food_cards">
                            <img className="card-img-top m-auto rounded border_nude" src={Siomai} style={{ height: '175px', width: '200px' }} alt="" />
                            <div className="card-body">
                                <div className="card-title menu_writing">Siomai</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Larger screen */}
            <div id="food_options_lgscrn" className="row">
                <div className="col-md-4 py-2 d-flex flex-column flex-wrap">
                    <a className="btn btn-animation border_nude menu_writing" href="/silogmeals" role="button">Silog Meals</a>
                    <a className="btn btn-animation border_nude mt-3 menu_writing current" href="/snacks" role="button">Snacks</a>
                    <a className="btn btn-animation border_nude mt-3 menu_writing" href="/drinks" role="button">Drinks</a>
                </div>
                <div className="container col mt-2 mr-4">
                    <div className="d-flex row flex-wrap justify-content-around text-center">
                        <div className="card col-lg-5 col-md-6 border-0 food_cards m-2">
                            <img className="card-img-top m-auto rounded border_nude" src={BuffaloWings} style={{ height: '175px', width: '200px' }} alt="" />
                            <div className="card-body">
                                <div className="card-title menu_writing">Buffalo Wings</div>
                            </div>
                        </div>
                        <div className="card col-lg-5 col-md-6 border-0 food_cards m-2">
                            <img className="card-img-top m-auto rounded border_nude" src={CheesyWings} style={{ height: '175px', width: '200px' }} alt="" />
                            <div className="card-body">
                                <div className="card-title menu_writing">Cheesy Wings</div>
                            </div>
                        </div>
                        <div className="card col-lg-5 col-md-6 border-0 food_cards m-2">
                            <img className="card-img-top m-auto rounded border_nude" src={Siomai} style={{ height: '175px', width: '200px' }} alt="" />
                            <div className="card-body">
                                <div className="card-title menu_writing">Siomai</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Snacks;
