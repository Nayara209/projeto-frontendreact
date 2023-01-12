import React from "react";
import './estilo.js'
import { Botao } from "./estilo.js";

const Button = () => {

    function adicionaCarrinho() {
        alert('Item Adicionado')
    }

    return (
        <Botao onClick="">Adicionar</Botao>
    )
}

export default Button