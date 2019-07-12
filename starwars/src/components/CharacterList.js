import React from 'react'
import Character from './Character'
import styled from 'styled-components'

const GridList = styled.div`
  display: flex;
  margin: 20px;
  flex-wrap: wrap;
  justify-content: center;
`

function CharacterList(props) {
    return (
        <GridList>
            {props.data.map(item =>  <Character data={item} key={item.name} /> )}

        </GridList>
    )
}

export default CharacterList