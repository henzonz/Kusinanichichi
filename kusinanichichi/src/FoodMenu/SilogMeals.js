import '../assets/css/Menu.css'
import '../assets/css/bootstrap.min.css'
import Logo from '../assets/img/logo.jpg'
import Sisig from '../assets/img/sisig.jpg'
import Wings from '../assets/img/wings.jpg'
import Sweets from '../assets/img/mango_overload.jpg'
import Hotsilog from '../assets/img/hotsilog.jpg'
import Liemposilog from '../assets/img/liemposilog.jpg'
import Tapsilog from '../assets/img/tapsilog.jpg'
import Tocilog from '../assets/img/tocinosilog.jpg'
import Chicksilog from '../assets/img/chicksilog.jpg'


function SilogMeals() {
    return (
        <div className="page">
            <div className="row food_options ml-2">
                <div className="col-lg-3 col-sm-3 d-flex flex-column border border-dark flex-wrap food_options">
                    <a className="btn border-dark bg-light m-3 menu_writing" href="/silogmeals" role="button">Silog Meals</a>
                    <a className="btn border-dark bg-light m-3 menu_writing" href="/snacks" role="button">Snacks</a>
                    <a className="btn border-dark bg-light m-3 menu_writing" href="/drinks" role="button">Drinks</a>
                    {/* <a className="px-5 pt-3" href="/silogmeals"><button className="btn bg-light mt-3" type="button">Silog Meals</button></a>
                    <a className="px-5 pt-3" href="/snacks"><button className="btn bg-light mt-3" type="button">Snacks</button></a>
                    <a className="px-5 pt-3" href="/drinks"><button className="btn bg-light mt-3" type="button">Drinks</button></a> */}

                </div>

                <div className="container col mt-2 mr-3">
                    <div className="d-flex row text-center">
                        <div className="card col-lg-4 col-sm-6 border-0 food_cards">
                            <img className="card-img-top m-auto" src={Tapsilog} style={{height:'175px', width:'235px'}}  />
                            <div className="card-body">
                                <div className="card-title font-weight-bold">Tapsilog</div>
                            </div>
                        </div>
                        <div className="card col-lg-4 col-sm-6 border-0 food_cards">
                            <img className="card-img-top m-auto" src={Tocilog} style={{height:'175px', width:'235px'}} />
                            <div className="card-body">
                                <div className="card-title font-weight-bold">Tocilog</div>
                            </div>
                        </div>
                        <div className="card col-lg-4 col-sm-6 border-0 food_cards">
                            <img className="card-img-top m-auto" src={Liemposilog} style={{height:'175px', width:'235px'}} />
                            <div className="card-body">
                                <div className="card-title font-weight-bold">Liemposilog</div>
                            </div>
                        </div>
                        <div className="card col-lg-4 col-sm-6 border-0 food_cards">
                            <img className="card-img-top m-auto" src={Hotsilog} style={{height:'175px', width:'235px'}} />
                            <div className="card-body">
                                <div className="card-title font-weight-bold">Hotsilog</div>
                            </div>
                        </div>
                        <div className="card col-lg-4 col-sm-6 border-0 food_cards">
                            <img className="card-img-top m-auto" src={Chicksilog} style={{height:'175px', width:'235px'}} />
                            <div className="card-body">
                                <div className="card-title font-weight-bold">Chicksilog</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SilogMeals;
