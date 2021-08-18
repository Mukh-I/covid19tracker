import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap, Circle } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../Styles/Map.css'
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Numeral from 'numeral'
import { casesTypeColors } from './utility';

let DefaultIcon = L.icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/585px-Google_Maps_pin.svg.png',
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41]
});

L.Marker.prototype.options.icon = DefaultIcon;


//FUNCTION UPDATES THE CENTER OF THE MAP AS WE CHANGE THE COUNTRY ON THE DROPDOWN
function SetViewOnClick({ center }) {
  const map = useMap();
  map.setView(center, map.getZoom());

  return null;
}


const MapData = ({countries, handleClick, active, critical, name, center, zoom, population}) => {
    console.log(countries)
    console.log(handleClick)
    return ( 
        <div className="map">
        <MapContainer center={center} zoom={zoom}>
     <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />
  <Marker position={center}>
    <Popup>
     <h3>Country: {name}</h3> <br></br>
     <h4>Population: {Numeral(population).format(0,0)}</h4>  <br/>
     <h4>Active Cases: {Numeral(active).format(0,0)}</h4>  <br/>
     <h4>Critical: {Numeral(critical).format(0,0)}</h4>    
    </Popup>
    
  </Marker>
  <SetViewOnClick center={center} />
</MapContainer>
        </div>
     );
}
 
export default MapData;