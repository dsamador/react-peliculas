import { Field } from "formik";

export default function FormGroupCheckbox(props: formGroupCheckbox) {
    return (
        <div className="form-group form-check">
            <Field type="checkbox" className="form-check-input" id={props.campo} name={props.campo} />
            <label className="form-check-label" htmlFor={props.campo}>{props.label}</label>
        </div>
    )
}

interface formGroupCheckbox{
    label: string;
    campo: string;
}