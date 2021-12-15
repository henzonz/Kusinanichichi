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


function SilogMeals() {

    return (
        <div className="page container-fluid">
            {/* Mobile screen */}
            <div id="food_options_mobile" className="row food_options mt-4">
                <div className="col-md-6 col-lg-5 col-11 py-2 d-flex container flex-column flex-wrap food_options">
                    <a className="btn bg_xtrablk border border_nude menu_writing" href="/silogmeals" role="button">Silog Meals</a>
                    <a className="btn bg_xtrablk border border_nude mt-3 menu_writing" href="/snacks" role="button">Snacks</a>
                    <a className="btn bg_xtrablk border border_nude mt-3 menu_writing" href="/drinks" role="button">Drinks</a>
                </div>
                <div className="container mt-5">
                    <div className="d-flex row text-center">
                        <div className="card col-lg-4 col-sm-6 bg_xtrablk border-0 food_cards">
                            <img className="card-img-top m-auto border rounded border_nude" src={Tapsilog} style={{ height: '175px', width: '235px' }} alt="" />
                            <div className="card-body">
                                <div className="card-title font-weight-bold menu_writing">Tapsilog</div>
                            </div>
                        </div>
                        <div className="card col-lg-4 col-sm-6 bg_xtrablk border-0 food_cards">
                            <img className="card-img-top m-auto border rounded border_nude" src={Tocilog} style={{ height: '175px', width: '235px' }} alt="" />
                            <div className="card-body">
                                <div className="card-title font-weight-bold menu_writing">Tocilog</div>
                            </div>
                        </div>
                        <div className="card col-lg-4 col-sm-6 bg_xtrablk border-0 food_cards">
                            <img className="card-img-top m-auto border rounded border_nude" src={Liemposilog} style={{ height: '175px', width: '235px' }} alt="" />
                            <div className="card-body">
                                <div className="card-title font-weight-bold menu_writing">Liemposilog</div>
                            </div>
                        </div>
                        <div className="card col-lg-4 col-sm-6 bg_xtrablk border-0 food_cards">
                            <img className="card-img-top m-auto border rounded border_nude" src={Hotsilog} style={{ height: '175px', width: '235px' }} alt="" />
                            <div className="card-body">
                                <div className="card-title font-weight-bold menu_writing">Hotsilog</div>
                            </div>
                        </div>
                        <div className="card col-lg-4 col-sm-6 bg_xtrablk border-0 food_cards">
                            <img className="card-img-top m-auto border rounded border_nude" src={Chicksilog} style={{ height: '175px', width: '235px' }} alt="" />
                            <div className="card-body">
                                <div className="card-title font-weight-bold menu_writing">Chicksilog</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Larger screen */}
            <div id="food_options_lgscrn" className="row food_options">
                <div className="col-md-4 py-2 d-flex flex-column flex-wrap food_options">
                    <a className="btn bg_xtrablk border border_nude menu_writing" href="/silogmeals" role="button">Silog Meals</a>
                    <a className="btn bg_xtrablk border border_nude mt-3 menu_writing" href="/snacks" role="button">Snacks</a>
                    <a className="btn bg_xtrablk border border_nude mt-3 menu_writing" href="/drinks" role="button">Drinks</a>
                </div>


                <div className="container col mt-2 mr-4">
                    <div className="d-flex row flex-wrap justify-content-around text-center">
                        <div className="card bg_xtrablk col-lg-5 col-md-6 border-0 food_cards m-2">
                            <img className="card-img-top m-auto border rounded border_nude" src={Tapsilog} style={{ height: '175px', width: '200px' }} alt="" />
                            <div className="card-body">
                                <div className="card-title font-weight-bold menu_writing">Tapsilog</div>
                            </div>
                        </div>
                        <div className="card bg_xtrablk col-lg-5 col-md-6 border-0 food_cards m-2">
                            <img className="card-img-top m-auto border rounded border_nude" src={Tocilog} style={{ height: '175px', width: '200px' }} alt="" />
                            <div className="card-body">
                                <div className="card-title font-weight-bold menu_writing">Tocilog</div>
                            </div>
                        </div>
                        <div className="card bg_xtrablk col-lg-5 col-md-6 border-0 food_cards m-2">
                            <img className="card-img-top m-auto border rounded border_nude" src={Liemposilog} style={{ height: '175px', width: '200px' }} alt="" />
                            <div className="card-body">
                                <div className="card-title font-weight-bold menu_writing">Liemposilog</div>
                            </div>
                        </div>
                        <div className="card bg_xtrablk col-lg-5 col-md-6 border-0 food_cards m-2">
                            <img className="card-img-top m-auto border rounded border_nude" src={Hotsilog} style={{ height: '175px', width: '200px' }} alt="" />
                            <div className="card-body">
                                <div className="card-title font-weight-bold menu_writing">Hotsilog</div>
                            </div>
                        </div>
                        <div className="card bg_xtrablk col-lg-5 col-md-6 border-0 food_cards m-2">
                            <img className="card-img-top m-auto border rounded border_nude" src={Chicksilog} style={{ height: '175px', width: '200px' }} alt="" />
                            <div className="card-body">
                                <div className="card-title font-weight-bold menu_writing">Chicksilog</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SilogMeals;
