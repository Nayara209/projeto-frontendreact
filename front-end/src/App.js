import { GlobalStyle, } from "./GlobalStyle.js"
import Header from "./componentes/Header/Header.js";
import Imagem from "./img/Bo.jpeg"
import Imagem2 from "./img/bb-8.jpg"
import Imagem3 from "./img/darth.jpg"
import Imagem4 from "./img/espada.jpeg"
import Imagem5 from "./img/Yoda.jpeg"
import Imagem6 from "./img/pelucia.webp"
import ProdutosCard from "./componentes/ProdutosCard/ProdutosCard.js";
import { useState } from "react";
import { ContainerPrincipal } from "./componentes/ProdutosCard/estilo.js";



function App() {
  const itens = [
    { id: 1, name: "Boneca Rey", valor: 150.00, img: Imagem },
    { id: 2, name: "Star Wars BB-8", valor: 380.00, img: Imagem2 },
    { id: 3, name: "Boneco Darth Vader", valor: 117.90, img: Imagem3 },
    { id: 4, name: "Espada Star Wars", valor: 50.00, img: Imagem4 },
    { id: 5, name: "Boneco Yoda", valor: 90.00, img: Imagem5 },
    { id: 6, name: "Pelúcia Chewbacca", valor: 70.00, img: Imagem6 }
  ]

  const [prod] = useState(itens)
  const [id, setId] = useState("")


  return (
    <>
      <GlobalStyle />
      <Header id={id}
        setId={setId}/>
      <ContainerPrincipal>
        {prod
          // .filter((pro) =>{
          //   console.log(pro.id)
          //   return pro.id.includes(+id)
          // })
          .map(pro => {
            return <ProdutosCard key={pro.id} pro={pro} />
          })}
      </ContainerPrincipal>

    </>


  )
};
export default App
