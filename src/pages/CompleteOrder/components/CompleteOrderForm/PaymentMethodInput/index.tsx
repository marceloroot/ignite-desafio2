import { ContContainer, PaymentMethodInputContainer } from "./styles";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

type  PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon:ReactNode;
    label:string;
}


export const PaymentMethodInput  = forwardRef<HTMLInputElement,PaymentMethodInputProps>(({ id, icon, label, ...props}, ref)=>{
    return(
    <PaymentMethodInputContainer>
            <input id={id} type="radio"  {...props} name="paymentMethod" ref={ref} />
            
             <label htmlFor={id}>
              <ContContainer>            
                {icon}
                {label}
              </ContContainer>
 
             </label>

        </PaymentMethodInputContainer>
        )
});