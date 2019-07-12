import React from 'react'
import Character from './Character'

function CharacterList(props) {
    return (
        <div>
            {props.data.map(item =>  <Character data={item} /> )}

        </div>
    )
}

export default CharacterList