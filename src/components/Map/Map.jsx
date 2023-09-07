'use client'

import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css"

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/1201/1201643.png",
    iconSize: [40, 40]
})

const Map = () => {  
  return (
    <MapContainer center={[49.40429584271844, 32.03247704538362]} zoom={13}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[49.40420439766782, 32.03258778931478]} icon={customIcon}>
            <Popup>
                ТОВ НВФ Покров <br />
                вул. М. Залізняка, 167 <br />
                <br />
                Години роботи: <br />
                Пн-Пт: 08:00–20:00 <br />
                Сб-Нд: вихідний <br />
            </Popup>
        </Marker>
    </MapContainer>
  )
}

export default Map;