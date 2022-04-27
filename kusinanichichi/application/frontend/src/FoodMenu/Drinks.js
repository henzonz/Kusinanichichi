import { useEffect, useState } from "react";
import Axios from 'axios';
import '../assets/css/Menu.css'
import '../assets/css/bootstrap.min.css'
import Sweets from '../assets/img/mango_overload.jpeg'



function Drinks() {

    const [drinkMenu, setDrinkMenu] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/drinkmenu").then((response) => {
            setDrinkMenu(response.data);
        });
    });

    return (
        <div className="menupage container">
            {/* Larger screen */}
            <div className="row">
                <div className="col-md-4 py-2 d-flex flex-column flex-wrap">
                    <a className="btn btn-animation btn-bg border-orange menu_writing" href="/silogmeals" role="button">Silog Meals</a>
                    <a className="btn btn-animation btn-bg border-orange mt-3 menu_writing" href="/snacks" role="button">Snacks</a>
                    <a className="btn btn-animation btn-bg border-orange mt-3 menu_writing current" href="/drinks" role="button">Drinks</a>
                    <a className="btn btn-animation btn-bg border-orange mt-3 menu_writing" href="/wings" role="button">Wings</a>
                </div>
                <div className="mx-auto col mt-2 mr-4">
                    <div className="d-flex row flex-wrap justify-content-around text-center">
                        {drinkMenu.map((item, i) => {
                            var drinkPriceInDecimalsSm = parseFloat(item.drinkPriceSm).toFixed(2);
                            var drinkPriceInDecimalsMd = parseFloat(item.drinkPriceMd).toFixed(2);
                            var drinkPriceInDecimalsLg = parseFloat(item.drinkPriceLg).toFixed(2);
                            return (
                                <div className="card col-lg-5 col-md-6 border-0 food_cards m-2">
                                    <img className="food-img card-img-top m-auto rounded border-orange" src={item.drinkImgPath} style={{ height: '190px', width: '235px' }} alt="" />
                                    <div className="card-body">
                                        <div className="card-title menu_writing"> {item.drinkName}
                                            <div className="text-muted">{item.drinkSizeSm}oz — {item.drinkSizeMd}oz — {item.drinkSizeLg}oz </div>
                                            <div className="menu_writing"> ₱{drinkPriceInDecimalsSm} — ₱{drinkPriceInDecimalsMd} — ₱{drinkPriceInDecimalsLg} </div>
                                            <div>NATA and Pearl ₱10.00/scoop </div>
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

export default Drinks;
