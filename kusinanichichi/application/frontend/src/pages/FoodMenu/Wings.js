import { useEffect, useState } from "react";
import Axios from 'axios';
import '../../assets/css/Menu.css';
import Loader from "../../components/Loader";
import MenuItems from "../../components/MenuItems";
import FoodCategoryBtns from "../../components/FoodCategoryBtns";


function Wings() {

    const [wingsMenu, setWingsMenu] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        Axios.get("https://kusinanichichi.herokuapp.com/wingsmenu").then((response) => {
            setWingsMenu(response.data);
            setLoaded(true);
        });
    }, []);

    return (
        <div className="menupage container">
            <div className="row">
                <FoodCategoryBtns currentWings="current" />
                {loaded ? <div className="mx-auto col mt-2 mr-4">
                    <div className="d-flex row flex-wrap justify-content-around text-center">
                        {wingsMenu.map((item) => {
                            return (
                                <MenuItems key={item.id} itemName={item.wingsMenuName} itemPrice={item.wingsPrice} itemImgPath={item.wingsImgPath} />
                            );
                        })}
                    </div>
                </div>
                    :
                    <Loader />}
            </div>
        </div>
    );
}

export default Wings;
