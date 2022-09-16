import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { AddCartWrapper, CardFooter, CoffeCardContainer, Description, Name, Tags } from "./styles";
import {ShoppingCart} from 'phosphor-react'
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

export interface Coffee {
    id:number;
    tags:string[];
    name:string;
    description:string;
    photo:string;
    price:number;
}

interface CoffeeProps {
    coffee:Coffee;
}
export function CoffeCard({coffee}:CoffeeProps){
    const [quantity,setQuantity] =useState(1);
    const {addCoffeeToCart} = useCart();

    function handleIncrease(){
        setQuantity((state) => state + 1);
    }
   
    function handleDecrease(){
        if(quantity >0){
            setQuantity((state) => state - 1);
       }
    }

    function handleAddToCart() {
        const coffeeToAdd ={
            ...coffee,
            quantity,
        }
        addCoffeeToCart(coffeeToAdd);
    }

    const formatPrice = formatMoney(coffee.price)
    return(
        <CoffeCardContainer>
            <img src={`/coffees/${coffee.photo}`} />
            <Tags>
                {coffee.tags.map((tag) =>(
                      <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))}
            </Tags>
            <Name>{coffee.name}</Name>
            <Description>{coffee.description}</Description>
             

             <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">{formatPrice}</TitleText>
                </div>


                <AddCartWrapper>
                    <QuantityInput 
                      onIncrese={handleIncrease}
                      onDecrese={handleDecrease}
                      quantity={quantity}
                    />
                    <button onClick={handleAddToCart}>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </AddCartWrapper>

                
             </CardFooter>
        </CoffeCardContainer>
    )
}