import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { CartItem } from "../../../../context/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ActionsContainer, CoffeCartCardContainer, RemoveButton } from "./styles";
interface CoffeCartCardProps{
    coffee:CartItem
}
export function CoffeCartCard({coffee}:CoffeCartCardProps){

    const {changeCartItemQuantity,removeCartItem} = useCart();

    function handleIncrease(){
        changeCartItemQuantity(coffee.id, "increase")
    }

    function handleDecrease(){
        changeCartItemQuantity(coffee.id, "decrease")
    }
 
    function handleRemove(){
        removeCartItem(coffee.id);
    }

    const coffeeTotal = coffee.price * coffee.quantity;
    const formattedPrice = formatMoney(coffeeTotal);
    return(
        <CoffeCartCardContainer>
            <div>
                <img src={`/coffees/${coffee.photo}`}/> 
                <div>
                    <RegularText color="subtitle">{coffee.name}</RegularText>
                    <ActionsContainer>
                        <QuantityInput
                          size="small"
                          quantity={coffee.quantity}
                          onIncrese={handleIncrease}
                          onDecrese={handleDecrease}
                        />
                        <RemoveButton onClick={handleRemove}>
                            <Trash size={16}  />
                            Remover
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>
            <p>R$ {formattedPrice}</p>
        </CoffeCartCardContainer>
    )
}