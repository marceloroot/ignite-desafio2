import { ReactNode } from "react";
import { RegularText } from "../../../../components/Typography";
import { SectionTitleContaier } from "./styles";

interface SectionTitleProps{
    title:string;
    subtitle:string;
    icon:ReactNode;
}
export function SectionTitle({title,subtitle,icon}:SectionTitleProps){
   return(
    <SectionTitleContaier>
        {icon}
        <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
        </div>
    </SectionTitleContaier>
   )
}