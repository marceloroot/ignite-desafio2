import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { RegularText } from "../../../../components/Typography";
import { PaymentMethodInput } from "./PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./styles";
export const paymentMethod = {
    credit:{
        label:"Cartão de Crédito",
        icon:<CreditCard size={16} />
    },
    debit:{
        label:"Cartão de Débito",
        icon:<Bank size={16} />
    },
    money:{
        label:"Dinheiro",
        icon:<Money size={16} />
    }
}
export function PaymentMethodOptions(){
     const {register,formState:{errors} } = useFormContext();
     const paymentMethodError = errors?.paymentMethod?.message as unknown as string;

    return(
        <PaymentMethodOptionsContainer>
            {/* map(([item])) desestrutura o array 
            primeiro valor e a key e as chaves "credit,debit,money" */}
         
            {Object.entries(paymentMethod).map(([key,{label,icon}])=>(
                    <PaymentMethodInput
                      key={label} 
                      id={key} 
                      label={label} 
                      icon={icon} 
                      value={key} 
                      {...register("paymentMethod")}
                    />
            ))}
            {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
        </PaymentMethodOptionsContainer>
    )
}