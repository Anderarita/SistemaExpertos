import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { DropdownHorario } from "../components/DropdownHorario"; // Asegúrate de que la ruta sea correcta
import { desc } from "motion/react-client";

// Lista de gimnasios
const gymLocations = [
  {
    name: "Gimnasio Municipal",
    lat: 14.775016,
    lng: -88.779716,
    description: "Un gimnasio con equipos modernos.",
    Contactanos: "97409090",
    schedule: {
      lunes: "6:00 AM - 9:00 PM",
      martes: "6:00 AM - 9:00 PM",
      miércoles: "6:00 AM - 9:00 PM",
      jueves: "6:00 AM - 9:00 PM",
      viernes: "6:00 AM - 9:00 PM",
      sábado: "7:00 AM - 5:00 PM",
      domingo: "Cerrado",
    },
  },
  {
    name: "Next Level Club",
    lat: 14.771493,
    lng: -88.776114,
    description: "Gimnasio para entrenamiento funcional.",
    Contactanos: "97409090",
    schedule: {
      lunes: "6:00 AM - 9:00 PM",
      martes: "6:00 AM - 9:00 PM",
      miércoles: "6:00 AM - 9:00 PM",
      jueves: "6:00 AM - 9:00 PM",
      viernes: "6:00 AM - 9:00 PM",
      sábado: "7:00 AM - 5:00 PM",
      domingo: "Cerrado",
    },
  },
  {
    name: "Spartan Gym",
    lat: 14.7969,
    lng: -88.770053,
    description: "Gimnasio con clases grupales.",
    Contactanos: "97409090",
    schedule: {
      lunes: "6:00 AM - 9:00 PM",
      martes: "6:00 AM - 9:00 PM",
      miércoles: "6:00 AM - 9:00 PM",
      jueves: "6:00 AM - 9:00 PM",
      viernes: "6:00 AM - 9:00 PM",
      sábado: "7:00 AM - 5:00 PM",
      domingo: "Cerrado",
    },
  },
  {
    name: "Gym Invictus",
    lat: 14.761441,
    lng: -88.776088,
    description: "Gimnasio especializado en pesas.",
    Contactanos: "97409090",
    schedule: {
      lunes: "6:00 AM - 9:00 PM",
      martes: "6:00 AM - 9:00 PM",
      miércoles: "6:00 AM - 9:00 PM",
      jueves: "6:00 AM - 9:00 PM",
      viernes: "6:00 AM - 9:00 PM",
      sábado: "7:00 AM - 5:00 PM",
      domingo: "Cerrado",
    },
  },
  {
    name: "Lion's Box Fitness",
    lat: 14.76545,
    lng: -88.774556,
    description: "Gimnasio con piscina y spa.",
    Contactanos: "97409090",
    schedule: {
      lunes: "6:00 AM - 9:00 PM",
      martes: "6:00 AM - 9:00 PM",
      miércoles: "6:00 AM - 9:00 PM",
      jueves: "6:00 AM - 9:00 PM",
      viernes: "6:00 AM - 9:00 PM",
      sábado: "7:00 AM - 5:00 PM",
      domingo: "Cerrado",
    },
  },
  {
    name: "Oasis All Natural",
    lat: 14.765338,
    lng: -88.775616,
    description: "Gimnasio con entrenadores personales.",
    Contactanos: "97409090",
    schedule: {
      lunes: "6:00 AM - 9:00 PM",
      martes: "6:00 AM - 9:00 PM",
      miércoles: "6:00 AM - 9:00 PM",
      jueves: "6:00 AM - 9:00 PM",
      viernes: "6:00 AM - 9:00 PM",
      sábado: "7:00 AM - 5:00 PM",
      domingo: "Cerrado",
    },
  },
  {
    name: "Club VIP Gimnasio y Café",
    lat: 14.766725,
    lng: -88.778123,
    description: "Gimnasio con máquinas de última generación.",
    Contactanos: "97409090",
    schedule: {
      lunes: "6:00 AM - 9:00 PM",
      martes: "6:00 AM - 9:00 PM",
      miércoles: "6:00 AM - 9:00 PM",
      jueves: "6:00 AM - 9:00 PM",
      viernes: "6:00 AM - 9:00 PM",
      sábado: "7:00 AM - 5:00 PM",
      domingo: "Cerrado",
    },
  },
  {
    name: "Mass Fitness",
    lat: 14.767198,
    lng: -88.779544,
    description: "Gimnasio con clases de yoga y pilates.",
    Contactanos: "97409090",
    schedule: {
      lunes: "6:00 AM - 9:00 PM",
      martes: "6:00 AM - 9:00 PM",
      miércoles: "6:00 AM - 9:00 PM",
      jueves: "6:00 AM - 9:00 PM",
      viernes: "6:00 AM - 9:00 PM",
      sábado: "7:00 AM - 5:00 PM",
      domingo: "Cerrado",
    },
  },
  {
    name: "BULL Fit Club",
    lat: 14.775785,
    lng: -88.773921,
    description: "Gimnasio con área de cardio.",
    Contactanos: "97409090",
    schedule: {
      lunes: "6:00 AM - 9:00 PM",
      martes: "6:00 AM - 9:00 PM",
      miércoles: "6:00 AM - 9:00 PM",
      jueves: "6:00 AM - 9:00 PM",
      viernes: "6:00 AM - 9:00 PM",
      sábado: "7:00 AM - 5:00 PM",
      domingo: "Cerrado",
    },
  },
  {
    name: "Artemis Fitness",
    lat: 14.775533,
    lng: -88.774292,
    description: "Gimnasio con entrenadores especializados.",
    Contactanos: "97409090",
    schedule: {
      lunes: "6:00 AM - 9:00 PM",
      martes: "6:00 AM - 9:00 PM",
      miércoles: "6:00 AM - 9:00 PM",
      jueves: "6:00 AM - 9:00 PM",
      viernes: "6:00 AM - 9:00 PM",
      sábado: "7:00 AM - 5:00 PM",
      domingo: "Cerrado",
    },
  },
];

