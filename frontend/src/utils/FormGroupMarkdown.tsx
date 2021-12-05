import { Field, useFormikContext } from "formik";
import ReactMarkdown from "react-markdown";
import './FormGroupMarkdownCSS.css';

export default function FormGroupMarkdown(props: formGroupMarkdownProps){

    const {values} = useFormikContext<any>();

    return(
        <div className="from-group form-markdown">
            <div>
                <label htmlFor="">{props.label}</label>
                <div>
                    <Field name={props.campo} as="textarea" className="from-textarea" />
                </div>
            </div>
            <div>
                <label htmlFor="">{props.label} (preview):</label>
                <div className="markdown-container">
                    <ReactMarkdown>{values[props.campo]}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

interface formGroupMarkdownProps{
    campo: string;
    label: string;
}