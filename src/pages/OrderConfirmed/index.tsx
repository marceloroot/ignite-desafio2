import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import Illustration from '../../assets/Illustration.svg'
import { InfoWhithIcon } from "../../components/infoWithIcon";
import {MapPin,Clock,CurrencyDollar} from 'phosphor-react'
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";
import { paymentMethod } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions";
import { useEffect } from "react";
interface LocationTYpe{
    state:OrderData;
}
export function OrderConfirmedPage(){
    const {colors} = useTheme();
    const {state} = useLocation() as unknown as LocationTYpe;
    const navigate = useNavigate();

   useEffect(() =>{
       if(!state){
         navigate("/")
       }
   },[])
  
   if(!state) return <></>;
    return(
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText size="l"> Uhu! Pedido Confirmado</TitleText>
                <RegularText size="l" color="subtitle"> Agora é só aguardar que logo o café chegará até você</RegularText>
            </div>

            <section>
               <OrderDetailsContainer>
                 <InfoWhithIcon 
                   icon={<MapPin weight="fill" />}
                   iconBg={colors["brand-purple"]}
                   text={
                    <RegularText>
                        Entrega em <strong>{state.street},{state.number}</strong>, 102 
                        <br />
                        {state.distsrict} - {state.city},  {state.UF}
                    </RegularText>
                   }
                 />

                 <InfoWhithIcon 
                   icon={<Clock weight="fill" />}
                   iconBg={colors["brand-yellow"]}
                   text={
                    <RegularText>
                        Previsão de entrega
                        <br />
                        <strong>20 min - 30 min</strong>
                    </RegularText>
                   }
                 />

                <InfoWhithIcon 
                   icon={<CurrencyDollar weight="fill" />}
                   iconBg={colors["brand-yellow"]}
                   text={
                    <RegularText>
                        Pagamento na entrega
                        <br />
                        <strong>{paymentMethod[state.paymentMethod].label}</strong>
                    </RegularText>
                   }
                 />
               </OrderDetailsContainer>

                <img src={Illustration} />
            </section>
        </OrderConfirmedContainer>
    )
}