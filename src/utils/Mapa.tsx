import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet"
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { coordenadaDTO } from './coordenadas.model';
import { useState } from "react";


let DefaultIcon = L.icon ({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Mapa(props: mapaProps) {

    const [coordenadas, setCoordenadas] = useState<coordenadaDTO[]>([])

    return (
        <div>
            <MapContainer
                center={[11.222972, -74.209530]}
                zoom={14}
                style={{height: props.height}}
            >
                <TileLayer attribution="React Peliculas"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ClickMapa setPunto={coordenadas => {
                    setCoordenadas([coordenadas])
                }} />
                {coordenadas.map(coordenada => <Marcador key={coordenada.lat+coordenada.lng} 
                    {...coordenada}
                />)}
            </MapContainer>
        </div>
    )
}

function ClickMapa(props: clickMapaProps){
    useMapEvent('click', e=> {
        props.setPunto({lat: e.latlng.lat, lng:e.latlng.lng})
    })
    return null;
}

interface clickMapaProps {
    setPunto(coordenadas: coordenadaDTO):void;
}

function Marcador(props: coordenadaDTO){
    return(
        <>
            <Marker position={[props.lat, props.lng]} />
        </>
    )
}

interface mapaProps{
    height: string;
}

Mapa.defaultProps = {
    height: '500px'
}