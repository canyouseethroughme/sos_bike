import { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      width: "1000px",
      height: "677px",
      latitude: 56.150527,
      longitude: 10.202363,
      zoom: 15
    }
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/stefandrei123/ck1avt2880emk1dqut8336b0s"
        mapboxApiAccessToken="pk.eyJ1Ijoic3RlZmFuZHJlaTEyMyIsImEiOiJjazBjNWZoaXcweXE1M25udjFrdWs1Y2IyIn0.EjIkuQ8tjZNmUi4VIq0MNQ"
        onViewportChange={viewport => this.setState({ viewport })}
        {...this.state.viewport}
      >
        <Marker latitude={56.150527} longitude={10.202363}>
          <div>
            <img src="https://img.icons8.com/ios-filled/50/000000/marker.png" />
          </div>
        </Marker>
      </ReactMapGL>
    );
  }
}

export default Map;
