
const DrinkItems = ({ 
    itemName,
    itemSizeSm, itemSizeMd, itemSizeLg, 
    itemPriceSm, itemPriceMd, itemPriceLg, 
    itemImgPath 
}) => {
    var drinkPriceInDecimalsSm = parseFloat(itemPriceSm).toFixed(2);
    var drinkPriceInDecimalsMd = parseFloat(itemPriceMd).toFixed(2);
    var drinkPriceInDecimalsLg = parseFloat(itemPriceLg).toFixed(2);
    return (
        <div className="card col-lg-5 col-md-6 border-0 food_cards m-2">
            <img className="food-img card-img-top m-auto rounded border-orange" src={itemImgPath} style={{ height: '190px', width: '235px' }} alt="" />
            <div className="card-body">
                <div className="card-title menu_writing"> {itemName}
                    <div className="text-muted">{itemSizeSm}oz — {itemSizeMd}oz — {itemSizeLg}oz </div>
                    <div className="menu_writing"> ₱{drinkPriceInDecimalsSm} — ₱{drinkPriceInDecimalsMd} — ₱{drinkPriceInDecimalsLg} </div>
                    <div>NATA and Pearl ₱10.00/scoop </div>
                </div>
            </div>
        </div>
    );
}

export default DrinkItems