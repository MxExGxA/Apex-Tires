import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "../../assets/images/maps/marker.png";

const Maps = () => {
  const marker: Icon = new Icon({
    iconUrl: markerIcon,
    iconSize: [35, 35],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  return (
    <MapContainer
      style={{ height: "510px", width: "75%" }}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      className="max-sm:!w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={marker} position={[51.505, -0.09]}>
        <Popup>
          Apex Store <br /> {"(Fake Location)"}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
