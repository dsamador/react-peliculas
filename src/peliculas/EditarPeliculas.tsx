import { generoDTO } from '../generos/generos.model';
import FormularioPeliculas from './FormularioPeliculas';
import { cineDTO } from '../cines/cines.model';

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

    return (
        <>        
            <h3>Editar Películas</h3>
            <FormularioPeliculas 
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