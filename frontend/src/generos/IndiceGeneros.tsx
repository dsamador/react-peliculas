import { Link } from "react-router-dom";
import { useEffect } from 'react';
import axios, { AxiosResponse } from "axios";
import { generoDTO } from './generos.model';
import { urlGeneros } from '../utils/endpoints';


export default function IndiceGeneros(){

    useEffect(()=>{
        axios.get(urlGeneros)
            .then((respuesta: AxiosResponse<generoDTO[]>)=>{
                console.log(respuesta);
            })
    },[]);

    return (
        <>        
            <h3>Indice Generos</h3>
            <Link to='generos/crear'>Crear genero</Link>
        </>
    )
}