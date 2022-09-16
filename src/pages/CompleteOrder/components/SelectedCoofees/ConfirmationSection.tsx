import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3;
export function ConfirmationSection(){
    const {cartItemTotal,cartQuantity} = useCart();
    const cartTotal = cartItemTotal + DELIVERY_PRICE;

    const formattedItemsTotal = formatMoney(cartItemTotal);
    const formattedCartTotal = formatMoney(cartTotal);
    const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);
    return(
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s" >Total de itens</RegularText>
                <RegularText >R$ {formattedItemsTotal}</RegularText>
            </div>
            <div>
                <RegularText size="s" >Entrega</RegularText>
                <RegularText >R$ {formattedDeliveryPrice}</RegularText>
            </div>
            <div>
            <RegularText size="l" weight="700" color="subtitle" >R$ {formattedCartTotal} </RegularText>
            <RegularText size="l" weight="700" color="subtitle" >Total</RegularText>
            </div>

            <Button text="Confirmar Pedido" disabled={cartQuantity <=0} type="submit"/>

        </ConfirmationSectionContainer>
    )
}