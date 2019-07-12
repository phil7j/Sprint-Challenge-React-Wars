import React from 'react'
import styled from 'styled-components'

const Heading = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 20px;
margin-right: 20px;

`

const Button = styled.button`
    font-family: 'Space Mono', monospace;
    background: none;
    color: black;
    border: none;
    outline: none;
    font-size: 0.8rem;
    font-weight: 800;
    cursor: pointer;
    transition: text-shadow 200ms ease;
    :hover {
        text-shadow: -3px -1px 2px rgba(0,0,0,0.48);
    }
`
const DisabledButton = styled.button`
 font-family: 'Space Mono', monospace;
    background: none;
    color: grey;
    border: none;
    outline: none;
    font-size: 0.8rem;
    font-weight: 800;
`

function Header(props) {
    return (
        <Heading>
            {!props.prevPage ? <DisabledButton>Previous Page</DisabledButton> : <Button onClick={()=> props.getCharacters(props.prevPage)}>Previous Page</Button> }
            <h1 className="Header">React Wars</h1>
            <Button onClick={()=> props.getCharacters(props.nextPage)}>Next Page</Button>
        </Heading>
    )
}

export default Header
