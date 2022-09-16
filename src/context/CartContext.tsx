    import {createContext, ReactNode, useEffect, useState} from 'react';
    import { Coffee } from '../pages/Home/components/CoffeCard';
    import {produce} from 'immer'

    export interface CartItem extends Coffee{
       quantity:number;
    }

    interface CartContextTypes{
        cartItems: CartItem[];
        cartQuantity:number;
        cartItemTotal:number;
        addCoffeeToCart:(coffee: CartItem) => void;
        changeCartItemQuantity:(
            cartItemId:number,
            type:'increase' | 'decrease'
        ) => void;
        removeCartItem:(cartItemId:number) => void;
        cleanCart:() => void;
    }

    interface CartContextProps{
        children:ReactNode;
    }

    const COFFEE_ITEMS_STORAGE_KEY ="coffeeDelivery:cartItems"; 

    export const CartContext = createContext({} as CartContextTypes);

    export function CartContextProvider({children}: CartContextProps){
        
        const [cartItems,setCartItems] = useState<CartItem[]>(() =>{
            const storageCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
            if(storageCartItems){
                return JSON.parse(storageCartItems);
            }
            return [];
        });
       
        const cartQuantity = cartItems.length;

        const cartItemTotal = cartItems.reduce((total,cartItem)=>{
               return total + cartItem.price * cartItem.quantity;
        },0)
        
        function addCoffeeToCart(coffee:CartItem){
            const coffeeAlredyExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === coffee.id);
            const newCart =produce(cartItems,(draft)=>{
                if(coffeeAlredyExistsInCart < 0){
                    draft.push(coffee);
                }else{
                    draft[coffeeAlredyExistsInCart].quantity += coffee.quantity;
                }
            });

            setCartItems(newCart);
        }
         
        function changeCartItemQuantity(cartItemId:number,type:'increase' | 'decrease'){
          const newCart = produce(cartItems,(draft)=>{
            const coffeeExistInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);
            if(coffeeExistInCart >=0){
                const item = draft[coffeeExistInCart];
                draft[coffeeExistInCart].quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
            }
          });
          setCartItems(newCart)
        }

        function removeCartItem(cartItemId:number){
            const newCart = produce(cartItems,(draft)=>{
                const coffeeExistInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);
                if(coffeeExistInCart >=0){
                   draft.splice(coffeeExistInCart,1)
                }
            });
            setCartItems(newCart);
        }

        function cleanCart(){
            setCartItems([]);
        }

        useEffect(() =>{
          localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY,JSON.stringify(cartItems));
        },[cartItems])


        return (
            <CartContext.Provider value={{cartItems,cartQuantity,cartItemTotal,addCoffeeToCart,changeCartItemQuantity,removeCartItem,cleanCart}}>
                {children}
            </CartContext.Provider>
        )
    }