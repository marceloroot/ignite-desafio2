import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoofees } from "./components/SelectedCoofees";
import { CompleateOrderContainer } from "./styels";

export function CompleteOrderPage(){
    return(
      <CompleateOrderContainer className="container">
        <CompleteOrderForm />
        <SelectedCoofees />
      </CompleateOrderContainer>
    )
}