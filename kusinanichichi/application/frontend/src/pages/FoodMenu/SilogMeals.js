import { useEffect, useState } from "react";
import Axios from 'axios';
import '../../assets/css/Menu.css';
import Loader from "../../components/Loader";
import MenuItems from "../../components/MenuItems";
import FoodCategoryBtns from "../../components/FoodCategoryBtns";


function SilogMeals() {

    const [foodMenu, setFoodMenu] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        Axios.get("https://kusinanichichi.herokuapp.com/silogmenu").then((response) => {
            setFoodMenu(response.data)
            setLoaded(true);
        });

    }, []);


    return (
        <div className="menupage container">
            <div className="row">
                <FoodCategoryBtns currentSilog="current" />
                {loaded ? <div className="mx-auto col mt-2 mr-4">
                    <div className="d-flex row flex-wrap justify-content-around text-center">
                        {foodMenu.map((item) => {
                            return (
                                <MenuItems key={item.id} itemName={item.foodName} itemPrice={item.foodPrice} itemImgPath={item.foodImgPath} />
                            );

                        })}
                    </div>
                </div> :
                    <Loader />}


            </div>

        </div>
    );
}

export default SilogMeals;
