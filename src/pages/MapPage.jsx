import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Importamos Leaflet

const MapPage = () => {
  const [gymLocations, setGymLocations] = useState([
    { name: "Gym Iron Body", lat: 14.7718, lng: -88.7794 },
    { name: "Gym Zone", lat: 14.7723, lng: -88.7780 },
    { name: "Spartan Gym", lat: 14.7705, lng: -88.7768 },
    { name: "Fitness House", lat: 14.7695, lng: -88.7812 },
  ]);

  return (
    <div className="map-page">
      <h2 className="text-center text-2xl font-bold my-4">Gimnasios en Santa Rosa de Copán</h2>

      <MapContainer
        center={[14.7718, -88.7794]}  // Centro del mapa: Coordenadas de Gym Iron Body
        zoom={15}                      // Nivel de zoom
        style={{ width: "100%", height: "200px" }}  // Tamaño del mapa
        scrollWheelZoom={false}         // Desactivar zoom con la rueda del ratón
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Usando OpenStreetMap como proveedor de tiles
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {gymLocations.map((gym) => (
          <Marker
            key={gym.name}
            position={[gym.lat, gym.lng]}
            icon={new L.Icon({
              iconUrl: "/path-to-icon.png", // Asegúrate de reemplazar esto con tu propio icono
              iconSize: [25, 25], // Tamaño del icono
              iconAnchor: [12, 24],
              popupAnchor: [0, -24],
            })}
          >
            <Popup>{gym.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPage;




