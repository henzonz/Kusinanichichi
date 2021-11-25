import '../assets/css/Menu.css'
import '../assets/css/bootstrap.min.css'
import Logo from '../assets/img/logo.jpg'
import Sisig from '../assets/img/sisig.jpg'
import Wings from '../assets/img/wings.jpg'
import Sweets from '../assets/img/mango_overload.jpg'


function Snacks() {
    return (
        <div className="page">
            <div className="row food_options">
                <div className="col-3 d-flex flex-column">
                    <a className="btn border-dark bg-light m-3 menu_writing" href="/silogmeals" role="button">Silog Meals</a>
                    <a className="btn border-dark bg-light m-3 menu_writing" href="/snacks" role="button">Snacks</a>
                    <a className="btn border-dark bg-light m-3 menu_writing" href="/drinks" role="button">Drinks</a>
                </div>
            </div>
        </div>
    );
}

export default Snacks;
