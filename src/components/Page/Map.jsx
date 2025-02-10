
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [23.8103, 90.4125]; 

  return (
    <MapContainer center={position} zoom={10} style={{ height: "400px", width: "100%" }}>
      
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      
      <Marker position={position}>
        <Popup> Dhaka, Bangladesh</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
