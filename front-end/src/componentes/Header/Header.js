import React from "react"
import logo from "../../img/logo1.png"
import { CaixaCabecalho, Lista, ImagemNav, SegundoElemento, TerceiroElemento, Container } from "./estilo.js"

import iconeCartao from "../../img/cartao.jpg"
import iconeFrete from "../../img/frete.png"


const Header = (props) => {

    return (
        <header>
            <CaixaCabecalho>
                <img src={logo} alt="Logo" />
                <h1>Espaço Sideral</h1>
            </CaixaCabecalho>
            {<Container>
                <input
                    type="number"
                    placeholder="Buscar por id"
                    value={props.id}
                    onChange={(ev) => { props.setId(ev.target.value) }}
                />
                <input
                    type="text"
                    placeholder="Buscar por nome"
                    value={props.name}
                    onChange={(ev)=> {props.setName(ev.target.value)}}
                   
                /> 
                 {/* <input
                    type="number"
                    placeholder="Buscar por valor"
                    value={props.valor}
                    onChange={(ev)=> {props.setValor(ev.target.value)}}
                   
                    
                />
                <select onChange={(ev)=>{props.setOrdenar(ev.target.value)}} >
                    <option value="">Ordenar</option>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </select> */}
               

            </Container>}

            <SegundoElemento>

            </SegundoElemento>

            <TerceiroElemento>
                <Lista>

                    <li> <ImagemNav src={iconeCartao} /></li>
                    <li> <ImagemNav src={iconeFrete} /></li>

                </Lista>
            </TerceiroElemento>
        </header >
    )
}
export default Header