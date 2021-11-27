import { generoDTO } from '../generos/generos.model';
import FormularioPeliculas from './FormularioPeliculas';
import { cineDTO } from '../cines/cines.model';
import { actorPeliculaDTO } from '../actores/FormularioActores.model';

export default function EditarPeliculas(){

    const generosNoSeleccionados: generoDTO[] = [    
        {id: 3, nombre: 'Drama'},
    ]

    const generosSeleccionados: generoDTO[] = [
        {id: 1, nombre: 'Accion'},
        {id: 2, nombre: 'Comedia'},        
    ]

    const cinesSeleccionados: cineDTO[] = [{id: 1, nombre: 'Cienaga'}]
    const cinesNoSeleccionados: cineDTO[] = [{id: 2, nombre: 'StaMta'}]
    const actoresSeleccionados: actorPeliculaDTO[] = [
        {id: 1, nombre: 'Tommy Lee Jones', personaje: '', foto:'https://m.media-amazon.com/images/M/MV5BMTkyNjc4MDc0OV5BMl5BanBnXkFtZTcwOTc5OTUwOQ@@._V1_UX214_CR0,0,214,317_AL_.jpg'}
    ]

    return (
        <>        
            <h3>Editar Películas</h3>
            <FormularioPeliculas 
                actoresSeleccionados={actoresSeleccionados}
                cinesSeleccionados={cinesSeleccionados}
                cinesNoSeleccionados={cinesNoSeleccionados}
                generosNoSeleccionados={generosNoSeleccionados}
                generosSeleccionados={generosSeleccionados}
                modelo={{titulo:'El Hombre Zapato', enCines: true, trailer:'url',
                    fechaLanzamiento: new Date('2019-01-01T00:00:00')
                }}                
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}