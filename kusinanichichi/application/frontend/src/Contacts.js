import FamPic from './assets/img/fampic.jpeg'
import './assets/css/Contacts.css'
function Contacts() {
    return (
        <div className="container-fluid page">
            <div>
                <img className="contactfampic" src={FamPic}/>
            </div>
        </div>
    );
}
export default Contacts;