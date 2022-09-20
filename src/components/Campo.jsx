import React from "react"
import styled from "styled-components"

const Modelo = styled.div`
    background: #fff;
    border: 1px solid #900990;
    padding: 32px;
    margin: 16px 0;
`

export default function Campo(props){
    return <Modelo>
        { props.children }
    </Modelo> 
}