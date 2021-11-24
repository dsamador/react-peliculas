import { Link } from "react-router-dom";
import FormularioCines from './FormularioCines';

export default function EditarCines(){
    return (
        <>        
            <h3>Editar Cines</h3>
            <FormularioCines 
                modelo={{nombre:'Colombia Salvaje'}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}