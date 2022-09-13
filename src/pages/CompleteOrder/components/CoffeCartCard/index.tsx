import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeCartCardContainer, RemoveButton } from "./styles";

export function CoffeCartCard(){
    return(
        <CoffeCartCardContainer>
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1664150400&Signature=J7IdVg5UdXRL-xzgoKnwbaLzC7q4PBNg2fkLMvis6ge~Q9tNvUjdTVFoGjg0wIbTeyeZKTt9EF4JVvYyYnMMytRtW17RpaIHR1OHHoLjmVbw8plB1jN7Hjwq-tGFb7OMeMy8qeM32CCX7EcczsCpBo8ovrYWH3bLiTmnptIcnUaSpCxYu~WoydQSyHsBNIqUc5Yci5-TNbBFtx51fNNmdbjGBqtuP1DKMKs0oepI5q0z3PW3br7T6OyJGQ4tqftSh9bseOwYb9efmAoQUHypSLu-79xdK29tn68-HAocALYYs0cvnd0pGjQYTJLMeqTmQswtbpeTzBKWCLxYQClHqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/> 
                <div>
                    <RegularText color="subtitle">Expresso Tradicional</RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small" />
                        <RemoveButton>
                            <Trash size={16}  />
                            Remover
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>
            <p>R$ 9,90</p>
        </CoffeCartCardContainer>
    )
}