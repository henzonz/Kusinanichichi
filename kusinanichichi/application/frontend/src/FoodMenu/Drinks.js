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
        <div className="page container-fluid">
            {/* Mobile screen */}
            <div id="food_options_mobile" className="row food_options mt-4">
                <div className="col-md-6 col-lg-5 col-11 py-2 d-flex container flex-column flex-wrap food_options">
                    <a className="btn border_nude menu_writing" href="/silogmeals" role="button">Silog Meals</a>
                    <a className="btn border_nude mt-3 menu_writing" href="/snacks" role="button">Snacks</a>
                    <a className="btn border_nude mt-3 menu_writing current" href="/drinks" role="button">Drinks</a>
                </div>
                <div className="container mt-5">
                    <div className="d-flex row text-center">
                        {drinkMenu.map((item, i) => {
                            return (
                                <div className="card col-lg-4 col-sm-6 border-0 food_cards">
                                    <img className="card-img-top m-auto rounded border_nude" src={item.drinkImgPath} style={{ height: '190px', width: '235px' }} alt="" />
                                    <div className="card-body">
                                        <div className="card-title menu_writing"> {item.drinkName}
                                            <div className="text-muted">{item.drinkSizeSm}oz — {item.drinkSizeMd}oz — {item.drinkSizeLg}oz </div>
                                            <div className="menu_writing"> ₱{item.drinkPriceSm} — ₱{item.drinkPriceMd} — ₱{item.drinkPriceLg} </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* Larger screen */}
            <div id="food_options_lgscrn" className="row">
                <div className="col-md-4 py-2 d-flex flex-column flex-wrap">
                    <a className="btn btn-animation border_nude menu_writing" href="/silogmeals" role="button">Silog Meals</a>
                    <a className="btn btn-animation border_nude mt-3 menu_writing" href="/snacks" role="button">Snacks</a>
                    <a className="btn btn-animation border_nude mt-3 menu_writing current" href="/drinks" role="button">Drinks</a>
                </div>
                <div className="container col mt-2 mr-4">
                    <div className="d-flex row flex-wrap justify-content-around text-center">
                        {drinkMenu.map((item, i) => {
                            return (
                                <div className="card col-lg-5 col-md-6 border-0 food_cards m-2">
                                    <img className="card-img-top m-auto rounded border_nude" src={item.drinkImgPath} style={{ height: '190px', width: '235px' }} alt="" />
                                    <div className="card-body">
                                        <div className="card-title menu_writing"> {item.drinkName}
                                            <div className="text-muted">{item.drinkSizeSm}oz — {item.drinkSizeMd}oz — {item.drinkSizeLg}oz </div>
                                            <div className="menu_writing"> ₱{item.drinkPriceSm} — ₱{item.drinkPriceMd} — ₱{item.drinkPriceLg} </div>
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
