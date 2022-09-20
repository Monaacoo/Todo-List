import React from "react"
import styled from "styled-components"

const Modelo = styled.div`
    background: darkred;
    color: #ffff;
    padding: 30px;
`
const ModeloTexto =styled.div`
    color: #ffff;
    padding-top: 80px;
    font-size: 50px;
`

export default function Titulo(){
    return <Modelo>
        <ModeloTexto>
            Arriba
        </ModeloTexto>
    </Modelo>
}