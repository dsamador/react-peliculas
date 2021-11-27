import FormularioPeliculas from './FormularioPeliculas';
import { generoDTO } from '../generos/generos.model';
export default function CrearPeliculas(){

    const generos: generoDTO[] = [
        {id: 1, nombre: 'Accion'},
        {id: 2, nombre: 'Comedia'},
        {id: 3, nombre: 'Drama'},
    ]

    return (
        <>        
            <h3>Crear Película</h3>
            <FormularioPeliculas 
                generosNoSeleccionados={generos}
                generosSeleccionados={[]}
                modelo={{titulo:'', enCines: false, trailer:''}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}