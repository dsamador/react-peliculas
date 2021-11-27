import FormularioPeliculas from './FormularioPeliculas';
import { generoDTO } from '../generos/generos.model';
import { cineDTO } from '../cines/cines.model';

export default function CrearPeliculas(){

    const generos: generoDTO[] = [
        {id: 1, nombre: 'Accion'},
        {id: 2, nombre: 'Comedia'},
        {id: 3, nombre: 'Drama'},
    ]

    const cines: cineDTO[] = [{id: 1, nombre: 'Cienaga'}, {id: 2, nombre: 'StaMta'}]

    return (
        <>        
            <h3>Crear Película</h3>
            <FormularioPeliculas 
                cinesNoSeleccionados={cines}
                cinesSeleccionados={[]}
                generosNoSeleccionados={generos}
                generosSeleccionados={[]}
                modelo={{titulo:'', enCines: false, trailer:''}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}