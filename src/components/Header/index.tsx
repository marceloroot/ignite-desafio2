import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import coffLLogoImg from '../../assets/logo.svg'
import {MapPin,ShoppingCart} from 'phosphor-react'
import { NavLink } from "react-router-dom";
export function Header(){
    return (
        <HeaderContainer>
            <div className="container">
            <NavLink to ="/">
                <img src={coffLLogoImg}/>
            </NavLink>

             <HeaderButtonContainer>
                 <HeaderButton variant="purple">
                    <MapPin size={20} weight="fill" />
                      Porto Alegre, RS    
                </HeaderButton>
                <NavLink to ="/completeOrder">
                <HeaderButton variant="yellow">
                    <ShoppingCart size={20} weight="fill" />
                </HeaderButton>
                </NavLink>
             </HeaderButtonContainer>
            </div>

           
        </HeaderContainer>
    )
}