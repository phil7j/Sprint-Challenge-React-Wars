import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 220px;
    border: 3px solid white;
    margin: 20px;
    padding: 10px;
    background: #000000ad;
    border-radius: 20px;
    color: white;
    transition: background 400ms ease;
    p {
        text-align: left;
    }
    h1 {
        font-size: 1.5rem;
    }
    :hover {
        background: black;
    }

`

function Character(props) {
    return (
        <Card>
            <h1>{props.data.name}</h1>
            <p>Gender: {props.data.gender}</p>
            <p>Height: {props.data.height}</p>
            <p>Eye Color: {props.data.eye_color}</p>
            <p>Born: {props.data.birth_year}</p>
        </Card>
    )
}

export default Character
