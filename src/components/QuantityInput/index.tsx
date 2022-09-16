import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";

interface QuantityInputProps{
    size?:"small" | "medium";
    quantity:number;
    onIncrese:() =>void;
    onDecrese:() =>void;
}

export function QuantityInput({onIncrese, onDecrese, quantity,size = 'medium'}:QuantityInputProps){
    return(
        <QuantityInputContainer size={size}>
            <IconWrapper disabled={quantity<=1} onClick={onDecrese}>
                <Minus size={14} weight="fill" />
            </IconWrapper>
            <input  type="number" readOnly value={quantity}/>
            <IconWrapper  onClick={onIncrese}>
                <Plus size={14} weight="fill" />
            </IconWrapper>
        </QuantityInputContainer>
    )
}