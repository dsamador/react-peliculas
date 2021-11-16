import { useParams } from "react-router";

export default function EditarGenero(){
    const {id}: any = useParams();
    return (
        <>
           <h3> Editar genero</h3>
           <h4>El id es {id}</h4>
        </>
    )
}