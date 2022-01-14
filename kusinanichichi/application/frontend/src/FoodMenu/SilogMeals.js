import { useEffect, useState } from "react";
import Axios from 'axios';

import '../assets/css/Menu.css'
import '../assets/css/bootstrap.min.css'

function SilogMeals() {

    const [foodMenu, setFoodMenu] = useState([]);
   
    useEffect(() => {
        Axios.get("http://localhost:3001/silogmenu").then((response) => {
            setFoodMenu(response.data);
        });
    });

    return (
        <div className="page container-fluid">
            {/* Mobile screen */}

            <div id="food_options_mobile" className="row">
                <div className="col-md-6 col-lg-5 col-11 py-2 d-flex container flex-column flex-wrap food-options__choose">
                    <a className="btn border_nude menu_writing current" href="/silogmeals" role="button">Silog Meals</a>
                    <a className="btn border_nude mt-3 menu_writing" href="/snacks" role="button">Snacks</a>
                    <a className="btn border_nude mt-3 menu_writing" href="/drinks" role="button">Drinks</a>
                </div>
                <div className="container mt-5">
                    <div className="d-flex row text-center">
                    {foodMenu.map((item, i) => {
                        return (
                            <div className="card col-lg-4 col-sm-6 border-0 food_cards">
                                <img className="card-img-top m-auto rounded border_nude" src={item.foodImgPath} style={{ height: '175px', width: '200px' }} alt="" />
                                <div className="card-body">
                                    <div className="card-title menu_writing"> ₱{item.foodPrice} &nbsp; — &nbsp;{item.foodName}</div>
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
                    <a className="btn btn-animation border_nude menu_writing current" href="/silogmeals" role="button">Silog Meals</a>
                    <a className="btn btn-animation border_nude mt-3 menu_writing" href="/snacks" role="button">Snacks</a>
                    <a className="btn btn-animation border_nude mt-3 menu_writing" href="/drinks" role="button">Drinks</a>
                </div>

        

                <div className="container col mt-2 mr-4">
                    <div className="d-flex row flex-wrap justify-content-around text-center">
                    {foodMenu.map((item, i) => {
                        return (
                            <div className="card col-lg-5 col-md-6 border-0 food_cards m-2">
                                <img className="card-img-top m-auto rounded border_nude" src={item.foodImgPath} style={{ height: '175px', width: '200px' }} alt="" />
                                <div className="card-body">
                                    <div className="card-title menu_writing"> 
                                     &#8369;{item.foodPrice} &nbsp; — &nbsp;{item.foodName}
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

export default SilogMeals;
