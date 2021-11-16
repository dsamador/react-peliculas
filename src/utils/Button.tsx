import { ReactNode } from "react";

export default function Button(props: buttonProps){
    return (
        <button 
            type="button" 
            className='btn btn-primary'
            onClick={props.onClick}
            >{props.children}</button>
    )
}
interface buttonProps{
    children: ReactNode;/* Para meter texto y no html dentro del componente */
    onClick(): void;
}
