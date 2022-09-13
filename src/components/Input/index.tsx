import { InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./styles";

// Pega todos os atributos do input nativo do html
type InputProps = InputHTMLAttributes<HTMLInputElement>;


export function Input({...props}:InputProps){
    return(
        <InputStyleContainer {...props} />
    );
} 