import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeCartCard } from "../CoffeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoofeesContainer } from "./styles";

export function SelectedCoofees(){
    const {cartItems} = useCart();
    return(
        <SelectedCoofeesContainer>
           <TitleText size="xs" color="subtitle">
            Cafés Selecionados
           </TitleText>

           <DetailsContainer>
            {cartItems.map((cart) =>(
                 <CoffeCartCard key={cart.id} coffee={cart} />
            ))}
          
            
            <ConfirmationSection />
            
           </DetailsContainer>
        </SelectedCoofeesContainer>
    )
}