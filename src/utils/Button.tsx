import { ReactNode } from "react";

export default function Button(props: buttonProps){
    return (
        <button 
            type={props.type} 
            className='btn btn-primary'
            onClick={props.onClick}
            >{props.children}</button>
    )
}
interface buttonProps{
    children: ReactNode;/* Para meter texto y no html dentro del componente */
    onClick?(): void;
    type: "button" | "submit"
}

Button.defaultProps = {
    type:"button"
}
