import FormularioActores from './FormularioActores';

export default function CrearActores(){
    return (
        <>        
            <h3>Crear Actor</h3>
            <FormularioActores
                modelo={{nombre:'Fulanito', 
                fechaNacimiento:new Date('1996-06-01T00:00:00')}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}