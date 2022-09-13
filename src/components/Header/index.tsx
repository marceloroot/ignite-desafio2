import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import coffLLogoImg from '../../assets/logo.svg'
import {MapPin,ShoppingCart} from 'phosphor-react'
export function Header(){
    return (
        <HeaderContainer>
            <div className="container">
                <img src={coffLLogoImg}/>

             <HeaderButtonContainer>
                 <HeaderButton variant="purple">
                    <MapPin size={20} weight="fill" />
                      Porto Alegre, RS    
                </HeaderButton>
                <HeaderButton variant="yellow">
                    <ShoppingCart size={20} weight="fill" />
                </HeaderButton>
             </HeaderButtonContainer>
            </div>

           
        </HeaderContainer>
    )
}