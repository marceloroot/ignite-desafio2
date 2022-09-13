import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import introImg from '../../../../assets/intro-img.png';
import { RegularText } from "../../../../components/Typography";
import { InfoWhithIcon } from "../../../../components/infoWithIcon";
import {ShoppingCart,Package,Timer,Coffee} from 'phosphor-react'
import { useTheme } from "styled-components";
export function Intro(){
    const {colors} = useTheme();
    return (
        <IntroContainer>
              <IntroContent className="container">
                <div>
                  <section>
                    <IntroTitle size="xl">
                    Encontre o café perfeito para qualquer hora do dia
                    </IntroTitle>
                    <RegularText size="l" color="subtitle" as="h3">
                      Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </RegularText>
                  </section>

                  <BenefitsContainer>
                    <InfoWhithIcon 
                      icon={<ShoppingCart size={20} weight="fill" />}
                      text="Compra simples e segura"
                      iconBg={colors["brand-yellow-dark"]}
                    />

                     <InfoWhithIcon 
                      icon={<Package size={20} weight="fill" />}
                      text="Embalagem mantém o café intacto"
                      iconBg={colors["base-text"]}
                    />

                    <InfoWhithIcon 
                      icon={<Timer size={20} weight="fill" />}
                      text="Entrega rápida e rastreada"
                      iconBg={colors["brand-yellow"]}
                    />
                    <InfoWhithIcon 
                      icon={<Coffee size={20} weight="fill" />}
                      text="O café chega fresquinho até você"
                      iconBg={colors["brand-purple"]}
                    />

                  </BenefitsContainer>
                </div>
                <img src={introImg} />
              </IntroContent>
        </IntroContainer>
    )
}