import FormularioPeliculas from './FormularioPeliculas';
export default function EditarPeliculas(){
    return (
        <>        
            <h3>Editar Películas</h3>
            <FormularioPeliculas 
                modelo={{titulo:'El Hombre Zapato', enCines: true, trailer:'url',
                    fechaLanzamiento: new Date('2019-01-01T00:00:00')
                }}                
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}