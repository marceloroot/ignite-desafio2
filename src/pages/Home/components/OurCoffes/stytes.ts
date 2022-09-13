import styled from "styled-components";

export const OurCoffesContainer = styled.section`
 width: 100%;
 margin-top:2rem;
`;

export const CoffeList = styled.div`
 width: 100%;
 display: grid;
 /* ele cria 4 colunas de 1fr */
 grid-template-columns: repeat(4,1fr) ;
 
 /* distancia entre colunas */
 column-gap:2rem ;

 /* distancia entre Linhas */
 row-gap:2.5rem ;

 margin-top:3.5rem;

`;