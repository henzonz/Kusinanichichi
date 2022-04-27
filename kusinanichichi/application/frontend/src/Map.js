import { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

// google map structure for react (future reference)
// ** used iframe for google maps instead due to this being more complex **
class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                style={{ width: "350px", height: "270px" }}
                zoom={10}
                initialCenter={
                    {
                        lat: 14.278797,
                        lng: 121.055166
                    }
                }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ""
})(MapContainer)