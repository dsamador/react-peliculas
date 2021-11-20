import FormualrioGeneros from './FormularioGeneros';

export default function CrearGenero(){
    return (        
        <>
            <h3>Crear genero</h3>
            <FormualrioGeneros modelo={{nombre:''}}
                onSubmit={async (valores)=>{
                    await new Promise(r => setTimeout(r, 3000));
                    console.log(valores)                    
                }}
            />  
        </>
    )
}