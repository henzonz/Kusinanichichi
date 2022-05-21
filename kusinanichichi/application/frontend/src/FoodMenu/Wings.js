import { useEffect, useState } from "react";
import Axios from 'axios';
import '../assets/css/Menu.css'
import '../assets/css/bootstrap.min.css'



function Wings() {

    const [wingsMenu, setWingsMenu] = useState([]);

    useEffect(() => {
        Axios.get("https://kusinanichichi.herokuapp.com/wingsmenu").then((response) => {
            setWingsMenu(response.data);
        });
    });

    return (
        <div className="menupage container">
            <div className="row">
                <div className="col-md-4 py-2 d-flex flex-column flex-wrap">
                    <a className="btn btn-animation btn-bg border-orange menu_writing" href="/silogmeals" role="button">Silog Meals</a>
                    <a className="btn btn-animation btn-bg border-orange mt-3 menu_writing" href="/snacks" role="button">Snacks</a>
                    <a className="btn btn-animation btn-bg border-orange mt-3 menu_writing" href="/drinks" role="button">Drinks</a>
                    <a className="btn btn-animation btn-bg border-orange mt-3 menu_writing current" href="/wings" role="button">Wings</a>
                </div>
                <div className="mx-auto col mt-2 mr-4">
                    <div className="d-flex row flex-wrap justify-content-around text-center">
                    {wingsMenu.map((item, i) => {
                        var wingsPriceInDecimals = parseFloat(item.wingsPrice).toFixed(2);
                        return (
                            <div className="card col-lg-5 col-md-6 border-0 food_cards m-2">
                                <img className="food-img card-img-top m-auto rounded border-orange" src={item.wingsImgPath} style={{ height: '190px', width: '235px' }} alt="" />
                                <div className="card-body">
                                    <div className="card-title menu_writing"> 
                                     &#8369;{wingsPriceInDecimals} &nbsp; — &nbsp;{item.wingsMenuName}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wings;
