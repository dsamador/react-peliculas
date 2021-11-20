import { Form, Formik, FormikHelpers } from "formik";
import { actorCreacionDTO } from "./FormularioActores.model";
import FormGroupText from '../utils/FormGroupText';
import Button from '../utils/Button';
import { Link } from "react-router-dom";
import * as Yup from 'yup';

export default function FormularioActores(props:formularioActoresProps){
    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" />
                    <Button disabled={formikProps.isSubmitting}
                        type="submit"
                    >Salvar</Button>
                    <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
                </Form>
            )}
            
        </Formik>
    )
}

interface formularioActoresProps{
    modelo: actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, acciones:FormikHelpers<actorCreacionDTO>) : void;
}