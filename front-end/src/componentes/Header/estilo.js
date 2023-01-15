import styled from "styled-components"
import ImgFundo from "../../img/stars.jpg"


export const CaixaCabecalho = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    align-items: center;
    justify-content: center;
    font-size: 150%
    

`
export const SegundoElemento = styled.div`
    background-image: url(${ImgFundo});
    backgroung-color: black;
    backgroung-repeat: no-repeat;
    height: 20vh;
    display: flex;
`
export const TerceiroElemento = styled.nav`
    background-color: white;
`


export const Lista = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style-type: none;
`
export const ImagemNav = styled.img`

    width: 5vw;
    padding: 5px;
`

export const Container = styled.div`
  display: flex;
  gap: 16px;
  padding: 18px;
  border: 2px solid #000;
  
`;