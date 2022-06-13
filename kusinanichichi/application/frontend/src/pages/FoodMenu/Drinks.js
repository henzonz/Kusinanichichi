import { useEffect, useState } from "react";
import Axios from 'axios';
import '../../assets/css/Menu.css';
import FoodCategoryBtns from "../../components/FoodCategoryBtns";
import DrinkItems from "../../components/DrinkItems";
import Loader from "../../components/Loader";




function Drinks() {

    const [drinkMenu, setDrinkMenu] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        Axios.get("https://kusinanichichi.herokuapp.com/drinkmenu").then((response) => {
            setDrinkMenu(response.data);
            setLoaded(true);
        });
    }, []);

    return (
        <div className="menupage container">
            {/* Larger screen */}
            <div className="row">
                <FoodCategoryBtns currentDrinks="current"/>
                {loaded ? <div className="mx-auto col mt-2 mr-4">
                    <div className="d-flex row flex-wrap justify-content-around text-center">
                        {drinkMenu.map((item, i) => {
                            return (
                                <DrinkItems
                                    key={item.id} itemName={item.drinkName}
                                    itemSizeSm={item.drinkSizeSm} itemSizeMd={item.drinkSizeMd} itemSizeLg={item.drinkSizeLg}
                                    itemPriceSm={item.drinkPriceSm} itemPriceMd={item.drinkPriceMd} itemPriceLg={item.drinkPriceLg}
                                    itemImgPath={item.drinkImgPath}
                                />
                            );
                        })}
                    </div>
                </div> :
                    <Loader />}
            </div>
        </div>
    );
}

export default Drinks;
