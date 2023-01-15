 import React from "react"
import Button from "../Button/Button.js"
 import { Container, ContainerPrincipal, ProdutoImg, ProdutosNome, ProdutosNumber,ProdutosValor } from "./estilo.js"
 
 
 const ProdutosCard = (props) => {
     
     return (
         <ContainerPrincipal>
               <Container >

                     <ProdutosNumber> {props.pro.id} </ProdutosNumber>

                     <ProdutosNome>{props.pro.name}</ProdutosNome>

                     <ProdutoImg src={props.pro.img} />

                     <ProdutosValor>R$ {props.pro.valor} </ProdutosValor>
                  
                    <Button/> 
                </Container>
                
        
          
   </ContainerPrincipal>
   
    )
}

export default ProdutosCard