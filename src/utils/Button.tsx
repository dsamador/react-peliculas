import { ReactNode } from "react";

export default function Button(props: buttonProps){
    return (
        <button 
            type={props.type} 
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled}            
            >{props.children}</button>
    )
}
interface buttonProps{
    children: ReactNode;/* Para meter texto y no html dentro del componente */
    onClick?(): void;
    type: "button" | "submit";
    disabled: boolean;
    className: string;
}

Button.defaultProps = {
    type:"button",
    disabled: false,
    className:'btn btn-primary'
}
