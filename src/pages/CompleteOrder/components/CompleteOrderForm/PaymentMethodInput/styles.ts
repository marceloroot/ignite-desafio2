import styled, { css } from "styled-components";

export const PaymentMethodInputContainer = styled.div`
 input {
   visibility: hidden;
   appearance:none ;
 }

 /* quando input estiver marcado vou pegar a label depois dela o + e para ser depois */
 input:checked + label div{
   ${({theme}) =>css`
   background: ${theme.colors["brand-purple-light"]};
   border: ${theme.colors["brand-purple"]};

      &:hover{
         background: ${theme.colors["brand-purple-light"]};
      }
   `}
  

 }
`;

export const ContContainer = styled.div`
padding:0 1rem;
 background-color:${({theme}) => theme.colors["base-button"]};
 color:${({theme}) => theme.colors["base-text"]};
 display:flex;
 align-items: center;
 justify-content: flex-start;
 gap:0.75rem;
 font-size: 0.75rem;
 text-transform: uppercase;
 border-radius: 6px;
 height: 3rem;
 border:1px solid ${({theme}) => theme.colors["base-button"]};
 transition: 0.4s;
 
 svg{
    color: ${({theme}) => theme.colors["brand-purple"]};
 }

 &:hover{
    background-color: ${({theme}) => theme.colors["base-hover"]};
 }

 /* user-select a pessoa nao pode copiar */
 user-select:none;

`
 