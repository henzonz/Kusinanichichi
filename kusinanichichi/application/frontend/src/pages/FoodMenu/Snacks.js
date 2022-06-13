import { useEffect, useState } from "react";
import Axios from 'axios';
import '../../assets/css/Menu.css';
import Loader from "../../components/Loader";
import FoodCategoryBtns from "../../components/FoodCategoryBtns";
import MenuItems from "../../components/MenuItems";




function Snacks() {
    const [snackMenu, setSnackMenu] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        Axios.get("https://kusinanichichi.herokuapp.com/snackmenu").then((response) => {
            setSnackMenu(response.data);
            setLoaded(true);
        });
    }, []);
    return (
        <div className="menupage container">
            <div className="row">
                <FoodCategoryBtns currentSnacks="current"/>
                {loaded ? <div className="mx-auto col mt-2 mr-4">
                    <div className="d-flex row flex-wrap justify-content-around text-center">
                        {snackMenu.map((item) => {
                            return (
                                <MenuItems key={item.id} itemName={item.snackName} itemPrice={item.snackPrice} itemImgPath={item.snackImgPath} />
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

export default Snacks;
