import FamPic from './assets/img/fampic.jpeg'
import './assets/css/Contacts.css'
// import Map from '../src/Map'

function Contacts() {
    return (
        <div className="container contact-page">
            <div className="text-center">
                <div className="row">
                    <div className="col order-1">
                        <div className="m-5"> <span className="h5">PHONE</span>
                            <div>+63 (949) 456-6027</div>
                            <div>or</div>
                            <div>+63 (949) 984-3231</div>
                        </div>
                        <div className="m-5"> <span className="h5">HOURS</span>
                            <div>Monday: 11am — 9pm</div>
                            <div>Tuesday: 11am — 9pm</div>
                            <div>Wednesday: 11am — 9pm</div>
                            <div>Thursday: 11am — 9pm</div>
                            <div>Friday: 11am — 9pm</div>
                            <div>Saturday: 11am — 9pm</div>
                            <div>Sunday: 11am — 9pm</div>
                        </div>
                        <div className="m-5"> <span className="h5">ADDRESS</span>
                            <div>Blk 9 Lot 29 Matthew St. Juana 6 Brgy. San Francisco 4024 Biñan, Philippines</div>
                        </div>
                    </div>
                    <div className="col order-2">
                        <div className="m-5"> <span className="h5"> ORDERS</span>
                            <div>To change or cancel orders, please call us or contact us through Facebook messenger.</div>
                        </div>
                        <div>
                        {/* {' '}<Map></Map> {' '} */}
                        <iframe className="map-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d966.6405260578687!2d121.05463048810928!3d14.27874099937245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x683bca8788172b54!2zMTTCsDE2JzQzLjUiTiAxMjHCsDAzJzE4LjYiRQ!5e0!3m2!1sen!2sus!4v1649299982145!5m2!1sen!2sus"></iframe>

                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
}

export default Contacts;