const MapPage = () => {
  const [selectedGym, setSelectedGym] = useState(null); // Estado para el gimnasio seleccionado

  return (
    <div className="map-page">
      <h2 className="text-center text-2xl text-center font-bold my-4 mt-20">
        Gimnasios en Santa Rosa de Copán
      </h2>

      {/* Contenedor principal con flex */}
      <div className="flex flex-col md:flex-row gap-4 px-4 pt-10">
        {/* Mapa */}
        <div
          className={`w-full ${
            selectedGym ? "md:w-2/3" : "md:w-full"
          } h-[400px]`}
        >
          <MapContainer
            center={[14.7718, -88.7794]}
            zoom={15}
            style={{ width: "100%", height: "100%" }}
            scrollWheelZoom={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            {gymLocations.map((gym, index) => (
              <Marker
                key={index}
                position={[gym.lat, gym.lng]}
                icon={
                  new L.Icon({
                    iconUrl: "/src/assets/Moveit.png", // Cambiar o quitar si no tienes icono
                    iconSize: [25, 25],
                    iconAnchor: [12, 24],
                    popupAnchor: [0, -24],
                  })
                }
                eventHandlers={{
                  click: () => setSelectedGym(gym),
                }}
              >
                <Popup>{gym.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {selectedGym && (
          <div className="w-full md:w-1/3 h-[400px] bg-white p-4 shadow-md rounded-md overflow-auto flex flex-col justify-between">
            <div>
              <h3 className="text-xl text-center font-semibold mb-2">
                {selectedGym.name}
              </h3>
              <p>{selectedGym.description}</p>
              <p className="mt-2">Contacto: {selectedGym.Contactanos}</p>

              {/* Dropdown de horario */}
              {selectedGym.schedule && (
                <DropdownHorario schedule={selectedGym.schedule} />
              )}
            </div>
            <button
              className="mt-4 px-4 py-2 bg-red-400 text-white flex-button rounded hover:bg-red-600 justify-between"
              onClick={() => setSelectedGym(null)}
            >
              Cerrar información
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapPage;
