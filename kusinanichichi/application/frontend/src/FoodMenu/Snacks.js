import { useEffect, useState } from "react";
import Axios from 'axios';
import '../assets/css/Menu.css'
import '../assets/css/bootstrap.min.css'
import BuffaloWings from '../assets/img/buffalo_wings.jpeg'
import CheesyWings from '../assets/img/cheesywings.jpeg'
import Siomai from '../assets/img/siomai.jpeg'



function Snacks() {
    const [snackMenu, setSnackMenu] = useState([]);
   
    useEffect(() => {
        Axios.get("http://localhost:3001/snackmenu").then((response) => {
            setSnackMenu(response.data);
        });
    });
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
                        {snackMenu.map((item, i) => {
                        return (
                            <div className="card col-lg-4 col-sm-6 border-0 food_cards">
                                <img className="card-img-top m-auto rounded border_nude" src={item.snackImgPath} style={{ height: '190px', width: '235px' }} alt="" />
                                <div className="card-body">
                                    <div className="card-title menu_writing"> 
                                     &#8369;{item.snackPrice} &nbsp; — &nbsp;{item.snackName}
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
                    <a className="btn btn-animation border_nude mt-3 menu_writing current" href="/snacks" role="button">Snacks</a>
                    <a className="btn btn-animation border_nude mt-3 menu_writing" href="/drinks" role="button">Drinks</a>
                </div>
                <div className="container col mt-2 mr-4">
                    <div className="d-flex row flex-wrap justify-content-around text-center">
                    {snackMenu.map((item, i) => {
                        return (
                            <div className="card col-lg-5 col-md-6 border-0 food_cards m-2">
                                <img className="card-img-top m-auto rounded border_nude" src={item.snackImgPath} style={{ height: '190px', width: '235px' }} alt="" />
                                <div className="card-body">
                                    <div className="card-title menu_writing"> 
                                     &#8369;{item.snackPrice} &nbsp; — &nbsp;{item.snackName}
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

export default Snacks;
