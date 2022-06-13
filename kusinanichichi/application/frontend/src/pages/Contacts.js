import '../assets/css/Contacts.css'


function Contacts() {
    return (
        <div className="container contact-page">
            <div className="text-center">
                <div className="row">
                    <div className="col order-1">
                        <div className="m-5"> <span className="h5">PHONE</span>
                            <div className="contact-subtext">+63 (949) 456-6027</div>
                            <div className="contact-subtext">or</div>
                            <div className="contact-subtext">+63 (949) 984-3231</div>
                        </div>
                        <div className="m-5"> <span className="h5">Email</span>
                            <div className="contact-subtext"><a href="mailto: ludyanncharisecatipon@gmail.com">ludyanncharisecatipon@gmail.com</a></div>
                        </div>
                        <div className="m-5"> <span className="h5">HOURS</span>
                            <div className="contact-subtext">Monday: 11am — 9pm</div>
                            <div className="contact-subtext">Tuesday: 11am — 9pm</div>
                            <div className="contact-subtext">Wednesday: 11am — 9pm</div>
                            <div className="contact-subtext">Thursday: 11am — 9pm</div>
                            <div className="contact-subtext">Friday: 11am — 9pm</div>
                            <div className="contact-subtext">Saturday: 11am — 9pm</div>
                            <div className="contact-subtext">Sunday: 11am — 9pm</div>
                        </div>
                        <div className="m-5"> <span className="h5">ADDRESS</span>
                            <div className="contact-subtext">Blk 9 Lot 29 Matthew St. Juana 6 Brgy. San Francisco 4024 Biñan, Philippines</div>
                        </div>
                    </div>
                    <div className="col order-2">
                        <div className="m-5"> <span className="h5"> ORDERS</span>
                            <div className="contact-subtext">To change or cancel orders, please call us or contact us through Facebook messenger.</div>
                        </div>
                        <div>
                            <iframe title="kusinanichichimap" className="map-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d966.6405260578687!2d121.05463048810928!3d14.27874099937245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x683bca8788172b54!2zMTTCsDE2JzQzLjUiTiAxMjHCsDAzJzE4LjYiRQ!5e0!3m2!1sen!2sus!4v1649299982145!5m2!1sen!2sus"></iframe>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
}

export default Contacts;