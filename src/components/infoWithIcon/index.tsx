import { ReactNode } from "react";
import { IconContainer, InfoWhithIconContainer } from "./styles";


interface InfoWhithIconProps{
    // ReactNode == passa html
    icon:ReactNode; 
    text: string | ReactNode;
    iconBg:string;
}
export function InfoWhithIcon({icon,text,iconBg}:InfoWhithIconProps){
    return(
        <InfoWhithIconContainer>
            <IconContainer iconBg={iconBg}>{icon}</IconContainer>
            {typeof text == "string" ? <p>{text}</p> :text}

        </InfoWhithIconContainer>
    )
}