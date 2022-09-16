import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoofees } from "./components/SelectedCoofees";
import { CompleateOrderContainer } from "./styels";

import * as zod from 'zod';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm, FormProvider} from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethod{
  credit="credit",
  debit="debit",
  money="money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep:zod.string().min(1,"Informe o CEP"), 
  street:zod.string().min(1,"Informe a Rua"), 
  number:zod.string().min(1,"Informe o Número"), 
  complement:zod.string(), 
  distsrict:zod.string().min(1,"Informe o Bairro"), 
  city:zod.string().min(1,"Informe a Cidade"), 
  UF:zod.string().min(1,"Informe o UF"), 
  paymentMethod:zod.nativeEnum(PaymentMethod,{
    errorMap:() =>{
      return {message:"Informe o metodo de pagamento"}
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function CompleteOrderPage(){
  const confirmOrderForm =useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  });
  
  const {handleSubmit} = confirmOrderForm;
  const navigate = useNavigate()
 
  const {cleanCart} = useCart();

  function handleConfirmOrder(data:ConfirmOrderFormData ){
    navigate("/orderConfirmed",{
      state: data
    })

    cleanCart();
    // console.log(data)
  }
    return(
      <FormProvider {...confirmOrderForm}>
      <CompleateOrderContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompleteOrderForm />
        <SelectedCoofees />
      </CompleateOrderContainer>
      </FormProvider>
    )
}