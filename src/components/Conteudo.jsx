import React, { useState } from "react"
import styled from "styled-components"

const Modelo = styled.div`
    background: ${
        props => props.feito ? "red" : "#9238"
    };
    text-align: center;
    margin: 10px 0;
    padding: 12px;
`

export default function Conteudo(props){
    
    const [feito, definirFeito] = useState(false)
    function MarcarFeito(){
        definirFeito(!feito)
    }      
    
    return <Modelo onClick={ MarcarFeito } feito={feito}>
        { props.tarefa }
    </Modelo>

}   