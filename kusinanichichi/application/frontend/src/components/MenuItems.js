const MenuItems = ({ itemName, itemPrice, itemImgPath }) => {
    var itemPriceInDecimals = parseFloat(itemPrice).toFixed(2);
    return (
        <div className="card col-lg-5 col-md-6 border-0 food_cards m-2">
            <img className="food-img card-img-top m-auto rounded border-orange" src={itemImgPath} style={{ height: '190px', width: '235px' }} alt="" />
            <div className="card-body">
                <div className="card-title menu_writing">
                    &#8369;{itemPriceInDecimals} &nbsp; — &nbsp;{itemName}
                </div>
            </div>
        </div>
    );
}

export default MenuItems