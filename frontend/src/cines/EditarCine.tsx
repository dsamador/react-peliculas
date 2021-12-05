import FormularioCines from './FormularioCines';

export default function EditarCines(){
    return (
        <>        
            <h3>Editar Cines</h3>
            <FormularioCines 
                modelo={{nombre:'Colombia Salvaje', latitud: 18.471210, longitud: -69.933270}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}