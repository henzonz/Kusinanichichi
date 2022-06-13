const FoodCategoryBtns = ({currentSilog = ' ', currentDrinks = '', currentSnacks = '', currentWings = ''}) => {
    return (
        <div className="col-md-4 py-2 d-flex flex-column flex-wrap">
            <a className={`food-category btn btn-animation btn-bg border-orange mt-3 menu_writing ${currentSilog}`}  href="/silogmeals" role="button">Silog</a>
            <a className={`food-category btn btn-animation btn-bg border-orange mt-3 menu_writing ${currentSnacks}`}  href="/snacks" role="button">Snacks</a>
            <a className={`food-category btn btn-animation btn-bg border-orange mt-3 menu_writing ${currentDrinks}`} href="/drinks" role="button">Drinks</a>
            <a className={`food-category btn btn-animation btn-bg border-orange mt-3 menu_writing ${currentWings}`}  href="/wings" role="button">Wings</a>
        </div>
    );
}


export default FoodCategoryBtns;