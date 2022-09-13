import { TitleText } from "../../../../components/Typography";
import { CoffeCartCard } from "../CoffeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoofeesContainer } from "./styles";

export function SelectedCoofees(){
    return(
        <SelectedCoofeesContainer>
           <TitleText size="xs" color="subtitle">
            Cafés Selecionados
           </TitleText>

           <DetailsContainer>
            <CoffeCartCard />
            <CoffeCartCard />
            <CoffeCartCard />
            
            <ConfirmationSection />
            
           </DetailsContainer>
        </SelectedCoofeesContainer>
    )
}