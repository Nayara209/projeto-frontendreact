 import React from "react"
import Button from "../Button/Button.js"
 import { Container, ContainerPrincipal, ProdutoImg, ProdutosNome, ProdutosNumber,ProdutosValor } from "./estilo.js"
 
 
 const ProdutosCard = ({itens}) => {
     
     return (
         <ContainerPrincipal>

                {itens.map(itens =>(
               <Container >

                     <ProdutosNumber> {itens.id} </ProdutosNumber>

                     <ProdutosNome>{itens.name}</ProdutosNome>

                     <ProdutoImg src={itens.img} />

                     <ProdutosValor>R$ {itens.valor} </ProdutosValor>
                     <Button/>
                </Container>
                
          ))}
          
   </ContainerPrincipal>
   
    )
}
<Button/>
export default ProdutosCard