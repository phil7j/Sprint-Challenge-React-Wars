import React from 'react'

function Character(props) {
    return (
        <div>
            <p>{props.data.name}</p>
            <p>{props.data.gender}</p>
            <p>{props.data.height}</p>
            <p>{props.data.eye_color}</p>
            <p>{props.data.birth_year}</p>
        </div>
    )
}

export default Character
