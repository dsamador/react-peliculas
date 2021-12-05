import { useParams } from "react-router";
import FormularioGeneros from "./FormularioGeneros";

export default function EditarGenero(){
    const {id}: any = useParams();
    return (
        <>
           <h3> Editar genero</h3>
           <h4>El id es {id}</h4>
           <FormularioGeneros modelo={{nombre:'Accion'}}
                onSubmit={async (valores)=>{
                    await new Promise(r => setTimeout(r, 3000));
                    console.log(valores)                    
                }}
            />  
        </>
    )
}