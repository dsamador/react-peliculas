import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { actorPeliculaDTO } from './FormularioActores.model';

export default function TypeAheadActores(props: typeAheadActoresProps) {

    const actores: actorPeliculaDTO[] = [
        {id: 1, nombre: 'Tommy Lee Jones', personaje: '', foto:'https://m.media-amazon.com/images/M/MV5BMTkyNjc4MDc0OV5BMl5BanBnXkFtZTcwOTc5OTUwOQ@@._V1_UX214_CR0,0,214,317_AL_.jpg'},
        {id: 2, nombre: 'Tom Crusa', personaje: '', foto:'https://m.media-amazon.com/images/M/MV5BMTgzNjA1MjY2M15BMl5BanBnXkFtZTYwMjgzOTk0._V1_UX214_CR0,0,214,317_AL_.jpg'},
        {id: 3, nombre: 'Juanito', personaje: '', foto:'https://m.media-amazon.com/images/M/MV5BMTkyNjc4MDc0OV5BMl5BanBnXkFtZTcwOTc5OTUwOQ@@._V1_UX214_CR0,0,214,317_AL_.jpg'},
    ]

    return (
        <>
            <label htmlFor="">Actores</label>
            <Typeahead
                id="typeahead"
                onChange={actor => {
                    console.log(actor)
                }}
                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor..."
                minLength={2}
                flip={true}
            />
        </>
    )
}

interface typeAheadActoresProps{
    actores: actorPeliculaDTO[]
}