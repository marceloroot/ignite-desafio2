import styled from "styled-components";

export const InfoWhithIconContainer = styled.div`
 display: flex;
 align-items: center;
 gap:0.75rem;

`
interface IconContainerPros{
    iconBg:string;
}
export const IconContainer = styled.div<IconContainerPros>`
width:2rem;
height:2rem;
border-radius: 50%;

background:${({iconBg}) => iconBg}; 
color:${({theme}) => theme.colors["base-white"]};
display:flex;
align-items: center;
justify-content: center;

`