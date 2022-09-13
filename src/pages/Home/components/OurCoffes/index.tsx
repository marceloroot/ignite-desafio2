import { TitleText } from "../../../../components/Typography";
import { CoffeCard } from "../CoffeCard";
import { CoffeList, OurCoffesContainer } from "./stytes";
import {coffees} from '../../../../data/coffees';

export function OurCoffes(){
    return(
        <OurCoffesContainer className="container">
            <TitleText size="l" color="subtitle">Nossos cafés</TitleText>
            <CoffeList>
                {coffees.map((coffee) =>(
                   <CoffeCard key={coffee.id} coffee={coffee}  />
                
                ))}
              
             
            </CoffeList>
           


        </OurCoffesContainer>
    )
}