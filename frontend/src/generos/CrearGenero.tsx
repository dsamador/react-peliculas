import axios from 'axios';
import FormularioGeneros from './FormularioGeneros';
import { generoCreacionDTO } from './generos.model';
import { urlGeneros } from '../utils/endpoints';
import { useHistory } from 'react-router-dom';

export default function CrearGenero(){
    
    const history = useHistory();

    async function crear(genero: generoCreacionDTO){
        try{
            await axios.post(urlGeneros, genero);
            history.push('/generos');
        }
        catch(error){

        }
    }

    return (        
        <>
            <h3>Crear genero</h3>
            <FormularioGeneros modelo={{nombre:''}}
                onSubmit={async (valores)=>{
                    await crear(valores);
                }}
            />  
        </>
    )
}