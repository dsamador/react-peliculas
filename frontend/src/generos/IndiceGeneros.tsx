import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from "axios";
import { generoDTO } from './generos.model';
import { urlGeneros } from '../utils/endpoints';
import ListadoGenerico from '../utils/ListadoGenerico';
import Button from '../utils/Button';


export default function IndiceGeneros(){

    const [generos,setGeneros] = useState<generoDTO[]>();

    useEffect(()=>{
        axios.get(urlGeneros)
            .then((respuesta: AxiosResponse<generoDTO[]>)=>{
                console.log(respuesta);
                setGeneros(respuesta.data);
            })
    },[]);

    return (
        <>        
            <h3>Generos</h3>
            <Link className="btn btn-primary" to='generos/crear'>Crear genero</Link>
            <ListadoGenerico listado={generos}>
                <table className="table table-striped">                    
                    <thead>
                        <tr>
                            <th>Acciones</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generos?.map(genero => 
                        <tr key={genero.id}>
                            
                                <td>
                                    <Link className="btn btn-success" to={`/generos/${genero.id}`}> 
                                        Editar
                                    </Link>
                                    <Button className="btn btn-danger">Borrar</Button>
                                </td>
                               <td>
                                 {genero.nombre}  
                               </td>                            
                        </tr> )}
                    </tbody>
                </table>
            </ListadoGenerico>
        </>
    )
}