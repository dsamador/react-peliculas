import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { actorPeliculaDTO } from './FormularioActores.model';
import { ReactElement } from 'react';

export default function TypeAheadActores(props: typeAheadActoresProps) {

    const actores: actorPeliculaDTO[] = [
        {id: 1, nombre: 'Tommy Lee Jones', personaje: '', foto:'https://m.media-amazon.com/images/M/MV5BMTkyNjc4MDc0OV5BMl5BanBnXkFtZTcwOTc5OTUwOQ@@._V1_UX214_CR0,0,214,317_AL_.jpg'},
        {id: 2, nombre: 'Tom Crusa', personaje: '', foto:'https://m.media-amazon.com/images/M/MV5BMTgzNjA1MjY2M15BMl5BanBnXkFtZTYwMjgzOTk0._V1_UX214_CR0,0,214,317_AL_.jpg'},
        {id: 3, nombre: 'Tonto', personaje: '', foto:'https://m.media-amazon.com/images/M/MV5BODYxNzE4OTk5Nl5BMl5BanBnXkFtZTcwODYyMDYzMw@@._V1_UY317_CR12,0,214,317_AL_.jpg'},
    ]

    const seleccion: actorPeliculaDTO[] = [];

    return (
        <>
            <label htmlFor="">Actores</label>
            <Typeahead
                id="typeahead"
                onChange={actores => {
                    if(props.actores.findIndex(x => x.id === actores[0].id) === -1){
                        props.onAdd([...props.actores, actores[0]])
                    }                    
                }}
                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor..."
                minLength={2}
                flip={true}
                selected={seleccion}
                renderMenuItemChildren={actor => (
                    <>
                        <img src={actor.foto} alt="imagen actor"
                            style={{
                                height: '64px',
                                marginRight: '10px',
                                width: '64px'
                            }}
                        />
                        <span>{actor.nombre}</span>
                    </>
                )}
            />
            <ul className="list-group mt-1">
                {props.actores.map(actor => 
                <li
                    className="list-group-item list-group-item-action"
                    key={actor.id}
                >
                    {props.listadoUI(actor)}
                    <span
                        className="badge badge-secondary badge-pill pointer ml-1"
                        onClick={()=> props.onRemove(actor)}                       
                    >X</span>

                </li> )}
            </ul>
        </>
    )
}

interface typeAheadActoresProps{
    actores: actorPeliculaDTO[];
    onAdd(actores: actorPeliculaDTO[]): void;
    listadoUI(actor: actorPeliculaDTO): ReactElement;
    onRemove(actor: actorPeliculaDTO): void;
}