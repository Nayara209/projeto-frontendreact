import React from "react";
import './estilo.js'
import { Botao } from "./estilo.js";

const Button = () => {

    function adicionaCarrinho(props) {
        alert('Item Adicionado')
    }

    return (
        <Botao onClick={()=>adicionaCarrinho()}>Adicionar</Botao>
    )
}

export default Button