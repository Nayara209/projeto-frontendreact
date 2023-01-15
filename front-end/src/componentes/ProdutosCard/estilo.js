 import styled from "styled-components"

 export const ContainerPrincipal = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap:10px;
    padding: 30px
`


 export const Container = styled.div`
 background-color: #3333FF;
 width: 25vw;
 display: flex;
 flex-direction: column;
 height: 62vh;
 border-radius: 1px;
 box-shadow: 0.2em 0.2em 0.4em black;
 `;

export const ProdutosNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-weight: 600;
  text-align: left;
`;

export const ProdutosNome = styled.h1`
text-align: center;
    font-size: 40px;
    margin: 0;
    padding: 5px;
`;

export const ProdutosValor = styled.h1`
font-size: 40px;
`;
export const ProdutoImg = styled.img`
align-self: center;
margin:2;
width: 19vw;
border-radius: 5px;
`;
export const BotaoAdicionar = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`;


